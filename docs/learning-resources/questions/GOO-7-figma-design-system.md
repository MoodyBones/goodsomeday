# GOO-7: Figma Design System Setup - Active Recall Questions

**Purpose:** Spaced repetition learning for design systems, shadcn/ui, component specifications, and accessibility requirements.

**How to use:** Answer these questions without looking at your notes. After attempting, check your work against the design system docs or shadcn components.

---

## Question 1: shadcn/ui Ownership Model

**Scenario:** A teammate asks "Why aren't we using Material UI or Chakra?"

Explain shadcn/ui without looking:
1. How is shadcn different from traditional component libraries?
2. Where do shadcn components live after you add them?
3. Can you modify shadcn components? How extensively?
4. What command adds the Card component?

**Challenge:** If you hate the shadow on the Card component, how do you remove it? (Hint: it's in your code now)

**Extension:** Compare npm install vs shadcn approach. What are the trade-offs?

---

## Question 2: Design System Color Palette

**Scenario:** You're implementing a new component and need to choose colors.

Without looking, recall:
1. What is the golden yellow hex code and what does it represent?
2. What are the three primary colors (beyond yellow)?
3. Name the 3 pipeline stage badge colors
4. What's the text color for timestamps/subtle text?
5. What's the border color for cards?

**Accessibility check:**
- What's the minimum contrast ratio for WCAG AA?
- Can you use golden yellow for body text? Why/why not?

---

## Question 3: Spacing System

**Scenario:** You're building a new card component.

Recall the 8px spacing system:
1. What are all 6 spacing tokens and their pixel values?
2. What spacing should you use for card padding?
3. What spacing between story cards in the feed?
4. What spacing between major sections (hero → content)?

**Extension:** Why use an 8px base unit instead of arbitrary values?

---

## Question 4: StoryCard Specifications

**Scenario:** You're about to build the StoryCard component (GOO-16).

Without looking at docs, recall the specs:
1. What's the background color?
2. Border: width, color, radius?
3. Does it have a shadow?
4. What's the padding?
5. What are the three internal elements?
6. What's the layout (grid or stack)?
7. How many pixels between cards in the feed?

**Critical question:** Why NO shadows when most cards have shadows?

---

## Question 5: Typography Scale

**Scenario:** You're implementing the hero section.

Recall without looking:
1. What font size for the hero headline?
2. What font size for section headings ("Featured stories")?
3. What font size for sidebar headings?
4. What font size for body text?
5. What's the line-height for readability?

**Challenge:** List the 6 font sizes from largest to smallest with their use cases.

---

## Question 6: Component Checklist

**Scenario:** You just built a Button component. Is it ready to ship?

What should you check? Name at least 5 things from the component checklist without looking.

**Accessibility specific:**
- What's the minimum touch target size?
- What should the focus state look like?
- Do icons need ARIA labels?

---

## Question 7: Responsive Breakpoints

**Scenario:** You're implementing the sidebar filters.

Recall the responsive behavior:
1. What's the breakpoint for mobile (<) ?
2. What's the breakpoint for desktop (>) ?
3. On mobile, where do filters appear?
4. On mobile, are filters open or closed by default?
5. On desktop, what's the sidebar width?
6. On desktop, what's the max content width?

**Challenge:** Draw the layout structure for mobile vs desktop (ASCII art).

---

## Question 8: Badge Component Variants

**Scenario:** You need to display pipeline stage badges.

Without looking, recall:
1. What shape are badges (square, rounded, pill)?
2. What's the border radius value?
3. What's the padding (top/bottom and left/right)?
4. For "High School" badge: background color? text color?
5. For "University" badge: background color? text color?
6. For "Mid Career" badge: background color? text color?

**Why these colors?** What do blue, purple, and green represent?

---

## Question 9: Accessibility Requirements

**Scenario:** You're auditing a component for WCAG AA compliance.

Recall the requirements:
1. What's the minimum contrast ratio for text?
2. What's the minimum touch target size?
3. Can you use color alone to show state?
4. What needs to be keyboard navigable?
5. What focus state did you define?

**Extension:** What semantic HTML elements should you use for a story card feed?

---

## Question 10: shadcn Component Files

**Scenario:** You need to customize the Card component.

Without looking:
1. What file path is the Card component?
2. What file contains the `cn()` utility function?
3. What file contains shadcn configuration?
4. Where are shadcn theme variables defined?

**Challenge:** You want to change the default Card radius from rounded-xl to rounded-lg. What file and what line?

---

## Question 11: Design System "Why" Questions

**Scenario:** You're explaining design decisions to a new team member.

Answer the "why" not just "what":
1. WHY golden yellow? (not just "it's the accent color")
2. WHY no shadows? (not just "the design says so")
3. WHY 8px spacing system? (not just "for consistency")
4. WHY vertical card stack not grid? (there's a UX reason)

**Reflection:** How do these choices support the mission (career stories for underestimated people)?

---

## Question 12: Tailwind v4 Integration

**Scenario:** shadcn added a lot of CSS variables to your globals.css.

Recall:
1. Did shadcn overwrite your custom tokens?
2. Where are shadcn's variables defined (line numbers)?
3. Where are YOUR design tokens defined (line numbers)?
4. Can both systems coexist? How?

**Challenge:** Add a new custom token for a special hero background. Where and how?

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

**How this supports building components:**
-

**Resources to check:**
-

---

## Practical Exercise

**Test your knowledge by building a simple component:**

1. Create a Badge component (without looking at shadcn)
2. Style it according to the design system:
   - Pill shape (16px radius)
   - Correct padding (6px 12px)
   - 14px font size
3. Create three variants (High School, University, Mid Career)
4. Test it renders correctly
5. Compare with shadcn Badge - how close were you?

**Bonus:** Build a simple Card with:
- White background
- 1px grey border
- 12px radius
- NO shadow
- 24px padding

---

## Design System Scenarios

**Scenario A: New Component**
You're building a Toast notification. What colors, spacing, and typography should you use? Walk through your decision process using the design system.

**Scenario B: Dark Mode**
A story card needs to work in dark mode. What colors change? What stays the same?

**Scenario C: Mobile Touch**
A button is 36px tall. Will it pass accessibility guidelines? Why or why not? What should you change?

---

*Created: 2025-11-05*
*Ticket: GOO-7 - Set up Figma design system*
*Related docs: update-008-goo-7.md, design-system.md, component-checklist.md*
