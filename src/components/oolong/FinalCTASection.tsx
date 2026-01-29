import React from 'react';
import { Button } from '../ui/Button';

export function FinalCTASection() {
  return (
    <section id="submit-story" className="py-16 md:py-24 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Add your data point.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
          <Button variant="primary" href="/submit" className="text-lg">
            Submit Your Story
          </Button>
        </div>

        <div className="text-center mb-6">
          <a href="https://curate-company-content.netlify.app" className="text-lg underline hover:text-[#666666]">
            Already have stories? Build your Steep profile →
          </a>
        </div>

        <p className="text-base text-[#666666] max-w-[600px] mx-auto">
          Stories are anonymous unless you choose otherwise. We aggregate patterns, 
          not personal details. Your story might be exactly what someone else needs 
          to see to know they&apos;re not alone in a systemic problem.
        </p>
      </div>
    </section>
  );
}
