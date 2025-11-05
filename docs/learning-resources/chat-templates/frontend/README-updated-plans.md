# Frontend Build - Updated Plans (Corrected!)
**Goodsomeday - November 5, 2025**

---

## 🎯 What Changed

I analyzed your Figma Make chat history and corrected the plans to match what you actually designed:

### ❌ Original Mistakes
- Said story cards were in a grid (WRONG!)
- Suggested specific design implementations
- Too prescriptive about how to build things
- Didn't account for your Figma iterations

### ✅ Now Corrected
- Story cards are **vertical stack** (not grid)
- High-level strategic guidance only
- You make the design decisions
- Based on your actual Figma final design

---

## 📚 Your New Documentation

I created **4 focused documents** instead of the original 3:

### 1. [Claude Code Setup Prompt](computer:///mnt/user-data/outputs/claude-code-setup-goodsomeday.md) ⭐ START HERE
**Purpose:** Paste this at the beginning of every Claude Code session

**What it does:**
- Extends your existing context primer
- Adds Goodsomeday-specific context
- Tells Claude Code what you've designed
- Sets expectations for high-level guidance

**Use when:**
- Starting any Claude Code session
- Beginning work on a new ticket
- After taking a break (new session)

---

### 2. [Strategic Build Plan](computer:///mnt/user-data/outputs/strategic-build-plan.md)
**Purpose:** High-level roadmap WITHOUT prescriptive details

**What it covers:**
- 3 session breakdown (Foundation, Components, Layout)
- What to build in each session
- Technical philosophy and approach
- Questions YOU need to answer
- Definition of done for each phase

**What it DOESN'T tell you:**
- Exact component structure
- Specific styling decisions
- Which shadcn components to use
- How to organize files

**Use when:**
- Planning your build approach
- Deciding what to tackle first
- Understanding the big picture
- Checking progress against milestones

---

### 3. [Visual Design Mapping](computer:///mnt/user-data/outputs/visual-design-mapping.md)
**Purpose:** Visual guide to your actual Figma design

**What it shows:**
- ASCII art layout structure
- Component breakdowns with measurements
- Desktop vs mobile differences
- Color usage guide
- What NOT to build from Figma Make

**Use when:**
- Implementing a specific component
- Need to check measurements
- Comparing code to design
- Fixing responsive issues

---

### 4. [Quick Reference](computer:///mnt/user-data/outputs/quick-reference-corrected.md)
**Purpose:** Fast reference for essential facts

**What it includes:**
- Design system specs (colors, spacing, typography)
- Common mistakes to avoid
- 3-hour session outline
- Definition of done
- Mock data structure

**Use when:**
- Need a quick reminder
- Checking color values
- Verifying spacing scale
- Confirming what NOT to do

---

## 🚀 How to Use These Documents

### Starting Your Build Session

**Step 1:** Open Claude Code
```bash
# Start Claude Code in your project
code .
```

**Step 2:** Give Claude Code context
1. Copy [Claude Code Setup Prompt](computer:///mnt/user-data/outputs/claude-code-setup-goodsomeday.md)
2. Paste into Claude Code
3. Wait for confirmation it's read your context

**Step 3:** Reference as needed
- Keep [Strategic Build Plan](computer:///mnt/user-data/outputs/strategic-build-plan.md) open for structure
- Use [Visual Design Mapping](computer:///mnt/user-data/outputs/visual-design-mapping.md) for specifics
- Check [Quick Reference](computer:///mnt/user-data/outputs/quick-reference-corrected.md) for facts

---

## ✅ What's NOT Blocking You

**Backend tickets you DON'T need yet:**
- ❌ GOO-13: Story submission workflow (you'll use mock data)
- ❌ GOO-14: Get stories workflow (you'll use mock data)
- ❌ GOO-15: Learning journal workflow (not needed for UI)

**Why you can proceed:**
Build the UI with mock data, connect real APIs later when backend is complete.

---

## 🎯 What You CAN Build Today

### ✅ Frontend tickets ready to start:
1. **GOO-6**: Initialize Next.js project
2. **GOO-8**: Theme system with golden yellow
3. **GOO-16**: StoryCard component (with mock data)
4. **GOO-19**: Story feed (vertical stack layout)

### 🎨 Additional work (time permitting):
- Hero section
- Header and navigation
- Footer
- Responsive layout
- Filter components

---

## 📋 Your 3-Hour Build Plan

### Hour 1: Foundation
**Goal:** Get Next.js running with your design system

**You'll do:**
- Initialize project
- Install shadcn/ui
- Configure colors
- Set up theme toggle

**Success check:** Dev server runs, theme toggle works

---

### Hour 2: Core Components  
**Goal:** Build StoryCard and feed

**You'll do:**
- Create mock data
- Build StoryCard
- Build Badge component
- Build StoryFeed (vertical stack)

**Success check:** Cards display from mock data

---

### Hour 3: Layout & Polish
**Goal:** Complete homepage structure

**You'll do:**
- Build Hero (yellow, outline button)
- Build Header (black, nav right)
- Build Footer (black, theme toggle)
- Implement responsive behavior

**Success check:** Homepage matches Figma on mobile and desktop

---

## 💡 Key Differences from Original Plans

### What I Got Wrong Before
1. ❌ Said cards were in grid layout
2. ❌ Gave prescriptive implementation details
3. ❌ Told you how to structure components
4. ❌ Made design decisions for you

### What's Correct Now
1. ✅ Cards are in **vertical stack**
2. ✅ High-level guidance only
3. ✅ You decide component structure
4. ✅ You make design decisions

---

## 🎨 Critical Design Details (From Your Figma)

### Layout Structure
**Desktop:**
- Sidebar (240px) + main content (max 840px)
- Story cards stack vertically (NOT grid!)
- Gap between cards: 24px

**Mobile:**
- No sidebar
- Filters stack above cards (accordions closed)
- Cards single column

### StoryCard
- White background
- **NO shadows** (important!)
- 12px border radius
- Badge, text, timestamp
- Vertical stack with 24px gap

### Hero
- Golden yellow background (#F9D762)
- **Outline button** (transparent with black border)
- Large heading (72px)
- Full width button style

### Sidebar
- Yellow backgrounds on headers when open
- Yellow border when section expanded
- Desktop only (stacked on mobile)

---

## 🚫 Common Pitfalls to Avoid

**From Figma Make code:**
- ❌ Don't use inline styles
- ❌ Don't use absolute positioning
- ❌ Don't hardcode pixel widths
- ❌ Don't use non-semantic HTML

**In your implementation:**
- ❌ Don't make cards a grid (vertical stack!)
- ❌ Don't add shadows to cards (design has none)
- ❌ Don't show sidebar on mobile (stacked filters)
- ❌ Don't make mobile accordions open by default

---

## ✅ Definition of Done

You're successful today if you can:
1. ✅ See the app running on localhost:3000
2. ✅ Toggle between light and dark mode
3. ✅ See story cards in **vertical stack** from mock data
4. ✅ See your golden yellow (#F9D762) in use
5. ✅ Basic responsive behavior (sidebar → stacked)

---

## 🎯 Next Actions

### Right Now
1. Open [Claude Code Setup Prompt](computer:///mnt/user-data/outputs/claude-code-setup-goodsomeday.md)
2. Copy the entire prompt
3. Start Claude Code session
4. Paste prompt to give context

### Then
1. Reference [Strategic Build Plan](computer:///mnt/user-data/outputs/strategic-build-plan.md) for structure
2. Use [Visual Design Mapping](computer:///mnt/user-data/outputs/visual-design-mapping.md) for specifics
3. Check [Quick Reference](computer:///mnt/user-data/outputs/quick-reference-corrected.md) as needed

### First Command
```bash
npx create-next-app@latest goodsomeday-frontend
```

---

## 📝 Document Reference Guide

| Document | Use When | What It Tells You |
|----------|----------|-------------------|
| [Claude Code Setup](computer:///mnt/user-data/outputs/claude-code-setup-goodsomeday.md) | Start of every session | Context for Claude Code |
| [Strategic Build Plan](computer:///mnt/user-data/outputs/strategic-build-plan.md) | Planning & structure | High-level approach |
| [Visual Design Mapping](computer:///mnt/user-data/uploads/visual-design-mapping.md) | Implementing components | Your actual design specs |
| [Quick Reference](computer:///mnt/user-data/outputs/quick-reference-corrected.md) | Need quick facts | Colors, spacing, dos/don'ts |

---

## 🎉 You're Ready!

**What you have:**
- ✅ Corrected plans (vertical stack, not grid!)
- ✅ High-level guidance (not prescriptive)
- ✅ Claude Code setup prompt
- ✅ Visual design reference
- ✅ Clear definition of done

**What you DON'T need:**
- ❌ Backend workflows (use mock data)
- ❌ API integration (later)
- ❌ Step-by-step tutorials (you make decisions)

---

**Ready to build?** Start with the [Claude Code Setup Prompt](computer:///mnt/user-data/outputs/claude-code-setup-goodsomeday.md)! 🚀

Good luck - you've got this! 💪
