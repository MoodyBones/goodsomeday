import { Card } from '../ui/Card';

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#f5f5f5] dark:bg-slate-800">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          The LinkedIn Persona doesn&apos;t work for non-linear careers.
        </h2>
        
        <div className="mb-12">
          <p className="text-lg mb-4">The standard job application assumes you:</p>
          <ul className="text-lg space-y-2 ml-6 list-disc marker:text-black dark:marker:text-white">
            <li>Stayed in one industry</li>
            <li>Moved up predictably</li>
            <li>Never left for mental health, caregiving, discrimination, burnout</li>
            <li>Can explain gaps without sounding &quot;difficult&quot;</li>
          </ul>
          <p className="text-lg mt-6">
            But most careers don&apos;t work that way. Especially when systems fail you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="opacity-60">
            <div className="text-sm font-medium text-[#666666] mb-3">LinkedIn Version</div>
            <div className="bg-[#e5e5e5] h-20 rounded mb-3 flex items-center justify-center text-[#999999]">
              [Generic profile placeholder]
            </div>
            <p className="text-base italic text-[#666666]">
              &quot;Passionate team player seeking opportunities...&quot;
            </p>
          </Card>

          <Card accentBorder>
            <div className="text-sm font-medium mb-3">Oolong Version</div>
            <div className="font-mono text-sm mb-3">
              <span className="text-[#F9D762]">Barrier</span> → Action → Transformation
            </div>
            <p className="text-base">
              &quot;Managed 30 staff. Solved X problem. Result: Y.&quot;
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
