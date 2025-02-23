'use client';

import { useState } from 'react';
import { siteConfig } from '../../config/site.config';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { headline, subheadline, questions } = siteConfig.faq;

  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {headline}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{subheadline}</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="border rounded-lg bg-white">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">
                  {item.question}
                </span>
                <span className="ml-6">{openIndex === index ? '−' : '+'}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
