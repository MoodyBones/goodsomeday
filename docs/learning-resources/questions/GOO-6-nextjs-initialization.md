# GOO-6: Initialize Next.js Project - Active Recall Questions

**Purpose:** Spaced repetition learning for Next.js 14, Tailwind v4, project structure, and setup decisions.

**How to use:** Answer these questions without looking at your notes. After attempting, check your work against the setup files or documentation.

---

## Question 1: Tailwind CSS v3 vs v4

**Scenario:** A developer joins your project and sees no `tailwind.config.ts` file. They're confused and ask "Did you forget to configure Tailwind?"

Explain:
1. How is Tailwind v4 different from v3 in terms of configuration?
2. Where do your design tokens live in v4?
3. Show them where the golden yellow color (#F9D762) is defined
4. Why did you choose v4 over downgrading to v3?

**Extension:** If you needed to add a new color token, what file would you edit and what syntax would you use?

---

## Question 2: Next.js App Router vs Pages Router

**Scenario:** You're explaining your project structure to someone familiar with Next.js 13 Pages Router.

Walk through the differences:
1. Where do pages live in App Router vs Pages Router?
2. What's the purpose of `layout.tsx`? What did it replace?
3. Why is `page.tsx` used instead of `index.tsx`?
4. What are Server Components and why do they matter?

**Challenge:** Create a new route `/about` using App Router. What files do you need and where?

---

## Question 3: Project Structure Decisions

**Scenario:** It's 3 months from now. You've built 20 components and you're refactoring.

Recall your folder structure:
1. What goes in `src/components/ui/`? Give 3 examples
2. What goes in `src/components/features/`? Give 3 examples
3. What goes in `src/components/layout/`? Give 3 examples
4. Where would you put shared TypeScript types?
5. Where would you put API client functions?

**Reflection:** Why did you separate UI from features from layout? What problem does this solve?

---

## Question 4: Manual Next.js Setup

**Scenario:** A friend asks "Why didn't you just use `create-next-app`?"

Explain the process:
1. What was the actual problem with `create-next-app`?
2. What steps did you take to manually initialize?
3. What packages did you install and why each one?
4. What config files did you create manually?

**Learning:** What did you gain by doing manual setup vs automated?

---

## Question 5: Design Tokens in Tailwind v4

**Scenario:** You need to add a new spacing value: 40px for a specific hero section.

Without looking:
1. What file do you edit?
2. What syntax do you use to define it?
3. Would you create a named token or use arbitrary value?
4. Show two ways to use this value in a component

**Example tokens from your system:**
- Spacing: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px)
- Colors: primary, secondary, background, surface
- Sizes: hero (72px), section (48px), sub (28px)

---

## Question 6: TypeScript Configuration

**Scenario:** ESLint complains about import paths not resolving.

Debug without looking:
1. What's your TypeScript path alias configuration?
2. What does `@/components` resolve to?
3. Where is this configured?
4. What's the difference between `jsx: "preserve"` vs `jsx: "react-jsx"`?

**Extension:** Why did you choose strict TypeScript mode? What would happen if you set `strict: false`?

---

## Question 7: Environment Variables

**Scenario:** You need to add your n8n webhook URL for API calls.

Recall:
1. What file stores environment variables (that's gitignored)?
2. What file shows the template for env vars (that IS committed)?
3. What prefix is needed for client-side variables in Next.js?
4. How would you access `NEXT_PUBLIC_API_URL` in a component?

**Challenge:** Why is `.env.local` gitignored but `.env.example` is committed?

---

## Question 8: Arbitrary Values vs Named Tokens

**Scenario:** You're styling a hero section. You need golden yellow background and 72px text.

Show two approaches:
1. **Approach A:** Using arbitrary values
2. **Approach B:** Using named tokens

Which approach did you choose for this project and why?

**Trade-offs:**
- What do you gain with arbitrary values?
- What do you gain with named tokens?
- When might you switch approaches?

---

## Question 9: Package Management

**Scenario:** A teammate wants to add a new package.

Recall:
1. What package manager is this project using?
2. Why did you choose it?
3. What's the lock file name?
4. What script runs the dev server?

**Extension:** If you needed to add `date-fns`, what's the exact command?

---

## Question 10: Commit Strategy

**Scenario:** You just initialized Next.js and configured Tailwind v4.

Recall your actual commits:
1. How many commits did you make for GOO-6?
2. What was in the first commit?
3. What was in the second commit?
4. Why separate commits instead of one big commit?

**Learning:** What makes a good commit message for initialization work?

---

## Self-Assessment

After answering, rate yourself:
- ✅ **Confident:** Could explain to someone else
- 🤔 **Partial:** Got the concept but missed details
- ❌ **Unclear:** Need to review the material

**Review schedule:**
- First review: Tomorrow (24 hours)
- Second review: 3 days after completion
- Third review: 1 week after completion
- Fourth review: 1 month after completion

---

## Learning Notes Space

Use this space to write down what you learned from attempting these questions:

**What I understood well:**
-

**What I need to review:**
-

**Aha moments from this ticket:**
-

**How this connects to my learning approach:**
-

**Resources to check:**
-

---

## Practical Exercise

**Build a new page to test your understanding:**

1. Create a new route at `/test`
2. Use your design tokens for styling
3. Add a component that uses arbitrary values for golden yellow
4. Test that the dev server hot-reloads
5. Verify TypeScript has no errors

**Bonus:** Create a reusable Button component in `src/components/ui/` with your design system colors.

---

*Created: 2025-11-05*
*Ticket: GOO-6 - Initialize Next.js project*
*Related docs: update-007-goo-6.md, tailwind-v4-update.md, globals.css*
