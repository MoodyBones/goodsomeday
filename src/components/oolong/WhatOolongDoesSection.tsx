import React from 'react';
import { Card } from '../ui/Card';
import { FlowDiagram } from '../ui/FlowDiagram';

export function WhatOolongDoesSection() {
  return (
    <section id="patterns" className="py-16 md:py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          We collect the real data: What broke. What you did. What changed.
        </h2>
        
        <div className="mb-12 flex justify-center">
          <FlowDiagram 
            steps={['Barrier', 'Reflection', 'Action', 'Transformation']}
            className="text-lg"
          />
        </div>

        <div className="space-y-6 mb-8">
          <Card accentBorder>
            <h3 className="font-bold text-lg mb-3">Tech Career</h3>
            <div className="space-y-3 text-base">
              <p>
                <strong>Barrier:</strong> &quot;Manager said my code reviews were &apos;too direct&apos; for a woman&quot;
              </p>
              <p>
                <strong>Action:</strong> &quot;Switched to remote work in European company with direct communication culture&quot;
              </p>
              <p>
                <strong>Transformation:</strong> &quot;Now lead a distributed team. Directness is the default.&quot;
              </p>
            </div>
          </Card>

          <Card accentBorder>
            <h3 className="font-bold text-lg mb-3">Career Change</h3>
            <div className="space-y-3 text-base">
              <p>
                <strong>Barrier:</strong> &quot;Retail manager role required 60-hour weeks. Couldn&apos;t sustain with childcare.&quot;
              </p>
              <p>
                <strong>Action:</strong> &quot;Retrained in UX design via online bootcamp. Built portfolio during naptime.&quot;
              </p>
              <p>
                <strong>Transformation:</strong> &quot;Remote design role. Same problem-solving skills, sustainable hours.&quot;
              </p>
            </div>
          </Card>

          <Card accentBorder>
            <h3 className="font-bold text-lg mb-3">Career Exit</h3>
            <div className="space-y-3 text-base">
              <p>
                <strong>Barrier:</strong> &quot;Startup culture valued &apos;hustle&apos; over boundaries. Burned out twice.&quot;
              </p>
              <p>
                <strong>Action:</strong> &quot;Left tech entirely. Now teach yoga and freelance write.&quot;
              </p>
              <p>
                <strong>Transformation:</strong> &quot;Half the income. Triple the wellbeing. No regrets.&quot;
              </p>
            </div>
          </Card>
        </div>

        <p className="text-lg text-center">
          These aren&apos;t inspiration. They&apos;re patterns. When we aggregate them, we see where systems break and what works.
        </p>
      </div>
    </section>
  );
}
