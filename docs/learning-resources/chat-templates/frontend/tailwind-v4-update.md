# Tailwind CSS v4 - What Changed

**Date:** November 2025
**Context:** GOO-6 - We're using Tailwind v4 (latest), not v3

---

## Key Differences from v3

### 1. No More `tailwind.config.ts`

**v3 (old way):**
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

**v4 (new way):**
```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-secondary: #f9d762;
}
```

### 2. Design Tokens in CSS

All your design system tokens go in `globals.css` using `@theme`:

```css
@theme {
  /* Colors */
  --color-primary: #000000;
  --color-secondary: #f9d762;

  /* Spacing */
  --spacing-md: 16px;
  --spacing-lg: 24px;

  /* Custom values */
  --width-sidebar: 240px;
}
```

### 3. Using Tokens in Classes

**Arbitrary values (works everywhere):**
```tsx
<div className="bg-[#F9D762]">  {/* Direct hex */}
<div className="w-[240px]">      {/* Direct pixel value */}
<div className="text-[72px]">    {/* Direct size */}
```

**Named tokens (when defined in @theme):**
```tsx
<div className="bg-secondary">   {/* Uses --color-secondary */}
<div className="w-sidebar">      {/* Uses --width-sidebar */}
```

### 4. No CLI `init` Command

**v3:**
```bash
npx tailwindcss init
```

**v4:**
Just create `globals.css` with `@import "tailwindcss"` - that's it!

---

## What We're Using

### Our Design System (in globals.css)

```css
@theme {
  /* Colors - Goodsomeday palette */
  --color-primary: #000000;
  --color-secondary: #f9d762;      /* Golden yellow */
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text-primary: #000000;
  --color-text-secondary: #666666;
  --color-border: #e0e0e0;

  /* Dark mode */
  --color-dark-background: #121212;
  --color-dark-surface: #1e1e1e;
  --color-dark-text-primary: #ffffff;

  /* Spacing (8px base) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;

  /* Typography */
  --font-size-hero: 72px;
  --font-size-section: 48px;
  --font-size-sub: 28px;

  /* Layout dimensions */
  --width-sidebar: 240px;
  --width-content-max: 840px;
  --height-header: 80px;
}
```

### How to Use in Components

```tsx
// Using arbitrary values (most common in v4)
<h1 className="text-[72px] font-bold">
<div className="bg-[#F9D762] py-[48px]">
<aside className="w-[240px] sticky">

// Using semantic names (if you prefer)
<h1 className="text-hero font-bold">
<div className="bg-secondary py-2xl">
```

---

## Benefits of v4

1. **Simpler** - No config file to maintain
2. **Faster** - Built on new engine
3. **CSS-native** - Design tokens live where CSS lives
4. **Flexible** - Arbitrary values work everywhere

---

## Migration Notes

If you see v3 syntax in old docs:

**Old (v3):**
```typescript
// tailwind.config.ts
colors: { secondary: "#F9D762" }
```

**New (v4):**
```css
/* globals.css */
@theme {
  --color-secondary: #f9d762;
}
```

**But honestly:** Just use arbitrary values `bg-[#F9D762]` - it's cleaner!

---

## Resources

- [Tailwind v4 Beta Docs](https://tailwindcss.com/docs/v4-beta)
- Our design system: `src/app/globals.css`
- Visual design mapping: `visual-design-mapping.md`

---

*Created: 2025-11-05*
*Related: GOO-6, Tailwind CSS v4.1.16*
