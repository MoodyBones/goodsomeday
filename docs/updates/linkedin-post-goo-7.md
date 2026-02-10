# LinkedIn Post - GOO-7: Design System Setup

**Draft for:** LinkedIn
**Tone:** Insightful, technical clarity, product-thinking
**Length:** ~200 words

---

## Version 1: shadcn/ui Revelation

**I just discovered a component library that you DON'T install.**

Let that sink in.

This week I set up my design system using shadcn/ui. Instead of:
```bash
npm install some-ui-lib
```

You do this:
```bash
npx shadcn add card
```

And it COPIES the component into YOUR codebase.

**You own it.**

Need to remove the shadow? Edit the file.
Want 12px radius instead of 8px? Change it.
Need a custom variant? Add it.

No fighting with CSS specificity. No prop drilling through abstraction layers. No "well the library doesn't support that."

The code is in `src/components/ui/card.tsx`. It's yours. Do what you want.

**This is brilliant because:**
- Full customization
- TypeScript types included
- Accessible by default (WCAG AA)
- No black-box dependencies

I've used Material UI, Chakra, Ant Design. This ownership model is different. Better.

**For visual learners building in public:** This is the sweet spot between "build from scratch" and "use a library."

Anyone else using shadcn? What's your experience?

#WebDevelopment #DesignSystems #shadcn #React #NextJS #BuildingInPublic

---

## Version 2: Design System as Product Thinking

**Your design tokens should tell your product story.**

This week I encoded our mission into CSS:

```css
@theme {
  --color-secondary: #f9d762; /* Hope and optimism */
  --radius-card: 12px;        /* Soft, not sharp */
  --spacing-lg: 24px;         /* Room to breathe */
}
```

Every token has a comment explaining WHY.

**Context:** I'm building a platform for career journey stories - for people who've been underestimated in their careers.

**The design reflects that:**
- Golden yellow: warmth and hope (not corporate blue)
- No shadows: clean and honest (not trying to impress)
- Generous spacing: stories need room (not cramped feeds)
- WCAG AA: truly accessible (not performative)

This isn't just technical setup. It's product strategy encoded in design.

**The best part?** These decisions guide every component I build. No "what color should this be?" decisions during implementation.

**Question for designers and developers:**
What story do YOUR design tokens tell?

#DesignSystems #ProductThinking #Accessibility #UXDesign #BuildingInPublic

---

## Version 3: Speed + Understanding

**Setup time: 30 minutes.**
**Expected time: 3 hours.**

Here's how:

**1. Clear documentation upfront**
- Created `design-system.md` with every spec
- Created `component-checklist.md` for consistency
- No decisions during build = faster builds

**2. Modern tooling**
- shadcn/ui components (accessible, typed, customizable)
- Tailwind v4 (design tokens in CSS)
- TypeScript strict mode (catch bugs early)

**3. AI pair programming**
- Claude Code handled boilerplate
- I focused on decisions and "why"
- Documented learnings as we went

**The result:**
- Comprehensive design system ✅
- Component library ready ✅
- Accessibility built in ✅
- Team can move fast ✅

**The lesson:**
Good documentation IS development speed.

For anyone building: invest time in setup docs. You'll sprint later.

#DeveloperProductivity #TechnicalWriting #AIAssistedDevelopment #WebDev

---

## Recommendation

**Use Version 1** for LinkedIn - the shadcn revelation is compelling and many developers don't know about it. It's technical but accessible, and the ownership angle is fresh.

**Use Version 2** when you launch the product or show the full design.

**Use Version 3** for developer-focused communities (Dev.to, Hashnode, Twitter).
