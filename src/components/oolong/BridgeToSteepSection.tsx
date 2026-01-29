import React from 'react';
import { Button } from '../ui/Button';
import { FlowDiagram } from '../ui/FlowDiagram';

export function BridgeToSteepSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Stories become portfolio evidence. Evidence becomes job matches.
        </h2>
        
        <div className="mb-12">
          <FlowDiagram 
            steps={[
              '1. Submit Story on Oolong',
              '2. Convert to Steep Project',
              '3. AI Analyzes: What skill? What result? What context?',
              '4. Builds Grounded Profile (No LinkedIn Fluff)',
              '5. Matches to Jobs That Fit How You Work'
            ]}
            vertical
            className="max-w-[600px]"
          />
        </div>

        <div className="mb-8 space-y-4 text-lg">
          <p>Your story isn&apos;t just therapy. It&apos;s data about:</p>
          <ul className="ml-6 space-y-2">
            <li>• What problems you solve</li>
            <li>• What environments you need</li>
            <li>• What you won&apos;t compromise on</li>
          </ul>
          <p>
            Steep uses this to build a profile that strips the &quot;passionate team player&quot; 
            nonsense and surfaces what you&apos;ve actually done.
          </p>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" href="https://curate-company-content.netlify.app" className="text-lg">
            Turn Your Story Into a Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
