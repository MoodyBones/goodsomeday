# LinkedIn Post - GOO-6: Next.js Initialization

**Draft for:** LinkedIn
**Tone:** Personal, technical but accessible, optimistic
**Length:** ~200 words

---

## Version 1: Learning Focus

**I just learned that Tailwind CSS v4 doesn't have a config file.**

Wait, what?

This week I initialized the frontend for my career stories platform. I expected to spend 2 hours fighting with configuration. Instead, I discovered Tailwind completely reimagined how design systems work.

**v3 (old way):**
```js
// tailwind.config.ts
export default {
  theme: { colors: { secondary: "#F9D762" } }
}
```

**v4 (new way):**
```css
/* globals.css */
@theme {
  --color-secondary: #f9d762;
}
```

Design tokens live IN the CSS now. No config file. No abstractions.

**Why this matters:**
- Simpler mental model
- Faster builds
- CSS-native (feels right)

I paired with Claude Code to navigate this. It spotted I had v4 installed, explained the differences, and we updated our docs together.

**The result?** Task estimated: 2 hours. Actual: 45 minutes.

This is what happens when you:
- Use modern tools that remove complexity
- Partner with AI that adapts to your needs
- Document learnings as you go

**Who else is using Tailwind v4? What's your experience been?**

#WebDevelopment #TailwindCSS #NextJS #AIAssistedDevelopment #BuildingInPublic

---

## Version 2: Process Focus

**Sometimes the best learning comes from things that DON'T work.**

I tried running `create-next-app` in my existing repo. It failed.

Instead of frustration, I got clarity. I manually initialized Next.js 14 - installed each package, created each config file, understood every piece.

**What I gained:**
- Know exactly what Next.js needs to run
- Understand the difference between dev dependencies and runtime
- Can explain every line in my tsconfig.json
- Caught Tailwind v4 (totally different from v3!)

**The visual learner win:**
I created ASCII diagrams in my docs showing:
- Project structure (what goes where and why)
- Design token flow (CSS → components)
- Responsive breakpoints (mobile first approach)

Pairing with Claude Code meant I could move fast while still understanding deeply. No copy-paste. No "it just works" magic. Real learning.

**For anyone building in public: document your setups.**

Your future self (and your team) will thank you.

#LearningInPublic #WebDev #NextJS #VisualLearner #AIAssistedDevelopment

---

## Version 3: Design System Focus

**I spent 45 minutes this week defining a design system in code.**

Golden yellow (#F9D762) for hope and optimism.
Black and white for clarity.
8px spacing system for consistency.
No shadows. Ever.

**Here's what I learned about Tailwind v4:**

Instead of abstract tokens in a config file, you define design decisions IN your CSS:

```css
@theme {
  --color-secondary: #f9d762; /* Hope, warmth */
  --spacing-lg: 24px;           /* Card padding */
  --font-size-hero: 72px;       /* Impact */
}
```

Every token has a comment explaining WHY, not just WHAT.

This isn't just technical setup. It's product thinking encoded in CSS.

**The context:**
I'm building a platform for career journey stories - for people who've been underestimated in their careers. The design system reflects that mission: warm (not corporate), accessible (WCAG AA), story-focused (minimal decoration).

**The lesson:**
Your design tokens should tell your product story.

What design decisions have you encoded into your projects lately?

#DesignSystems #ProductThinking #TailwindCSS #Accessibility #BuildingInPublic

---

## Recommendation

**Use Version 1** - it's the most approachable and shows concrete learning with code examples. The technical revelation (v4 is different!) is compelling and relatable.

Save Version 3 for when you share the full design system or launch the product.
