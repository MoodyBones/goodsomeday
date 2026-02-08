export default function SubmitPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-[600px] text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Coming Soon
        </h1>
        <p className="text-xl text-[#4d4d4d] mb-8">
          Story submission form is under development.
        </p>
        <a 
          href="/"
          className="inline-block px-8 py-4 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 min-h-[44px] bg-[#F9D762] text-black hover:bg-[#f0ce52] focus:ring-[#F9D762]/50"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
