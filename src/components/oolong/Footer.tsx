import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t-2 border-[#e5e5e5]">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-8">
          <p className="text-base mb-2">
            <strong>Oolong:</strong> Clinical archive of career barriers and transformations.
          </p>
          <p className="text-base">
            <strong>Steep:</strong> Job matching that uses your real work, not LinkedIn performance.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mb-8 text-base">
          <a href="/about" className="underline hover:text-[#666666]">About</a>
          <a href="/privacy" className="underline hover:text-[#666666]">Privacy Policy</a>
          <a href="/contact" className="underline hover:text-[#666666]">Contact</a>
        </div>

        <div className="text-base text-[#666666]">
          <p className="mb-2">Questions? <a href="mailto:contact@oolong.dev" className="underline">contact@oolong.dev</a></p>
          <p>Built by Mel Jones in Melbourne.</p>
        </div>
      </div>
    </footer>
  );
}
