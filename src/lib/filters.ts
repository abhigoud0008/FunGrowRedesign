import type { IllustrativeProject, TeenCategoryId } from '../data/teenData';

export interface CompanyInquiryInput {
  fullName: string;
  companyName: string;
  workEmail: string;
  category: string;
  projectBrief: string;
}

export interface CompanyInquiryValidation {
  valid: boolean;
  errors: Partial<Record<keyof CompanyInquiryInput, string>>;
  sanitized: CompanyInquiryInput;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function filterProjectExamples(
  projects: IllustrativeProject[],
  categoryId: TeenCategoryId
): IllustrativeProject[] {
  if (categoryId === 'all') {
    return projects;
  }
  return projects.filter((project) => project.categoryId === categoryId);
}

export function validateCompanyInquiry(input: CompanyInquiryInput): CompanyInquiryValidation {
  const sanitized: CompanyInquiryInput = {
    fullName: input.fullName.trim(),
    companyName: input.companyName.trim(),
    workEmail: input.workEmail.trim(),
    category: input.category.trim(),
    projectBrief: input.projectBrief.trim(),
  };

  const errors: Partial<Record<keyof CompanyInquiryInput, string>> = {};

  if (sanitized.fullName.length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (sanitized.companyName.length < 2) {
    errors.companyName = 'Please enter your company or organisation name.';
  }

  if (!EMAIL_PATTERN.test(sanitized.workEmail)) {
    errors.workEmail = 'Please enter a valid email address (for example, name@company.com).';
  }

  if (!sanitized.category) {
    errors.category = 'Please choose a primary talent category.';
  }

  if (sanitized.projectBrief.length < 20) {
    errors.projectBrief = 'Please share at least 20 characters describing your deliverables and timeline.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    sanitized,
  };
}
