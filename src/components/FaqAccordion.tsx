import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../data/companyData';
import { cn } from '../lib/utils';

interface FaqAccordionProps {
  items: FaqItem[];
  heading: string;
  subheading: string;
}

export function FaqAccordion({ items, heading, subheading }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  function toggleItem(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-slate-800/80 py-20 md:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="faq-heading"
            className="font-display text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl [text-wrap:balance]"
          >
            {heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {subheading}
          </p>
        </div>

        <div className="mt-10 divide-y divide-slate-800/80 border-y border-slate-800/80">
          {items.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-emerald-300"
                  >
                    <span className="font-display text-base font-semibold text-slate-100 sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200',
                        isOpen && 'rotate-180 text-emerald-400'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-8"
                >
                  <p className="text-[15px] leading-relaxed text-slate-300">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
