# Linear Ticket Update - GOO-7

**Ticket:** GOO-7 - Set up Figma design system
**Status:** ✅ Complete
**Date:** 2025-11-05

---

## Summary

Created comprehensive design system documentation and set up shadcn/ui component library. Foundation ready for component development.

---

## What Was Built

**Design System Documentation:**
- `docs/design-system.md` (full design reference)
  - Color palette with usage rules
  - Typography scale (72px → 14px)
  - Spacing system (8px base unit)
  - Component specifications
  - Layout system
  - Accessibility requirements (WCAG AA)
  - Responsive behavior guidelines

- `docs/component-checklist.md` (implementation guide)
  - Pre-build checklist
  - During-build checklist
  - Post-build testing checklist
  - Component-specific checklists
  - Visual quality checklist

**shadcn/ui Setup:**
- Initialized with Tailwind v4 support
- Added core components:
  - Card (`src/components/ui/card.tsx`)
  - Badge (`src/components/ui/badge.tsx`)
  - Button (`src/components/ui/button.tsx`)
  - Accordion (`src/components/ui/accordion.tsx`)
- Configuration: `components.json`
- Utilities: `src/lib/utils.ts` (cn() helper)

---

## Design System Highlights

**Colors:**
- Primary: Black (#000000)
- Secondary: Golden Yellow (#F9D762) - hope and warmth
- Background: White (#FFFFFF)
- Surface: Grey (#F5F5F5)
- NO shadows (clean, minimal aesthetic)

**Typography:**
- Hero: 72px (impact)
- Section: 48px (hierarchy)
- Subheading: 28px (hero support)
- Heading: 18px (sidebar, H3)
- Body: 16px (readable)
- Caption: 14px (timestamps)

**Spacing (8px base):**
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px

**Layout:**
- Desktop: 240px sidebar + max 840px content
- Mobile: Stacked filters + single column cards
- Page max width: 1200px

**Pipeline Stage Badge Colors:**
- High School: Light blue (#DBEAFE) bg, dark blue (#1E40AF) text
- University: Light purple (#E9D5FF) bg, dark purple (#7C3AED) text
- Mid Career: Light green (#D1FAE5) bg, dark green (#059669) text

---

## Technical Decisions

**1. shadcn/ui ownership model**
- Components copied into our codebase (not npm package)
- Full customization capability
- TypeScript types included
- Accessible by default

**2. Comprehensive docs upfront**
- Speeds up component building (no mid-build decisions)
- Ensures consistency across components
- Single source of truth for design
- Easy team onboarding

**3. Component checklist approach**
- Prevents common mistakes (shadows, wrong spacing)
- Ensures accessibility compliance
- Maintains visual consistency
- Acts as external memory

---

## Key Component Specifications

**StoryCard:**
- White background, 1px #E0E0E0 border
- 12px border radius
- NO shadow
- 24px padding
- Vertical stack (not grid!)
- 24px gap between cards

**Badge:**
- 16px border radius (pill shape)
- 6px 12px padding
- 14px font size, medium weight
- Stage-specific colors

**Button (Hero CTA):**
- Transparent background
- 2px solid black border
- 80px height, 32px text
- 12px border radius

---

## Learnings Documented

**Created:**
- `docs/updates/update-008-goo-7.md` - Full reflection
- `docs/learning-resources/questions/GOO-7-figma-design-system.md` - Active recall questions
- `docs/updates/linkedin-post-goo-7.md` - Social sharing drafts

**Key Learning:**
shadcn/ui ownership model is superior to traditional component libraries for customization needs.

---

## Time & Effort

**Estimated:** 3 hours
**Actual:** 30 minutes

**Why faster:**
- Clear Figma design to extract from
- shadcn setup is straightforward (one command)
- Documentation structure clear from previous tickets

---

## shadcn/ui Integration

**What it added:**
- 4 component files in `src/components/ui/`
- Theme variables in `globals.css` (lines 73-178)
- `components.json` configuration
- `src/lib/utils.ts` helper functions

**What stayed intact:**
- Our custom design tokens (lines 6-54 in globals.css)
- Tailwind v4 setup
- Project structure

**No conflicts!** Both systems coexist perfectly.

---

## Next Steps

**Immediate (GOO-16):**
- Build StoryCard component
- Use shadcn Card as base
- Customize: remove shadow, 12px radius, 24px padding
- Add Badge component for pipeline stages
- Test with mock data

**Then (GOO-8):**
- Theme toggle (light/dark mode)
- ThemeProvider context
- Test all components in both themes

**Later:**
- Header, Hero, Footer components
- Sidebar filters (use Accordion)
- Story feed layout

---

## Component Customization Notes

**When building components:**
1. Check `docs/design-system.md` for specs
2. Use `docs/component-checklist.md` before shipping
3. Start with shadcn component if available
4. Customize to match Goodsomeday design:
   - Remove shadows
   - Adjust border radius
   - Match padding/spacing
   - Use design system colors

**Example (Card):**
```tsx
// shadcn default has shadow-sm
// Remove it for Goodsomeday
<Card className="shadow-none border-[#E0E0E0] rounded-[12px] p-[24px]">
```

---

## Accessibility Checklist

All components must meet:
- ✅ WCAG AA contrast (4.5:1 minimum)
- ✅ Keyboard navigation
- ✅ Focus states (2px black outline)
- ✅ ARIA labels on icons/interactive elements
- ✅ Semantic HTML
- ✅ 44px minimum touch targets
- ✅ Never color alone to convey state

---

## Related

- **PR:** (pending merge)
- **Branch:** `goo-7-figma-design-system`
- **Commits:** 2
- **Docs:** `docs/design-system.md`, `docs/component-checklist.md`

---

## Notes for Future Tickets

**Adding new shadcn components:**
```bash
npx shadcn@latest add [component-name]
```

**Available components we might need:**
- `input` (search bar, forms)
- `checkbox` (filters)
- `dialog` (modals)
- `dropdown-menu` (navigation)
- `form` (story submission)

**Component organization:**
- `src/components/ui/` - shadcn components (reusable primitives)
- `src/components/features/` - feature-specific (StoryCard, StoryFeed)
- `src/components/layout/` - layout components (Header, Footer, Sidebar)

---

*Ticket closed: 2025-11-05*
*Ready to merge: Yes*
