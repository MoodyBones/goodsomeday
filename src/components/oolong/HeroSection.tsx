import React from 'react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your career didn&apos;t follow the script. Good.
        </h1>
        
        <p className="text-xl md:text-2xl text-[#666666] mb-8">
          Document what happened. Turn barriers into evidence. Build a profile that matches how you actually work.
        </p>
        
        {/* Visual Element: Career Path Diagram */}
        <div className="my-12 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="text-center opacity-40">
            <div className="text-sm mb-2 text-[#666666]">Traditional career path</div>
            <div className="relative">
              <svg width="200" height="60" viewBox="0 0 200 60" className="mx-auto" role="img" aria-label="Traditional linear career path - not applicable">
                <line x1="10" y1="30" x2="190" y2="30" stroke="black" strokeWidth="3"/>
                <polygon points="190,30 180,25 180,35" fill="black"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-red-600" aria-label="rejected">✗</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-sm mb-2 font-medium">Actual path</div>
            <svg width="200" height="100" viewBox="0 0 200 100" className="mx-auto" role="img" aria-label="Non-linear career path with multiple transitions and pivots">
              <path 
                d="M 10 50 L 50 30 L 90 60 L 130 40 L 170 70 L 190 50" 
                stroke="#F9D762" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="30" r="5" fill="#F9D762"/>
              <circle cx="90" cy="60" r="5" fill="#F9D762"/>
              <circle cx="130" cy="40" r="5" fill="#F9D762"/>
              <circle cx="170" cy="70" r="5" fill="#F9D762"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12">
          <Button variant="primary" href="#submit-story" className="text-lg">
            Add Your Story
          </Button>
          <Button variant="secondary" href="#patterns" className="text-lg">
            See The Patterns
          </Button>
        </div>
      </div>
    </section>
  );
}
