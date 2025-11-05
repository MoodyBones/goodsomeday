# Goodsomeday Frontend - Strategic Build Plan
**High-Level Roadmap (No Prescriptive Design Decisions)**

---

## 🎯 Today's Mission

Build the frontend foundation with mock data so you can see your Figma design working in the browser. Backend integration comes later.

---

## 📊 Current State

**✅ What You Have:**
- Figma design complete with code snippets
- Design system defined (colors, spacing, typography)
- Clear component structure from Figma Make iterations
- Mock data structure understood

**🎯 What You Need:**
- Next.js project initialized
- Design system configured in code
- Components built from Figma designs
- Mock data implemented
- Responsive behavior working

---

## 🏗️ Build Strategy (3 Sessions)

### Session 1: Foundation (45-60 min)
**Goal:** Get Next.js running with your design system

**High-level tasks:**
1. Initialize Next.js 14 project (TypeScript, Tailwind, App Router)
2. Install and configure shadcn/ui
3. Set up your color tokens in Tailwind config
4. Configure theme system (light/dark toggle)
5. Create folder structure for components

**Success metric:** You can run the dev server and toggle between light/dark themes

**Your design decisions:**
- How do you want to organize components? (ui/ vs features/ vs layout/)
- Which shadcn components to install upfront vs on-demand?
- Where should theme toggle live? (just footer, or both header/footer?)

---

### Session 2: Core Components (60-90 min)
**Goal:** Build the main UI components from your Figma design

**High-level tasks:**
1. Create mock data file with story structure
2. Build StoryCard component
   - Badge component for pipeline stages
   - Styling to match Figma (white bg, no shadows, 12px radius)
3. Build StoryFeed component
   - Vertical stack layout
   - Maps through mock data
4. Build filter components
   - Desktop: Sidebar with collapsible sections
   - Mobile: Stacked accordions above cards
   - Yellow header styling when expanded

**Success metric:** You can see story cards displaying mock data, filters work on desktop and mobile

**Your design decisions:**
- Badge styling - custom variants or inline Tailwind?
- Text truncation - how many lines?
- Filter state management - useState or something more complex?
- Card interactions - just hover or clickable?
- Which shadcn components to use vs build from scratch?

---

### Session 3: Layout & Polish (45-60 min)
**Goal:** Complete the homepage layout and navigation

**High-level tasks:**
1. Build header component
   - Navigation, search icon, mobile menu
2. Build hero section
   - Yellow background, large heading, outline button
3. Build footer
   - Copyright, theme toggle, tagline
4. Implement responsive layout
   - Desktop: Sidebar + content two-column
   - Mobile: Stacked filters + content
5. Add full-width elements (Featured heading, search bar)

**Success metric:** Complete homepage that matches your Figma design on both mobile and desktop

**Your design decisions:**
- Navigation behavior on mobile (hamburger menu, drawer, dropdown?)
- Hero button interaction (link to submit page? modal? disabled for now?)
- Search bar functionality (just UI for now or implement filtering?)
- How to handle the image divider (static asset, component, placeholder?)

---

## 🚫 What You're NOT Building Today

- ❌ Real API integration (mock data only)
- ❌ Story submission form (needs backend)
- ❌ User authentication
- ❌ Database connections
- ❌ Admin panel
- ❌ Story detail pages
- ❌ About page
- ❌ Actual search functionality

These come later when backend workflows (GOO-13, GOO-14) are complete.

---

## 🔧 Technical Approach

### Philosophy
- **Use shadcn/ui as foundation** - Customize where needed, don't rebuild from scratch
- **Figma code as reference only** - Refactor inline styles to Tailwind utilities
- **Mobile-first responsive** - Your Figma shows mobile, expand to desktop
- **Semantic HTML** - Accessibility built in from the start
- **TypeScript strict** - Type everything properly
- **Component composition** - Small, reusable pieces

### Code Quality Standards
- ✅ Tailwind utilities (no inline styles)
- ✅ Responsive breakpoints (sm, md, lg, xl)
- ✅ Theme-aware colors (use tokens, not hardcoded hex)
- ✅ Proper TypeScript types
- ✅ Semantic HTML elements
- ✅ ARIA labels and focus states
- ✅ Small, focused components

### What Good Looks Like
```typescript
// Good - uses design tokens, responsive, semantic
<section className="bg-secondary py-2xl px-md">
  <h1 className="text-7xl md:text-8xl font-bold text-black">
    Your career story matters
  </h1>
</section>

// Bad - inline styles, hardcoded values, non-semantic
<div style={{ backgroundColor: '#F9D762', padding: '80px 24px' }}>
  <div style={{ fontSize: '72px', fontWeight: 'bold', color: '#000' }}>
    Your career story matters
  </div>
</div>
```

---

## 📋 Key Decisions You'll Make

### Component Structure
- How to organize shadcn customizations?
- When to create new components vs modify existing?
- How to structure props and TypeScript types?

### Responsive Behavior
- Breakpoint for sidebar → stacked filters?
- Mobile navigation pattern?
- Touch target sizes for mobile?

### State Management
- Where does filter state live?
- How to pass theme preference around?
- Form state for search bar?

### Styling Approach
- Override shadcn defaults or create variants?
- Utility classes vs custom CSS?
- How to handle animations/transitions?

---

## 🎨 Design System Implementation

### From Figma to Code

**Colors** → Tailwind config tokens
- `bg-secondary` instead of `bg-[#F9D762]`
- `text-primary` instead of `text-black`
- `border-surface` instead of `border-[#E0E0E0]`

**Spacing** → Tailwind utilities
- `gap-md` (16px) instead of `gap-4`
- `py-2xl` (48px) instead of `py-12`
- Use your 8px base unit system

**Typography** → Consistent hierarchy
- H1: 72px (`text-7xl`)
- H2: 48px (`text-5xl`)
- H3: 18px (`text-lg`)
- Body: 16px (`text-base`)

**Components** → shadcn/ui + customization
- Start with shadcn Card, Badge, Button
- Customize styling to match your Figma
- Add your own components where shadcn doesn't fit

---

## ✅ Definition of Done

### Session 1 Complete When:
- [ ] Next.js app runs on localhost:3000
- [ ] Theme toggle switches between light/dark
- [ ] Your golden yellow color is configured and working
- [ ] Clean folder structure established

### Session 2 Complete When:
- [ ] StoryCard component displays mock data
- [ ] Filters show on desktop (sidebar) and mobile (stacked)
- [ ] Badge colors work for each pipeline stage
- [ ] Story feed shows multiple cards in vertical stack

### Session 3 Complete When:
- [ ] Complete homepage visible
- [ ] Header, hero, content, footer all present
- [ ] Responsive behavior works (mobile and desktop)
- [ ] Visual match to your Figma design

---

## 🚀 Getting Started

### Pre-flight Checklist
- [ ] Figma design open for reference
- [ ] Claude Code session started with context prompt
- [ ] Terminal ready in your projects folder
- [ ] Git initialized or ready to commit

### First Command
```bash
npx create-next-app@latest goodsomeday-frontend
# ✅ TypeScript? Yes
# ✅ ESLint? Yes  
# ✅ Tailwind? Yes
# ✅ src/ directory? Yes
# ✅ App Router? Yes
# ✅ Import alias? @/*
```

### Then
1. Open Claude Code setup prompt
2. Give context about current state
3. Start building Session 1
4. Make design decisions as you go
5. Commit frequently

---

## 💡 Working With Claude Code

### Good Workflow
1. Give Claude Code the setup prompt
2. Ask for high-level approach first
3. Make your design decisions
4. Let Claude Code execute
5. Review and refine
6. Document what you learned

### Example Interaction
```
YOU: "Let's build the StoryCard component"

CLAUDE CODE: "I see from your Figma:
- White background, no shadows
- Badge, text, timestamp
- 12px border radius

Questions:
1. Should I use shadcn Card as base or build from scratch?
2. Badge - custom variants for each stage color?
3. Text truncation - how many lines visible?

What do you prefer?"

YOU: [Make your decisions]

CLAUDE CODE: [Builds according to your preferences]
```

### Let Claude Code Handle
- ✅ Boilerplate code generation
- ✅ TypeScript type definitions
- ✅ Component file structure
- ✅ Tailwind class optimization
- ✅ Accessibility attributes
- ✅ Responsive breakpoints

### You Handle
- ✅ Design decisions (colors, spacing, layout)
- ✅ Component architecture choices
- ✅ When to use shadcn vs custom
- ✅ State management approach
- ✅ What feels right for your project

---

## 📝 Documentation as You Build

After each session, document:

**What you built:**
- List components created
- Key files added/modified

**What you learned:**
- New concepts or patterns
- shadcn/ui insights
- Tailwind techniques
- Next.js App Router patterns

**What you decided:**
- Design choices you made
- Why you chose X over Y
- Trade-offs considered

**What's next:**
- Remaining work for this ticket
- Blockers or questions
- Ideas for improvements

---

## 🎯 Success Metrics

**Technical Success:**
- ✅ App runs without errors
- ✅ Responsive on mobile and desktop
- ✅ Theme toggle works
- ✅ Components use design system tokens
- ✅ TypeScript has no errors
- ✅ Accessible (keyboard nav, focus states)

**Learning Success:**
- ✅ You understand your component structure
- ✅ You can explain your design decisions
- ✅ You know what shadcn does vs what you customized
- ✅ You documented your process
- ✅ You can continue building tomorrow

**Product Success:**
- ✅ Looks like your Figma design
- ✅ Feels polished and professional
- ✅ Ready for real data when backend is done
- ✅ Foundation for adding more features

---

## 🔄 Iterative Refinement

**Don't aim for perfect first try:**
1. Get it working (rough version)
2. Make it look good (visual polish)
3. Make it right (refactor, optimize)
4. Make it better (accessibility, edge cases)

**Commit after each stage:**
- "feat: add StoryCard component (rough version)"
- "style: polish StoryCard styling to match Figma"
- "refactor: extract Badge to separate component"
- "a11y: add ARIA labels and focus states"

---

## 📚 Reference Links

**Keep these tabs open:**
- Your Figma design
- [shadcn/ui docs](https://ui.shadcn.com/docs)
- [Tailwind docs](https://tailwindcss.com/docs)
- [Next.js App Router docs](https://nextjs.org/docs/app)

---

**Next Action:** Copy the Claude Code setup prompt and start Session 1! 🚀
