## Modified 12-Day Plan with Claude Code Integration

## Strategic Use for Learning + Speed

___

## 🎯 Philosophy: Learn First, Automate Second

**Days 1-3:** Manual (build foundational understanding)  
**Days 4-6:** Hybrid (learn patterns, then accelerate)  
**Days 7-12:** Mostly Claude Code (focus on architecture & product)

___

## Phase 1: Foundation (Day 1) - MANUAL

## Time: 2-3 hours | Claude Code: Not used

**Why manual?** These are setup tasks in web interfaces and servers. Claude Code can't help much, and you need to understand these systems.

### Morning Session (2-3 hours)

**Step 1.1: Linear Setup** (30 min) - MANUAL

-   Create workspace, team, project
-   Configure labels and workflow states
-   Add custom fields for learning tracking
-   Create issue template

**Step 1.2: GitHub Setup** (20 min) - MANUAL + CLAUDE CODE

-   Create repository manually
-   Use Claude Code for initial docs:

bash

```bash
claude-code
  > "Generate a comprehensive README.md for the Goodsomeday project. 
  It's a platform for sharing career journey stories, built while I learn 
  full-stack development. Tech stack: Next.js, TypeScript, Tailwind, 
  PostgreSQL, n8n. Include sections for: project overview, learning journey, 
  tech stack with rationale, quick start, documentation links, license (MIT)."
```

**Step 1.3: Connect Linear + GitHub** (15 min) - MANUAL

-   Install integration in Linear
-   Configure auto-branch creation and status sync

**Step 1.4: Create Initial Tickets** (45 min) - CLAUDE CODE ✨

**Instead of manually creating 15 tickets, use Claude Code:**

bash

```markdown
claude-code

> "Create a file 'linear-tickets.json' with 15 well-structured tickets 
for the Goodsomeday project. Each ticket should include:
- identifier (GOO-1 through GOO-15)
- title
- description
- priority (critical/high/medium/low)
- labels (frontend/backend/design/devops)
- estimate (hours)
- acceptance criteria (array)
- what_to_learn (string)

Structure them as:
- Infrastructure (GOO-1 to GOO-6): Next.js setup, Figma, theme system, 
  VPS, n8n, PostgreSQL
- Core features (GOO-7 to GOO-12): Database schema, workflows, components, 
  forms, feeds
- Polish (GOO-13 to GOO-15): Admin, filtering, release automation

Use the specifications we discussed earlier."
```

**Then manually import to Linear:**

-   Copy each ticket from the JSON
-   Paste into Linear (faster than typing)
-   Takes 5 minutes per ticket = 1 hour 15 min total

**Time saved:** 30 minutes (Claude generates perfect structure)

**Step 1.5: Git Strategy** (15 min) - MANUAL

-   Create branches
-   Set up .gitignore
-   Define commit conventions

**✅ Day 1 Complete:** Foundation is set, ready to build

___

## Phase 2: VPS & Backend (Day 2) - MANUAL

## Time: 4-5 hours | Claude Code: Minimal use

**Why manual?** You need to understand server administration. This is core backend knowledge.

### Morning Session (2.5 hours)

**Step 2.1: VPS Provisioning** (30 min) - MANUAL

-   Sign up for DigitalOcean
-   Create droplet
-   Set up SSH keys

**Step 2.2: Server Security** (45 min) - MANUAL

-   Connect via SSH
-   Create non-root user
-   Configure firewall
-   Disable root login

**Step 2.3: Install Software** (1 hour) - MANUAL

-   Node.js, PostgreSQL, Nginx, PM2, Certbot
-   All manual to understand dependencies

**Step 2.4: PostgreSQL Setup** (45 min) - CLAUDE CODE ✨

bash

```markdown
# On your LOCAL machine, use Claude Code to generate SQL:
claude-code

> "Generate PostgreSQL schema files for the Goodsomeday project:

1. schema.sql with:
   - stories table (id, story_text, pipeline_stage, submitted_at, approved, ip_address)
   - learning_journal table (issue_id, title, what_built, what_learned, 
     challenges, solutions, resources_used, time_estimated, time_actual, 
     difficulty_rating)
   - Proper indexes for performance
   - Constraints and validation

2. seed.sql with 5 test stories for development

Include comments explaining each table and index."
```

**Then manually run on server:**

bash

```ruby
# Transfer to server
scp schema.sql deploy@your_server:/home/deploy/
scp seed.sql deploy@your_server:/home/deploy/

# SSH and run
ssh deploy@your_server
psql -U goodsomeday -d goodsomeday_prod -h localhost -f schema.sql
```

**Time saved:** 30 minutes (perfect schema generation)

### Afternoon Session (1.5-2 hours)

**Step 2.5: n8n Installation** (1 hour) - MANUAL

-   Install n8n globally
-   Configure environment
-   Set up PM2

**Step 2.6: Domain & SSL** (30-45 min) - CLAUDE CODE ✨

bash

```markdown
claude-code

> "Generate an Nginx configuration file for n8n:
- Server name: n8n.yourdomain.com
- Proxy to localhost:5678
- WebSocket support
- Proper headers
- Include comments for SSL (will be added by Certbot)"

# Save as nginx-n8n.conf
```

**Then manually apply:**

bash

```bash
sudo cp nginx-n8n.conf /etc/nginx/sites-available/n8n
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
sudo certbot --nginx -d n8n.yourdomain.com
```

**Time saved:** 15 minutes (correct config first try)

**✅ Day 2 Complete:** Server is running, ready for workflows

___

## Phase 3: n8n Workflows (Day 3) - MANUAL + CLAUDE CODE

## Time: 3-4 hours | Claude Code: Moderate use

**Why hybrid?** n8n is visual, but Claude Code can generate node logic.

### Morning Session (2 hours)

**Step 3.1: Story Submission Workflow** (1.5 hours)

**Manual workflow creation:**

1.  Create workflow in n8n UI
2.  Add webhook node
3.  Add response nodes

**Use Claude Code for complex logic:** ✨

bash

```markdown
claude-code

> "Generate JavaScript code for an n8n Function node that validates 
story submissions:

Input: { storyText: string, pipelineStage: string }

Validation rules:
- storyText required, 50-5000 characters
- pipelineStage must be: high_school, university, or mid_career
- Return validated data with timestamp and IP
- Throw error with detailed messages for invalid data

Use n8n's $input.item.json format."
```

**Copy/paste into n8n Function node**

**Manual: Configure PostgreSQL node** (you need to see how this works)

**Time saved:** 30 minutes (perfect validation logic)

**Step 3.2: Get Stories Workflow** (30 min) - HYBRID

bash

```css
claude-code

> "Generate JavaScript for n8n Function node that builds a dynamic SQL query:

Input params: stage (optional), limit (optional, default 50)
Output: { query: string, values: array }

Build parameterized query for:
SELECT id, story_text, pipeline_stage, submitted_at 
FROM stories 
WHERE approved = true
[AND pipeline_stage = $1 if stage provided]
ORDER BY submitted_at DESC 
LIMIT $n

Use PostgreSQL parameterized format."
```

**Manual: Wire up nodes in n8n**

### Afternoon Session (1-2 hours)

**Step 3.3: Learning Journal Workflow** (1 hour) - HYBRID

bash

```markdown
claude-code

> "Generate two things:

1. JavaScript for n8n Function node to parse Linear webhook data into 
   learning journal format
   
2. JavaScript for n8n Function node to format learning journal entries 
   for database upsert (handle conflicts on issue_id)

Include error handling and validation."
```

**Manual: Set up webhook triggers and database nodes**

**Step 3.4: Test All Workflows** (30 min) - MANUAL

-   Test each workflow with curl
-   Verify database entries
-   Check error handling

**Step 3.5: Document APIs** (30 min) - CLAUDE CODE ✨

bash

```markdown
claude-code

> "Create comprehensive API documentation in docs/api/README.md:

Endpoints:
- POST /webhook/submit-story
- GET /webhook/get-stories
- POST /webhook/learning-journal

For each include:
- Description
- Request format with examples
- Response format with status codes
- Error handling
- cURL examples

Format in clean markdown with code blocks."
```

**Time saved:** 45 minutes (documentation done right)

**✅ Day 3 Complete:** Backend APIs working, ready for frontend

___

## Phase 4: Frontend Development (Days 4-5) - CLAUDE CODE HEAVY

## Time: 3-4 hours (was 8-10) | Claude Code: Heavy use

**Why Claude Code?** You've learned the concepts. Now move fast.

### Day 4 Morning (1.5 hours)

**Step 4.1: Initialize Project** (30 min) - CLAUDE CODE ✨

bash

```markdown
# Move GOO-1 to "In Progress" in Linear
# Pull the auto-created branch
git fetch
git checkout goo-1-initialize-nextjs-project

claude-code

> "Initialize the Goodsomeday Next.js project with this structure:

1. Next.js 14 with app directory, TypeScript, Tailwind, src directory
2. Clean up all boilerplate files
3. Create folder structure:
   - src/components/ui
   - src/components/features
   - src/lib
   - src/types
   - src/hooks
   - src/contexts

4. Configure Tailwind for CSS variables:
   - Custom colors: primary, secondary, background, foreground, border
   - All map to CSS var() functions

5. Create src/app/globals.css with:
   - Tailwind directives
   - CSS variables for light theme in :root
   - CSS variables for dark theme in [data-theme='dark']
   - Basic resets

6. Create basic layout.tsx that imports globals.css

7. Create .env.local with:
   NEXT_PUBLIC_API_URL=https://n8n.yourdomain.com/webhook

8. Install lucide-react and date-fns

Test that it runs with 'npm run dev'"
```

**Claude Code will:**

-   Create all files
-   Configure everything
-   Install dependencies
-   Show you a summary

**You:**

-   Review the changes
-   Approve
-   Test locally
-   Commit

**Time saved:** 1.5 hours (was 2 hours)

**Step 4.2: Theme System** (1 hour) - CLAUDE CODE ✨

bash

```markdown
# Move GOO-3 to "In Progress"
git checkout goo-3-implement-theme-system

claude-code

> "Implement complete theme switching system:

1. Create src/types/theme.ts with Theme type

2. Create src/contexts/ThemeContext.tsx:
   - ThemeProvider component with localStorage persistence
   - useTheme hook
   - Prevent hydration mismatch
   - Set data-theme attribute on document

3. Create src/components/ui/ThemeToggle.tsx:
   - Button with Moon/Sun icons from lucide-react
   - Calls useTheme to toggle
   - Styled with our theme colors
   - Smooth transitions

4. Update src/app/layout.tsx:
   - Add inline script in <head> to prevent FOUC
   - Wrap children in ThemeProvider
   - Script checks localStorage and sets data-theme before React hydrates

5. Create src/app/page.tsx:
   - Simple test page showing theme toggle
   - Some text to verify theme colors work

Test that:
- Theme toggles without page reload
- Theme persists on refresh
- No flash of wrong theme (FOUC)"
```

**Review → Approve → Test → Commit**

**Time saved:** 1.5 hours

### Day 4 Afternoon (1.5 hours)

**Step 4.3: Type Definitions** (15 min) - CLAUDE CODE ✨

bash

```markdown
claude-code

> "Create TypeScript type definitions:

1. src/types/story.ts:
   - PipelineStage type (union of stage strings)
   - Story interface (id, storyText, pipelineStage, submittedAt)
   - StorySubmission interface (for form data)

2. src/types/api.ts:
   - APIResponse<T> generic interface
   - APIError interface
   - Common response types

Export everything properly."
```

**Step 4.4: StoryCard Component** (45 min) - CLAUDE CODE ✨

bash

```markdown
# Move GOO-9 to "In Progress"
git checkout goo-9-build-storycard-component

claude-code

> "Build the StoryCard component system:

1. src/components/ui/Badge.tsx:
   - Takes PipelineStage as prop
   - Shows readable label (High School, University, Mid Career)
   - Color-coded with Tailwind (blue for high_school, purple for university, 
     green for mid_career)
   - Works in both light and dark themes

2. src/components/features/StoryCard.tsx:
   - Takes Story as prop
   - Shows Badge for stage
   - Shows formatted time with date-fns formatDistanceToNow
   - Shows story text
   - Styled as a card with:
     - Border
     - Padding (24px)
     - Rounded corners
     - Subtle shadow
     - Hover effect (slightly larger shadow)
     - Responsive
     - Uses our theme colors

3. Update src/app/page.tsx:
   - Add a mock story
   - Render StoryCard
   - Show it works with theme toggle

Follow best practices:
- Proper TypeScript
- Semantic HTML
- Accessibility (proper contrast)
- Responsive design"
```

**Time saved:** 1.5 hours

**Step 4.5: Create PR and Update Linear** (15 min) - HYBRID

bash

```markdown
# Manual: Create PR
git push
# Go to GitHub, create PR

# Claude Code for PR description:
claude-code

> "Generate a pull request description for GOO-9:

Include:
- What was built
- Key features
- How to test
- Screenshots note
- Related Linear issue

Format professionally."
```

**Copy into PR description, merge**

### Day 5 Morning (1.5 hours)

**Step 4.6: API Client** (30 min) - CLAUDE CODE ✨

bash

```css
claude-code

> "Create API client layer:

1. src/lib/api.ts:
   - Base fetch wrapper with error handling
   - submitStory(data: StorySubmission): Promise<APIResponse>
   - getStories(stage?: PipelineStage, limit?: number): Promise<APIResponse<Story[]>>
   - Uses NEXT_PUBLIC_API_URL from env
   - Proper error handling with typed errors
   - TypeScript throughout

2. src/hooks/useSubmitStory.ts:
   - Custom hook using the API client
   - Returns: { submit, loading, error, success }
   - Handles loading states
   - Resets after success

3. src/hooks/useStories.ts:
   - Custom hook to fetch stories
   - Takes optional stage filter
   - Returns: { stories, loading, error, refetch }
   - Fetches on mount

Follow React best practices for hooks."
```

**Step 4.7: Story Submission Form** (1 hour) - CLAUDE CODE ✨

bash

```markdown
# GOO-10
git checkout goo-10-build-story-submission-form

claude-code

> "Build complete story submission form:

1. src/components/features/SubmitStoryForm.tsx:
   - Textarea for story (labeled, placeholder)
   - Select dropdown for pipeline stage (labeled, readable options)
   - Submit button
   - Client-side validation:
     * Required fields
     * Story length 50-5000 characters
     * Show error messages below fields
   - Uses useSubmitStory hook
   - Loading state (disabled form, loading button)
   - Error state (show API errors)
   - Success state (show message, clear form)
   - Styled beautifully with our theme
   - Fully responsive
   - Good UX (focus management, error visibility)

2. Update src/app/page.tsx:
   - Add SubmitStoryForm
   - Basic layout with heading
   - Centered, max-width container

Test flow:
- Validation errors show correctly
- Submission works
- Success message appears
- Form clears after success"
```

**Time saved:** 3 hours (was 4 hours)

### Day 5 Afternoon (1 hour)

**Step 4.8: Story Feed** (1 hour) - CLAUDE CODE ✨

bash

```markdown
# GOO-12
git checkout goo-12-build-story-feed

claude-code

> "Build story feed component:

1. src/components/features/StoryFeed.tsx:
   - Uses useStories hook
   - Loading state: skeleton loading (3-4 placeholder cards)
   - Error state: friendly error message with retry button
   - Empty state: message encouraging first submission
   - Success state: grid of StoryCard components
   - Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
   - Gap between cards

2. src/components/ui/SkeletonCard.tsx:
   - Placeholder card matching StoryCard layout
   - Animated shimmer effect
   - Same dimensions as real card

3. Update src/app/page.tsx:
   - Better layout with sections
   - Form at top
   - Feed below
   - Proper spacing
   - Max-width container

Make it look professional and polished."
```

**Step 4.9: Polish & Test** (30 min) - MANUAL

-   Test entire flow manually
-   Try different browsers
-   Test mobile responsive
-   Fix any issues

**Create final PR, merge**

**✅ Days 4-5 Complete:** Full frontend working in 3-4 hours instead of 8-10

___

## Phase 5: Integration Testing (Day 6) - HYBRID

## Time: 1-2 hours (was 3-4) | Claude Code: Moderate

### Morning Session (1-2 hours)

**Step 5.1: End-to-End Testing** (30 min) - MANUAL

-   Submit stories through your UI
-   Verify they appear in database
-   Check they show in feed
-   Test theme persistence
-   Test on mobile

**Step 5.2: Error Handling** (30 min) - CLAUDE CODE ✨

bash

```markdown
claude-code

> "Improve error handling across the app:

1. Create src/components/ui/ErrorBoundary.tsx:
   - React error boundary
   - Friendly error UI
   - Retry mechanism
   - Log errors to console

2. Update src/app/layout.tsx:
   - Wrap app in ErrorBoundary

3. Enhance error messages in:
   - useSubmitStory hook (make errors user-friendly)
   - useStories hook (distinguish network vs API errors)
   - SubmitStoryForm (better validation messages)

Make errors helpful, not technical."
```

**Step 5.3: Add Filtering** (45 min) - CLAUDE CODE ✨

bash

```markdown
# GOO-14
claude-code

> "Add story filtering:

1. src/components/features/StoryFilter.tsx:
   - Button group for: All, High School, University, Mid Career
   - Active state styling
   - Calls callback on click

2. Update src/components/features/StoryFeed.tsx:
   - Add useState for selected filter
   - Pass filter to useStories hook
   - Show StoryFilter component above grid
   - Update when filter changes

3. Update src/hooks/useStories.ts:
   - Accept stage parameter
   - Refetch when stage changes

Make it feel snappy and responsive."
```

**Step 5.4: Performance Check** (15 min) - MANUAL

-   Check bundle size
-   Test load times
-   Optimize if needed

**✅ Day 6 Complete:** Everything integrated and working

___

## Phase 6: Figma Integration (Day 7) - MANUAL + CLAUDE CODE

## Time: 2-3 hours (was 4-5) | Claude Code: Used with MCP

### Morning Session (2 hours)

**Step 6.1: Figma Design System** (1.5 hours) - MANUAL

**Why manual?** You need to learn design systems thinking.

-   Create Figma file following our structure discussion
-   Design tokens page
-   Component library
-   Use Auto Layout properly
-   Name layers semantically

**This is hands-on learning - can't shortcut**

**Step 6.2: Figma MCP Setup** (30 min) - MANUAL

-   Get Figma API token
-   Install Figma MCP on local machine
-   Configure in Claude Desktop
-   Test connection

### Afternoon Session (1 hour)

**Step 6.3: Generate Components from Figma** (1 hour) - CLAUDE CODE + MCP ✨

**This is the magic moment:**

bash

```markdown
# In Claude Desktop (with Figma MCP):
"Read my StoryCard component from Figma file [URL]. 
Generate the React + TypeScript code matching the design exactly."

# Claude reads Figma via MCP, generates code

# Then in terminal:
claude-code

> "Update src/components/features/StoryCard.tsx to match this Figma design:

[Paste design specs from Claude Desktop]

Keep our existing functionality but update:
- Exact spacing from Figma
- Exact colors from design tokens
- Typography matching Figma
- Border radius, shadows
- Hover states

Maintain TypeScript types and our Story interface."
```

**Compare with your original, iterate on design**

**Time saved:** 2 hours (design → code faster)

**✅ Day 7 Complete:** Design system established, MCP working

___

## Phase 7: Admin Panel (Day 8) - CLAUDE CODE HEAVY

## Time: 1-2 hours (was 3-4) | Claude Code: Heavy

### Morning Session (1-2 hours)

**Step 7.1: n8n Admin Workflows** (30 min) - HYBRID

bash

```markdown
# Manual: Create workflows in n8n UI

# Claude Code for logic:
claude-code

> "Generate JavaScript for n8n admin workflows:

1. Admin authentication validation:
   - Check bearer token against env variable
   - Return 401 if invalid

2. Get pending stories query:
   - SQL to get unapproved stories
   - Order by submitted_at

3. Approve story:
   - Update approved = true where id = $1

4. Reject story:
   - Delete story where id = $1

Include error handling."
```

**Wire up in n8n manually**

**Step 7.2: Admin UI** (1 hour) - CLAUDE CODE ✨

bash

```markdown
# GOO-13
git checkout goo-13-build-admin-moderation-page

claude-code

> "Build admin moderation interface:

1. src/app/admin/page.tsx:
   - Simple password check (prompt, compare to env)
   - If authenticated, show admin panel
   - Fetch pending stories
   - Display in table:
     * Story text (truncated with expand)
     * Pipeline stage badge
     * Submitted time
     * Approve button (green)
     * Reject button (red)
   - Loading states
   - Empty state (no pending stories)
   - Optimistic updates

2. src/lib/api.ts:
   - Add admin functions:
     * getPendingStories(password)
     * approveStory(id, password)
     * rejectStory(id, password)
   - Include password in headers

3. Style professionally:
   - Clean table design
   - Clear action buttons
   - Confirmation on reject
   - Success/error toasts

4. src/hooks/useAdmin.ts:
   - Hook for admin operations
   - Manages pending list
   - Handles approve/reject

Security note: This is basic auth for learning. 
Production would need proper authentication."
```

**Test admin flow**

**Time saved:** 2 hours

**✅ Day 8 Complete:** Admin panel working

___

## Phase 8: Release Automation (Day 9) - HYBRID

## Time: 3-4 hours (was 4-5) | Claude Code: Moderate

### Morning Session (2 hours)

**Step 8.1: Release Notes Workflow** (1.5 hours) - HYBRID

**Manual: Create n8n workflow structure**

-   GitHub webhook trigger
-   Linear API queries
-   PostgreSQL queries

**Claude Code for the hard parts:** ✨

bash

```markdown
claude-code

> "Generate components for release notes automation:

1. release-notes-prompt.md:
   - Comprehensive prompt for Claude API
   - Takes: commits, Linear issues, learning journal entries
   - Generates 3 formats: technical, learning docs, blog post
   - Include structure and examples

2. JavaScript for n8n Function node:
   - Aggregates data from multiple sources
   - Formats for Claude API
   - Parses response into 3 separate outputs

3. JavaScript to post to GitHub releases:
   - Uses GitHub API
   - Formats markdown correctly
   - Includes all sections

Save these as separate files in docs/automation/"
```

**Wire up in n8n, add Claude API credentials**

**Step 8.2: Test Release Flow** (30 min) - MANUAL

bash

```perl
git tag -a v0.1.0 -m "Initial MVP"
git push origin v0.1.0

# Watch n8n workflow execute
# Review generated release notes
# Iterate if needed
```

### Afternoon Session (1-2 hours)

**Step 8.3: Changelog Page** (1 hour) - CLAUDE CODE ✨

bash

```markdown
# GOO-15 (part of it)
claude-code

> "Create changelog page for the website:

1. src/app/changelog/page.tsx:
   - Fetches releases from GitHub API
   - Displays in timeline format
   - Shows version, date, changes
   - Links to full release notes
   - Filterable by type (feature/fix/chore)
   - Beautiful, scannable design

2. src/lib/github.ts:
   - Function to fetch releases from GitHub API
   - Parse and format data

3. src/components/features/ChangelogEntry.tsx:
   - Single changelog entry component
   - Version number
   - Date
   - Change list
   - Link to GitHub release

Make it visually appealing and easy to navigate."
```

**Step 8.4: Learning Docs Template** (30 min) - CLAUDE CODE ✨

bash

```markdown
claude-code

> "Create template for learning documentation:

1. docs/learning-journey/template.md:
   - Standard structure for each feature
   - What I Built section
   - What I Learned section
   - Challenges & Solutions
   - Resources Used
   - Time Tracking
   - Difficulty Rating
   - Key Takeaways

2. docs/learning-journey/index.md:
   - Overview of learning journey
   - Table of contents
   - Links to each feature doc
   - Timeline

3. Generate first learning doc:
   docs/learning-journey/01-theme-system.md
   - Based on GOO-3 from Linear
   - Fill in the template
   - Make it compelling for other learners"
```

**✅ Day 9 Complete:** Release automation working

___

## Phase 9: Documentation (Day 10) - CLAUDE CODE HEAVY

## Time: 1-2 hours (was 3-4) | Claude Code: Heavy

### Morning Session (1-2 hours)

**Step 9.1: Complete Documentation** - CLAUDE CODE ✨

bash

```markdown
claude-code

> "Generate comprehensive project documentation:

1. Update README.md:
   - Add screenshots section (placeholders)
   - Detailed setup instructions
   - Environment variables needed
   - How to run locally
   - How to deploy
   - Architecture diagram (ASCII art)
   - Link to all other docs

2. Create docs/ARCHITECTURE.md:
   - System architecture diagram
   - Data flow
   - Component hierarchy
   - API structure
   - Database schema
   - n8n workflow descriptions

3. Create docs/SETUP.md:
   - Step-by-step setup guide
   - Prerequisites
   - VPS setup
   - Database setup
   - n8n configuration
   - Frontend deployment
   - Environment variables
   - Troubleshooting common issues

4. Create docs/CONTRIBUTING.md:
   - How to contribute
   - Code style
   - Commit conventions
   - PR process

5. Update docs/api/README.md:
   - Ensure all endpoints documented
   - Add rate limiting info
   - Authentication details
   - Example requests/responses

6. Create docs/LEARNING.md:
   - Overview of learning journey
   - Skills gained
   - Time invested
   - Challenges overcome
   - Resources that helped
   - Advice for others

Base all documentation on the actual codebase and Linear tickets."
```

**Step 9.2: Add Code Comments** (30 min) - CLAUDE CODE ✨

bash

```markdown
claude-code

> "Add JSDoc comments to all major functions and components:

- Describe what each does
- Parameter types and descriptions
- Return values
- Usage examples where helpful
- Don't over-comment obvious code

Focus on:
- src/lib/api.ts
- src/hooks/*
- src/components/features/*
- Complex logic in components"
```

**Step 9.3: Final Polish** (30 min) - MANUAL

-   Take screenshots
-   Add to README
-   Review all docs
-   Fix any issues

**✅ Day 10 Complete:** Documentation is comprehensive

___

## Phase 10: Deployment (Day 11) - MANUAL

## Time: 2-3 hours | Claude Code: Minimal

**Why manual?** Deployment is hands-on, you need to see it work.

### Morning Session (2-3 hours)

**Step 10.1: Deploy to Vercel** (1 hour) - MOSTLY MANUAL

bash

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Claude Code can help with config:** ✨

bash

```markdown
claude-code

> "Generate vercel.json configuration:
- Build command: npm run build
- Output directory: .next
- Environment variables needed
- Proper redirects
- SPA routing"
```

**Step 10.2: Configure Production** (30 min) - MANUAL

-   Add environment variables in Vercel
-   Point to production n8n URLs
-   Test API connectivity
-   Configure domain (if you have one)

**Step 10.3: Update n8n for Production** (30 min) - MANUAL

-   Update CORS headers in workflows
-   Add production webhook URLs
-   Test from production frontend

**Step 10.4: Final Testing** (1 hour) - MANUAL

-   Submit stories in production
-   Test moderation
-   Check database
-   Test on mobile devices
-   Share with friends

**✅ Day 11 Complete:** Live in production! 🎉

___

## Phase 11: Launch (Day 12) - CLAUDE CODE ASSISTS

## Time: 2-3 hours | Claude Code: Moderate

### Morning Session (1 hour)

**Step 11.1: Create v1.0.0 Release** (15 min) - MANUAL

bash

```perl
git tag -a v1.0.0 -m "MVP Launch"
git push origin v1.0.0

# Watch automated release notes generate
```

**Step 11.2: Write Launch Post** (45 min) - CLAUDE CODE ✨

bash

```yaml
claude-code

> "Write a compelling launch blog post for dev.to:

Title: "I Built a Full-Stack App While Learning Backend Development"

Content:
- Hook: Why I built this
- The challenge: Frontend dev learning backend
- The solution: Strategic use of n8n and automation
- The journey: Key learnings at each phase
- The tech stack: Why I chose each tool
- Challenges overcome: Specific examples from Linear
- The result: What I built (with screenshots)
- Key takeaways: What other frontend devs can learn
- What's next: Future features
- Call to action: Try it, give feedback

Tone: Authentic, helpful, not boastful
Length: 1200-1500 words
Include code snippets and lessons learned
Make it valuable for other developers"
```

**Review, edit with your voice, publish**

### Afternoon Session (1-2 hours)

**Step 11.3: Social Media** (30 min) - CLAUDE CODE ✨