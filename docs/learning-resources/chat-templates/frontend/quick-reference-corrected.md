# Quick Reference - Corrected
**Goodsomeday Frontend Build**

---

## 🎯 What You're Building

A career story platform homepage that matches your Figma design using Next.js, TypeScript, Tailwind, and shadcn/ui.

---

## 📱 Actual Design (From Your Figma Make Chat)

### Layout Structure
**Desktop:**
- Black header (80px height)
- Golden yellow hero (full-width)
- Full-width image divider (200px)
- Full-width "Featured stories" heading (48px)
- Full-width search bar (56px height)
- Two-column layout AFTER search:
  - Left: Sidebar filters (240px fixed, sticky)
  - Right: Story cards (max 840px, **VERTICAL STACK** not grid!)

**Mobile:**
- Same header, hero, image divider
- Search bar full-width
- Filters stacked above cards (accordions closed by default)
- Story cards in single column

### Key Components

**1. StoryCard**
- White background (#FFFFFF)
- 12px border radius
- **NO shadows** (important!)
- Badge (colored by pipeline stage)
- Story text with readable line-height
- Timestamp (subtle, bottom)
- Cards stack **vertically** with 24px gap

**2. Sidebar Filters**
- Yellow background headers (#F9D762) when section visible
- Three sections: Focus area, Story themes, Industry
- Collapsible (accordions)
- 2px yellow border when open
- Desktop: fixed left sidebar (240px)
- Mobile: stacked above cards, closed by default

**3. Hero**
- Golden yellow background (#F9D762)
- Large heading (72px)
- Subheading (28px)
- **Outline button** (transparent with black border)
- Full-width button style (increased size)

**4. Header**
- Black background
- Logo left, navigation right
- Search icon
- Mobile: hamburger menu

**5. Footer**
- Black background
- Theme toggle on right side
- Copyright, tagline

---

## 🎨 Design System

### Colors
```typescript
primary: "#000000"      // Black
secondary: "#F9D762"    // Golden yellow
background: "#FFFFFF"   // White
surface: "#F5F5F5"      // Grey
```

### Spacing (8px base)
```
xs: 4px
sm: 8px  
md: 16px
lg: 24px
xl: 32px
2xl: 48px
```

### Typography
```
H1 (Hero): 72px
H2 (Featured stories): 48px
H3 (Sidebar headings): 18px
Subheading: 28px
Body: 16px (1.5 line-height)
```

---

## 🚫 Common Mistakes to Avoid

❌ **DON'T:**
- Make story cards a grid (they're vertical stack!)
- Add shadows to cards (design has none)
- Make sidebar filters visible on mobile (should be stacked accordions)
- Use inline styles from Figma Make (refactor to Tailwind)
- Hardcode the yellow color (use theme tokens)
- Make accordions open by default on mobile (closed by default)

✅ **DO:**
- Stack story cards vertically with 24px gap
- Use white background cards with no shadows
- Hide sidebar on mobile, show stacked filters
- Convert Figma Make code to Tailwind utilities
- Use `bg-secondary` for golden yellow
- Keep mobile accordions closed by default

---

## 🧪 Mock Data Structure

```typescript
interface Story {
  id: number
  pipelineStage: "High School" | "University" | "Mid Career"
  storyText: string
  createdAt: string
  approved: boolean
}

// Use 3-4 stories with realistic content
// from your Figma design screenshots
```

---

## 🎯 3-Hour Session Plan

### Hour 1: Foundation
- Create Next.js project
- Install shadcn/ui  
- Configure colors in Tailwind
- Set up theme toggle
- **Output:** Dev server running, theme toggle works

### Hour 2: Components
- Create mock data
- Build StoryCard (white bg, no shadows, vertical)
- Build Badge with pipeline stage colors
- Build StoryFeed (vertical stack!)
- **Output:** Cards displaying from mock data

### Hour 3: Layout
- Build Hero (yellow, outline button)
- Build Header (black, nav right)
- Build Footer (black, theme toggle)
- Implement responsive (sidebar → stacked)
- **Output:** Complete homepage

---

## 🔧 Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (customize as needed)
- **Language:** TypeScript (strict mode)
- **Data:** Mock data (no API yet)

---

## ✅ Definition of Done

You're successful today if:
1. ✅ App runs on localhost:3000
2. ✅ Theme toggle works (light/dark)
3. ✅ Story cards display in **vertical stack** from mock data
4. ✅ Sidebar visible on desktop, stacked on mobile
5. ✅ Visual match to your Figma design
6. ✅ Golden yellow (#F9D762) used throughout

---

## 📝 Key Design Decisions You'll Make

As you build, decide:
- Badge styling approach (variants vs inline)
- Text truncation (how many lines?)
- Filter state management
- Mobile navigation pattern
- shadcn customization vs new components
- Responsive breakpoints

**Don't wait for perfect answers - try something, see how it feels, iterate.**

---

## 🚀 Start Command

```bash
npx create-next-app@latest goodsomeday-frontend
# TypeScript: Yes
# Tailwind: Yes  
# App Router: Yes
```

Then use the [Claude Code Setup Prompt](computer:///mnt/user-data/outputs/claude-code-setup-goodsomeday.md) to give context.

---

## 📚 Your Documents

1. **[Claude Code Setup](computer:///mnt/user-data/outputs/claude-code-setup-goodsomeday.md)** - Paste at start of Claude Code session
2. **[Strategic Build Plan](computer:///mnt/user-data/outputs/strategic-build-plan.md)** - High-level approach, no prescriptive details
3. **This Quick Reference** - Essential facts, corrected from Figma

---

**Remember:** This is about building your vision, not following a tutorial. Make decisions that feel right for your project. 💪
