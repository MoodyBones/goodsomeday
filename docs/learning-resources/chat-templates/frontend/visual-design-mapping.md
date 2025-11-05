# Figma Design → Code Mapping
**Visual Guide to Implementation**

---

## 📐 Layout Architecture

### Full Page Structure (From Your Figma)

```
┌─────────────────────────────────────────┐
│ HEADER (Black #000000)                  │ 80px height
│ Logo left | Nav right | Search icon     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ HERO (Golden Yellow #F9D762)            │
│                                         │
│   Your career story matters  (72px)     │
│   Share your journey... (28px)          │
│                                         │
│   ┌───────────────────────────────┐    │
│   │  Share Your Story  (outline)  │    │
│   └───────────────────────────────┘    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ IMAGE DIVIDER (200px height)            │
│ [Colorful portrait collage]             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Featured stories (48px, centered)       │
│ ┌─────────────────────────────────────┐ │
│ │ 🔍 Search by topic or keywords      │ │ 56px
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘

DESKTOP:
┌──────────────┬──────────────────────────┐
│ SIDEBAR      │ STORY FEED               │
│ (240px)      │ (max 840px)              │
│              │                          │
│ ┌──────────┐ │ ┌──────────────────────┐ │
│ │Focus area│ │ │ Story Card 1         │ │
│ └──────────┘ │ │ [Vertical stack]     │ │
│ □ High School│ └──────────────────────┘ │
│ □ University │                          │
│ □ Mid Career │ ┌──────────────────────┐ │
│              │ │ Story Card 2         │ │
│ ┌──────────┐ │ └──────────────────────┘ │
│ │Story     │ │                          │
│ │themes    │ │ ┌──────────────────────┐ │
│ └──────────┘ │ │ Story Card 3         │ │
│              │ └──────────────────────┘ │
│ ┌──────────┐ │                          │
│ │Industry  │ │          ...             │
│ └──────────┘ │                          │
└──────────────┴──────────────────────────┘

MOBILE:
┌─────────────────────────────────────────┐
│ ┌─────────────────────────────────────┐ │
│ │ Focus area        ▼                 │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Story themes      ▼                 │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Industry          ▼                 │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Story Card 1                        │ │
│ │ [Badge] Story text...               │ │
│ │              2 days ago             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Story Card 2                        │ │
│ └─────────────────────────────────────┘ │
│          ...                            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FOOTER (Black #000000)                  │
│ © 2025 | Built with purpose | [🌙]     │
└─────────────────────────────────────────┘
```

---

## 🎨 Component Breakdown

### 1. StoryCard (CRITICAL - Main Content)

**Visual appearance:**
```
┌────────────────────────────────────────┐
│ ┌──────────────┐                       │
│ │ High School  │  ← Badge (blue)       │
│ └──────────────┘                       │
│                                        │
│ I was always told I wasn't 'college   │
│ material.' Teachers would say I       │
│ should consider trade school          │
│ instead. My guidance counselor        │
│ literally said, 'Not everyone is      │
│ meant for university.' But I knew...  │
│                                        │
│                        2 days ago  ←  │
└────────────────────────────────────────┘
```

**Key specs:**
- Background: White (#FFFFFF)
- Border radius: 12px
- **NO shadows** (different from default shadcn Card)
- Padding: 24px
- Gap between elements: 16px
- Badge colors vary by stage
- Text: readable line-height (1.5)
- Timestamp: subtle grey, right-aligned

**Layout in feed:**
- **Vertical stack** (not grid!)
- Gap: 24px between cards
- Full width of content area

---

### 2. Sidebar Filters (Desktop Only)

**Visual appearance:**
```
┌──────────────────────┐
│ Focus area           │ ← Yellow bg when expanded
├──────────────────────┤
│ □ High School        │
│ □ University         │
│ □ Mid Career         │
│ ☑ All Stories        │
└──────────────────────┘

┌──────────────────────┐
│ Story themes    ▼    │ ← Collapsed
└──────────────────────┘

┌──────────────────────┐
│ Industry        ▼    │ ← Collapsed
└──────────────────────┘
```

**Key specs:**
- Width: 240px (fixed)
- Sticky positioning (stays on scroll)
- Headers: Yellow background (#F9D762) when open
- Yellow 2px border around section when open
- Padding: 16px between list items
- Collapsible (accordions)

**Mobile behavior:**
- Becomes stacked above cards
- All sections closed by default
- Full width
- Yellow border when open

---

### 3. Hero Section

**Visual appearance:**
```
┌─────────────────────────────────────────┐
│         (Golden Yellow Background)       │
│                                         │
│     Your career story                   │
│          matters                        │
│                                         │
│   Share your journey. Inspire others.   │
│          Find perspective.              │
│                                         │
│   ┌───────────────────────────────────┐ │
│   │     Share Your Story              │ │
│   │  (transparent, black outline)     │ │
│   └───────────────────────────────────┘ │
│                                         │
│   A platform for career stories at      │
│   every stage - from high school to     │
│   mid-career                            │
└─────────────────────────────────────────┘
```

**Key specs:**
- Background: Golden yellow (#F9D762)
- Heading: 72px, bold, black text
- Subheading: 28px
- Button: Transparent bg, 2px black border, 80px height, 32px text
- Padding: 80px vertical
- All text centered

---

### 4. Badge (Pipeline Stages)

**Visual appearance:**
```
High School  → Blue background
University   → Purple background  
Mid Career   → Green background
```

**Key specs:**
- Pill shape (fully rounded)
- Padding: 6px 12px
- Font size: 14px
- Colors:
  - High School: Light blue bg, dark blue text
  - University: Light purple bg, dark purple text
  - Mid Career: Light green bg, dark green text

---

### 5. Header

**Visual appearance:**
```
┌─────────────────────────────────────────┐
│ ⊕ GOODSOMEDAY    Submit Story | FAQ | 🔍│
└─────────────────────────────────────────┘
```

**Key specs:**
- Background: Black (#000000)
- Height: 80px
- Logo: White text, left side
- Navigation: White text, right side
- Search icon: Right corner
- Mobile: Hamburger menu

---

### 6. Footer

**Visual appearance:**
```
┌─────────────────────────────────────────┐
│ © 2025 Goodsomeday                  🌙  │
│ Built with purpose                      │
└─────────────────────────────────────────┘
```

**Key specs:**
- Background: Black (#000000)
- Text: White
- Height: 120px
- Theme toggle: Right side
- Centered content

---

## 🎯 Implementation Priority

### Phase 1: Core Display (Hour 1-2)
1. ✅ StoryCard component (most important!)
2. ✅ Mock data structure
3. ✅ StoryFeed (vertical stack layout)
4. ✅ Badge component

### Phase 2: Layout (Hour 2-3)
5. ✅ Hero section
6. ✅ Header
7. ✅ Footer
8. ✅ Responsive layout structure

### Phase 3: Interactive (Hour 3+)
9. ✅ Sidebar filters (desktop)
10. ✅ Stacked filters (mobile)
11. ✅ Theme toggle
12. ✅ Search bar UI

---

## 🔄 Responsive Breakpoints

### Mobile (< 768px)
- Single column layout
- Filters stacked above cards (closed)
- Hero text smaller
- Full-width elements

### Tablet (768px - 1024px)
- Same as mobile OR sidebar appears (your choice)
- Larger touch targets
- Better use of horizontal space

### Desktop (1024px+)
- Sidebar + content two-column
- Max content width: 1200px
- Sidebar: 240px fixed
- Main content: flex-1, max 840px

---

## 🚫 What NOT to Build From Figma Make

**Figma Make generated code that needs refactoring:**

❌ **Inline styles**
```typescript
<div style={{ backgroundColor: '#F9D762', padding: '80px' }}>
```

✅ **Use instead**
```typescript
<div className="bg-secondary py-2xl">
```

---

❌ **Absolute positioning**
```typescript
<div style={{ position: 'absolute', top: '120px', left: '24px' }}>
```

✅ **Use instead**
```typescript
<div className="flex flex-col gap-lg">
```

---

❌ **Fixed widths**
```typescript
<div style={{ width: '375px' }}>
```

✅ **Use instead**
```typescript
<div className="w-full max-w-md">
```

---

❌ **Non-semantic HTML**
```typescript
<div><div><div>Title</div></div></div>
```

✅ **Use instead**
```typescript
<header><h1>Title</h1></header>
```

---

## 📏 Measurements Reference

### Heights
- Header: 80px
- Hero: Variable (min 60vh)
- Image divider: 200px
- Search bar: 56px
- Story card: Auto (content-dependent)
- Footer: 120px
- Button (hero): 80px

### Widths
- Max content: 1200px
- Sidebar: 240px (desktop)
- Main content: max 840px
- Cards: 100% of container

### Spacing
- Between sections: 48px (2xl)
- Between cards: 24px (lg)
- Card padding: 24px (lg)
- List items: 16px (md)

### Font Sizes
- H1 (Hero): 72px (text-7xl)
- H2 (Section): 48px (text-5xl)
- H3 (Sidebar): 18px (text-lg)
- Body: 16px (text-base)
- Caption: 14px (text-sm)
- Button: 32px (hero), 18px (standard)

---

## 🎨 Color Usage Guide

**Golden Yellow (#F9D762) appears in:**
- Hero background (full section)
- Sidebar headers (when expanded)
- Sidebar borders (when open)
- Active filter indicators

**Black (#000000) appears in:**
- Header background
- Footer background
- Primary text
- Hero text
- Button borders (outline style)

**White (#FFFFFF) appears in:**
- Story card backgrounds
- Main content background
- Header text
- Footer text
- Tag/badge backgrounds

**Grey (#F5F5F5) appears in:**
- ~~Story cards~~ NO! Cards are white
- Subtle backgrounds (if needed)
- Borders (#E0E0E0)

---

## ✅ Visual Quality Checklist

Before calling a component "done":

**Spacing**
- [ ] Follows 8px system
- [ ] Generous padding (not cramped)
- [ ] Consistent gaps

**Colors**
- [ ] Uses theme tokens (not hardcoded)
- [ ] Works in dark mode
- [ ] Proper contrast (WCAG AA)

**Typography**
- [ ] Clear hierarchy
- [ ] Readable line-height (1.5)
- [ ] Proper font weights

**Layout**
- [ ] Responsive breakpoints work
- [ ] No horizontal scroll on mobile
- [ ] Proper alignment

**Components**
- [ ] Match Figma visual design
- [ ] Hover states work
- [ ] Focus states visible
- [ ] Touch targets large enough (44px min)

---

**Next:** Use this visual guide alongside the [Strategic Build Plan](computer:///mnt/user-data/outputs/strategic-build-plan.md) 🎨
