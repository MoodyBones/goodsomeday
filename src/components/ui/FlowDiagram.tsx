import React from 'react';

interface FlowDiagramProps {
  steps: string[];
  vertical?: boolean;
  className?: string;
}

export function FlowDiagram({ steps, vertical = false, className = '' }: FlowDiagramProps) {
  if (vertical) {
    return (
      <div className={`flex flex-col items-start gap-3 ${className}`}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="font-mono text-base md:text-lg">{step}</div>
            {index < steps.length - 1 && (
              <div className="text-[#F9D762] text-2xl pl-4">↓</div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="font-mono text-base md:text-lg whitespace-nowrap">{step}</div>
          {index < steps.length - 1 && (
            <div className="text-[#F9D762] text-2xl">→</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
