# GOO-6: Initialize Next.js Project

**Completed:** 2025-11-05
**Time estimated:** 2 hours
**Time actual:** ~45 minutes
**Difficulty:** 2/5

---

## What I Built

Initialized the frontend foundation for Goodsomeday:

**Next.js 14 Setup:**
- App Router (modern routing)
- TypeScript with strict mode
- Tailwind CSS v4 (latest version)
- Clean project structure

**Project Structure:**
```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage (test page)
│   └── globals.css      # Design system tokens
├── components/
│   ├── ui/              # Reusable UI components (buttons, badges)
│   ├── features/        # Feature-specific (StoryCard, filters)
│   └── layout/          # Layout components (Header, Footer)
├── lib/                 # Utilities and helpers
├── types/               # TypeScript type definitions
├── hooks/               # Custom React hooks
└── contexts/            # React contexts (theme, etc)
```

**Design System Configured:**
- Colors: Black, Golden Yellow (#F9D762), White, Grey
- Spacing: 8px base system (4px, 8px, 16px, 24px, 32px, 48px)
- Typography: 72px hero, 48px section, 28px sub, 16px body
- Layout dimensions: 240px sidebar, 840px content, 1200px page max

**Files Created:**
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `src/app/globals.css` - Design tokens with @theme
- `src/app/layout.tsx` - Root layout
- `src/app/page.tsx` - Test homepage
- `.env.example` - Environment variable template

---

## What I Learned

### 1. Tailwind CSS v4 is Completely Different

**The biggest surprise:** Tailwind v4 removed `tailwind.config.ts` entirely.

**Old way (v3):**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        secondary: "#F9D762"
      }
    }
  }
}
```

**New way (v4):**
```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-secondary: #f9d762;
}
```

**Why it matters:**
- Simpler setup (no config file)
- Design tokens live with CSS (more natural)
- Faster build times (new engine)
- Arbitrary values work everywhere: `bg-[#F9D762]`

**My preference:** Use arbitrary values for now. Clean, explicit, no abstraction needed yet.

---

### 2. Next.js 14 App Router vs Pages Router

I'm using **App Router** (not Pages Router).

**Key differences:**
- `src/app/` instead of `src/pages/`
- `layout.tsx` for shared layouts (not `_app.tsx`)
- Server Components by default (faster!)
- `page.tsx` for routes (not `index.tsx`)

**Why App Router:**
- It's the future of Next.js
- Better performance (server components)
- Simpler layouts (no wrapper hell)
- More modern patterns

---

### 3. Initializing Next.js in Existing Repo

**Challenge:** Couldn't run `create-next-app` in existing directory.

**Solution:** Manual initialization:
1. `npm init -y` to create package.json
2. Install dependencies manually
3. Create config files (`next.config.ts`, `tsconfig.json`)
4. Create `src/app/` structure
5. Add scripts to package.json

**Learning:** Sometimes manual is better than tools. I understand what each file does now.

---

### 4. Design System as Code

Instead of abstract token names, I used **semantic dimensions**:

```css
@theme {
  /* Not: --spacing-3 or --space-md */
  /* But: Actual measurements from Figma */
  --spacing-md: 16px;
  --width-sidebar: 240px;
  --height-header: 80px;
}
```

**Why:** Matches my Figma design exactly. No mental translation from "3" to "24px".

---

### 5. Claude Code + Context Primer Works

**I gave Claude Code:**
- Foundation.md (my learning approach)
- Visual design mapping (Figma specs)
- Strategic build plan (high-level tasks)

**Result:**
- It skipped tutorial mode
- Executed fast
- Made decisions aligned with my approach
- Generated clean, production-ready code

**Proof the context primer works!**

---

## Challenges

### Challenge 1: Tailwind v4 Had No Documentation Ready

**Problem:** Tried to run `npx tailwindcss init` but it doesn't exist in v4.

**How I solved it:**
- Checked `npm list tailwindcss` → saw v4.1.16
- Realized v4 is fundamentally different
- Created `globals.css` with `@theme` syntax
- Documented the differences in `tailwind-v4-update.md`

**What I learned:** Always check package versions! v4 isn't just an update, it's a rewrite.

---

### Challenge 2: Manual Next.js Setup

**Problem:** `create-next-app` won't initialize in existing directory.

**How I solved it:**
- Installed dependencies manually
- Created config files from scratch
- Built folder structure myself

**Why it's better:** I understand every piece now. No magic, no hidden config.

---

### Challenge 3: Design Tokens vs Arbitrary Values

**Problem:** Should I create named tokens or use arbitrary values?

**Decision:** Arbitrary values for now (`bg-[#F9D762]`, `text-[72px]`).

**Why:**
- Explicit (no lookup needed)
- Matches Figma specs exactly
- Can refactor to tokens later if needed
- v4 makes arbitrary values first-class

**Trade-off:** Less DRY, but more readable. I'll revisit if I find myself repeating values.

---

## Decisions Made

### Decision 1: Tailwind v4 (Not Downgrade to v3)

**Options:**
- Downgrade to v3 (familiar, has config file)
- Use v4 (new, different syntax)

**Chose:** v4

**Why:**
- Future-proof (v3 is being phased out)
- Simpler (no config file)
- Faster (new engine)
- Learning opportunity

**Trade-off:** Less documentation, but that's temporary.

---

### Decision 2: Arbitrary Values Over Named Tokens

**Options:**
- Create token names: `bg-secondary`, `text-hero`
- Use arbitrary values: `bg-[#F9D762]`, `text-[72px]`

**Chose:** Arbitrary values

**Why:**
- Explicit and readable
- Matches Figma specs 1:1
- No abstraction layer needed yet
- Easy to refactor later

---

### Decision 3: Strict TypeScript Mode

**Options:**
- Loose TypeScript (easier, fewer errors)
- Strict TypeScript (safer, catches bugs early)

**Chose:** Strict

**Why:**
- Learn proper TypeScript patterns
- Catch bugs at compile time
- Better autocomplete
- Industry standard

**Trade-off:** More initial setup, but worth it.

---

## What's Next

**Immediate next (GOO-7):**
- Set up Figma design system
- Document component specs
- Prepare assets (images, icons)

**Then (GOO-8):**
- Implement theme toggle (light/dark)
- Add ThemeProvider context
- Test theme persistence

**After that (GOO-16):**
- Build StoryCard component
- Create mock data structure
- Test with sample stories

---

## Resources Used

**Documentation:**
- [Next.js 14 App Router Docs](https://nextjs.org/docs)
- [Tailwind CSS v4 Beta](https://tailwindcss.com/docs/v4-beta)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

**Project Docs:**
- `docs/learning-resources/foundation.md` - My learning approach
- `docs/learning-resources/chat-templates/frontend/visual-design-mapping.md` - Figma specs
- `docs/learning-resources/chat-templates/frontend/strategic-build-plan.md` - High-level plan

**Created:**
- `docs/learning-resources/chat-templates/frontend/tailwind-v4-update.md` - v4 migration guide

---

## Reflection

### What Worked Well

✅ **Context primer approach:** Giving Claude Code upfront context made it execute fast without tutorial mode

✅ **Manual setup:** Understanding each piece instead of magic tools

✅ **Design system in CSS:** Tokens live where they're used (globals.css)

✅ **Arbitrary values:** Clear, explicit, matches Figma

### What I'd Do Differently

🤔 **Check versions first:** Would have saved 5 minutes of "why isn't tailwindcss init working?"

🤔 **Git ignore earlier:** Almost committed .env.local (caught it though!)

### What Surprised Me

💡 **Tailwind v4 is so different:** It's not an update, it's a reimagining. Good surprise though - much simpler.

💡 **Next.js 14 is fast:** Dev server starts in seconds, hot reload is instant

💡 **TypeScript strict mode isn't scary:** With good types from libraries, it's actually helpful

---

## Metrics

**Time breakdown:**
- Research/decisions: 15 min (Tailwind v4 vs v3)
- Setup/install: 10 min (manual initialization)
- Configuration: 10 min (design tokens, TypeScript)
- Testing: 5 min (dev server, basic page)
- Documentation: 20 min (this doc + Tailwind v4 guide)

**Commits:** 2
1. `feat(GOO-6): initialize Next.js 14 with Tailwind v4`
2. `docs(GOO-6): add Tailwind v4 migration guide`

**Learning ROI:** High - foundation is solid, documented, and ready for rapid component building

---

*Next ticket: GOO-7 - Set up Figma design system*
