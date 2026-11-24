import test from 'node:test';
import assert from 'node:assert/strict';
import { ILLUSTRATIVE_PROJECTS } from '../data/teenData';
import { getPageSeo } from './seo';
import { filterProjectExamples, validateCompanyInquiry } from './filters';

test('SEO metadata lengths stay within search snippet guidelines', () => {
  const companySeo = getPageSeo('/company');
  const teenSeo = getPageSeo('/teen');

  assert.ok(companySeo.title.length >= 30 && companySeo.title.length <= 65);
  assert.ok(companySeo.description.length >= 120 && companySeo.description.length <= 165);

  assert.ok(teenSeo.title.length >= 30 && teenSeo.title.length <= 65);
  assert.ok(teenSeo.description.length >= 120 && teenSeo.description.length <= 165);

  assert.notEqual(companySeo.title, teenSeo.title);
  assert.notEqual(companySeo.description, teenSeo.description);
  assert.equal(companySeo.canonicalPath, '/company');
  assert.equal(teenSeo.canonicalPath, '/teen');
});

test('JSON-LD includes Organization and FAQPage entries for both routes', () => {
  const companySeo = getPageSeo('/company');
  const teenSeo = getPageSeo('/teen');

  assert.ok(companySeo.jsonLd.some((doc) => doc['@type'] === 'Organization'));
  assert.ok(companySeo.jsonLd.some((doc) => doc['@type'] === 'FAQPage'));
  assert.ok(teenSeo.jsonLd.some((doc) => doc['@type'] === 'MobileApplication'));
  assert.ok(teenSeo.jsonLd.some((doc) => doc['@type'] === 'FAQPage'));
});

test('filterProjectExamples returns all items for "all" and narrows accurately by category', () => {
  const all = filterProjectExamples(ILLUSTRATIVE_PROJECTS, 'all');
  assert.equal(all.length, ILLUSTRATIVE_PROJECTS.length);

  const webOnly = filterProjectExamples(ILLUSTRATIVE_PROJECTS, 'web-dev');
  assert.ok(webOnly.length > 0);
  assert.ok(webOnly.every((item) => item.categoryId === 'web-dev'));

  const testingOnly = filterProjectExamples(ILLUSTRATIVE_PROJECTS, 'testing');
  assert.ok(testingOnly.length > 0);
  assert.ok(testingOnly.every((item) => item.categoryId === 'testing'));
});

test('validateCompanyInquiry rejects missing or malformed fields without silent fallbacks', () => {
  const invalidResult = validateCompanyInquiry({
    fullName: 'A',
    companyName: '',
    workEmail: 'not-an-email',
    category: '',
    projectBrief: 'Too short',
  });

  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.companyName);
  assert.ok(invalidResult.errors.workEmail);
  assert.ok(invalidResult.errors.category);
  assert.ok(invalidResult.errors.projectBrief);
});

test('validateCompanyInquiry accepts valid trimmed business inquiry', () => {
  const validResult = validateCompanyInquiry({
    fullName: '  Rohan Mehta ',
    companyName: ' Northstar Retail ',
    workEmail: 'rohan@northstar.example ',
    category: 'Web & App Development',
    projectBrief: 'Need a responsive product launch landing page with mobile QA within two weeks.',
  });

  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});
  assert.equal(validResult.sanitized.fullName, 'Rohan Mehta');
  assert.equal(validResult.sanitized.workEmail, 'rohan@northstar.example');
});
