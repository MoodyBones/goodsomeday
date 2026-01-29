import React from 'react';

export function AntiSycophancySection() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          No &quot;excited to announce.&quot; No &quot;thrilled to share.&quot; Just what happened.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border-2 border-[#e5e5e5] rounded-lg p-6 opacity-60 relative">
            <div className="absolute top-4 right-4 text-2xl text-red-600">✗</div>
            <div className="text-sm font-medium text-[#666666] mb-3">The LinkedIn Version</div>
            <p className="text-base italic text-[#666666]">
              I&apos;m thrilled to announce my transition into Product Management! 
              Passionate about leveraging my diverse background to drive user-centric 
              solutions. Excited to bring my unique perspective to innovative teams!
            </p>
          </div>

          <div className="border-4 border-[#F9D762] rounded-lg p-6">
            <div className="text-sm font-medium mb-3">The Oolong/Steep Version</div>
            <p className="text-base">
              Managed 30+ retail staff for 8 years. Solved inventory flow problems daily. 
              Retrained in product via Google UX cert. Built 3 portfolio projects. 
              Looking for PM roles in logistics or consumer products.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4 text-lg">
          <p>One sounds enthusiastic but says nothing.</p>
          <p>One shows what you&apos;ve done and where you fit.</p>
          <p className="mt-6">
            We automate the second version. You provide the evidence. We strip the fluff.
          </p>
        </div>
      </div>
    </section>
  );
}
