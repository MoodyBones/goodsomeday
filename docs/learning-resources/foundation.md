# Goodsomeday: Foundation Document

**A Visual-First Learning Journey in 6 Milestones**

---

## Project Overview

**What:** A platform for sharing career journey stories, inspired by Australia's Leaky Pipeline Report  
**Why:** To learn visual-first, AI-assisted full-stack development while building something meaningful  
**How:** Using modern tools (n8n, Claude Code, Figma MCP) that match a visual learner's style  

**Total estimated effort:** 24-34 hours  
**Typical timeframe:** 2-3 weeks  
**Approach:** Iterative, flexible, sustainable

---

## Quick Start: Your First Session

**New to the project? Start here:**

1. Read "Core Philosophy" below (understand the approach)
2. Review current milestone in "The 6 Milestones" section
3. **Before each work session:** Open fresh Claude chat, say **"Run my daily activation"**
4. Follow the interactive prompts → land on ONE tiny action → set 20-min timer → start
5. After 20 min: Continue if engaged, or celebrate and stop

**That's it.** The daily activation system handles starting friction. The milestones guide what to build. The chat templates help when stuck.

---

## Core Philosophy

### What This Project IS

- Visual-first learning journey
- AI-assisted development (Claude Code for boilerplate)
- Learning just enough backend to use modern tools effectively
- Stepping stone to Figma MCP and design systems
- Building on your strengths (frontend, visual learning, accessibility)
- Open-source, building in public
- Values-driven: equality, fair work, accessibility

### What This Project ISN'T

- Traditional full-stack mastery
- Hand-coding backend APIs from scratch
- Becoming a database optimisation expert
- Sprint-based with rigid deadlines
- Losing your frontend developer identity

### Your Unique Approach

**Traditional Path:**
- Learn Express.js → Write API routes → Master SQL → Optimise databases

**Your Path:**
- Use n8n visual workflows (no Express.js)
- PostgreSQL via n8n nodes (minimal raw SQL)
- Claude Code generates boilerplate
- Stay frontend-focused, use tools for the rest

**Why It Works:**
- You're a visual learner
- Databases don't excite you (and that's fine)
- Your passion: beautiful, accessible frontends
- Your real goal: Figma MCP integration and design systems
- Fair work means tools adapt to humans, not vice versa

---

## Tech Stack Rationale

### Frontend (Your Comfort Zone)
- **Next.js 14:** App router, server components, modern patterns
- **TypeScript:** Type safety, better learning through explicit interfaces
- **Tailwind CSS:** Utility-first, fast iteration, matches component thinking

### Backend (Visual & AI-Assisted)
- **n8n:** Visual workflow automation - see the logic flow, no Express.js
- **PostgreSQL:** Industry-standard database, accessed via n8n nodes
- **Claude Code:** Generates components and boilerplate you don't want to write

### Infrastructure
- **VPS (DigitalOcean):** Real server experience, full control
- **Nginx:** Reverse proxy, SSL termination
- **PM2:** Process management, auto-restart

### Future Goal
- **Figma MCP:** Design-to-code automation (this is where you're really headed)
- **Code Connect:** Better design-developer collaboration

---

## The 6 Milestones

### Milestone 1: Foundation (COMPLETE)

**Estimated effort:** 5-6 hours (2-3 sessions)  
**Status:** Done  
**What you completed:**
- Linear workspace with 20 structured tickets (GOO-6 to GOO-25)
- GitHub repository with professional README
- Linear ↔ GitHub two-way sync and auto-branch creation
- Professional Git workflow understanding (feature branches, PRs, commits)
- 12 chat templates for different scenarios
- Chat selection guide
- Fish shell aliases for efficient workflow

**Deliverables:**
- Linear project: Goodsomeday
- GitHub repo: MoodyBones/goodsomeday
- docs/learning-resources/ structure
- docs/learning-resources/chat-templates/ (12 templates)
- docs/learning-resources/chat-selection-guide.md
- ~/.config/fish/config.fish (aliases configured)

**Key learnings:**
- Git workflow with PRs (even solo)
- Commit message conventions
- Template-based communication
- Systematic approach beats ad-hoc
- Documentation as learning reinforcement

**Progress:** 1/6 milestones (17%)

---

### Milestone 2: Infrastructure

**Estimated effort:** 6-8 hours (3-4 sessions)  
**What you'll complete:**
- VPS provisioning and security hardening
- n8n installation with SSL
- PostgreSQL database setup

**Linear tickets:**
- GOO-9: Provision and secure VPS
- GOO-10: Install and configure n8n
- GOO-11: Set up PostgreSQL database

**Key concepts to learn:**
- SSH key authentication
- Linux user management and permissions
- Firewall configuration (UFW)
- Server security best practices
- Nginx reverse proxy
- SSL certificates with Let's Encrypt
- Process management (PM2)
- Database installation and configuration

**Success criteria:**
- Running VPS accessible via SSH
- n8n accessible via domain with HTTPS
- PostgreSQL installed and connectable
- First feature branch → PR → merge workflow complete
- Learning notes documented in Linear

**Chat templates to use:**
- 03-vps-setup.md (primary)
- 05-backend-help.md (if needed)
- 09-problem-visualisation.md (if concepts unclear)

**Progress:** 2/6 milestones (33%)

---

### Milestone 3: Visual Backend

**Estimated effort:** 6-8 hours (3-4 sessions)  
**What you'll complete:**
- Database schema design
- n8n workflows for all API endpoints
- Backend fully functional (no hand-coded APIs!)

**Linear tickets:**
- GOO-12: Design and implement database schema
- GOO-13: Create n8n workflow - Story submission
- GOO-14: Create n8n workflow - Get stories
- GOO-15: Create n8n workflow - Learning journal

**Key concepts to learn:**
- Relational database design
- SQL DDL (schema creation)
- Indexing strategies
- n8n webhook configuration
- Visual workflow logic building
- Data validation patterns
- n8n function nodes (JavaScript when needed)
- PostgreSQL node in n8n

**Success criteria:**
- Database schema created with proper indexes
- Story submission workflow working (tested with curl)
- Get stories workflow with filtering working
- Learning journal workflow connected to Linear
- All workflows tested and documented
- API documentation created

**Chat templates to use:**
- 05-backend-help.md (primary)
- 09-problem-visualisation.md (understanding data flow)
- 07-strategic-prompting.md (if using Claude Code for function nodes)

**Progress:** 3/6 milestones (50%)

---

### Milestone 4: Frontend Components

**Estimated effort:** 4-6 hours (2-3 sessions, heavy Claude Code use)  
**What you'll complete:**
- Next.js project initialised
- Figma design system
- Theme switching system
- Core UI components
- API integration layer

**Linear tickets:**
- GOO-6: Initialise Next.js project with TypeScript and Tailwind
- GOO-7: Set up Figma design system
- GOO-8: Implement theme system with CSS variables
- GOO-16: Build StoryCard component
- GOO-17: Create API client and hooks
- GOO-18: Build story submission form

**Key concepts to learn:**
- Next.js 14 app router
- TypeScript in React
- Tailwind configuration for theming
- CSS custom properties (variables)
- React Context API
- Preventing FOUC (Flash of Unstyled Content)
- Custom React hooks
- Form handling and validation
- API integration patterns
- Figma Auto Layout
- Design tokens methodology

**Claude Code usage:**
- Project initialisation and setup
- Component scaffolding
- API client boilerplate
- Form validation logic
- TypeScript type definitions

**Success criteria:**
- Next.js app running locally
- Figma design system created
- Theme toggle working with persistence
- StoryCard component matching Figma design
- API client with error handling
- Story submission form fully functional
- All components responsive and accessible

**Chat templates to use:**
- 04-frontend-help.md (primary)
- 07-strategic-prompting.md (Claude Code best practices)
- 01-figjam-coaching.md (if need to visualise component architecture)

**Progress:** 4/6 milestones (67%)

---

### Milestone 5: Integration

**Estimated effort:** 3-5 hours (2-3 sessions)  
**What you'll complete:**
- Story feed with real data
- Filtering functionality
- Admin moderation panel
- End-to-end testing

**Linear tickets:**
- GOO-19: Build story feed component
- GOO-20: Add story filtering by pipeline stage
- GOO-21: Build admin moderation panel

**Key concepts to learn:**
- Data fetching in Next.js
- Loading states and skeletons
- Empty states and error handling
- Grid layouts with Tailwind
- URL parameters for filtering
- Basic authentication patterns
- Optimistic UI updates
- Protected routes

**Success criteria:**
- Story feed displays approved stories
- Filtering works smoothly
- Admin panel functional (approve/reject stories)
- All features tested end-to-end
- Mobile responsive
- Accessibility verified
- Performance acceptable

**Chat templates to use:**
- 04-frontend-help.md (components)
- 05-backend-help.md (admin workflows)
- 10-challenging-assumptions.md (if stuck)

**Progress:** 5/6 milestones (83%)

---

### Milestone 6: Launch

**Estimated effort:** 4-6 hours (2-3 sessions)  
**What you'll complete:**
- Automated release notes
- Public changelog page
- Complete documentation
- Production deployment

**Linear tickets:**
- GOO-22: Set up automated release notes
- GOO-23: Create changelog page
- GOO-24: Complete project documentation
- GOO-25: Deploy to production

**Key concepts to learn:**
- GitHub API integration
- Linear API usage
- Claude API for content generation
- Release automation workflows
- Vercel deployment
- Production environment configuration
- Documentation best practices

**Success criteria:**
- Release notes workflow functioning
- Changelog page displaying releases
- Comprehensive documentation complete
- Deployed to production (Vercel)
- Domain configured (if applicable)
- All environment variables set
- Production testing complete

**Chat templates to use:**
- 05-backend-help.md (n8n automation)
- 04-frontend-help.md (changelog page)
- 06-stakeholder-plan.md (launch communication)

**Progress:** 6/6 milestones (100%)

---

## All Linear Tickets (GOO-6 to GOO-25)

### Infrastructure & Setup

#### GOO-6: Initialise Next.js project with TypeScript and Tailwind

**Milestone:** Frontend Components  
**Priority:** Urgent  
**Labels:** chore, feature, frontend  
**Estimated effort:** 2 hours

**Description:**
Set up the base Next.js 14 project with TypeScript, Tailwind CSS, and ESLint/Prettier configuration.

**Acceptance Criteria:**
- Next.js 14 app directory structure
- TypeScript configured
- Tailwind CSS installed and working
- ESLint + Prettier configured
- Project runs locally on localhost:3000
- Clean folder structure (components/ui, components/features, lib, types, hooks, contexts)
- .env.local with NEXT_PUBLIC_API_URL

**What I'll Learn:**
- Next.js 14 app router setup
- TypeScript configuration in Next.js
- Modern frontend tooling and configuration
- Project structure best practices

**Resources:**
- https://nextjs.org/docs/getting-started
- https://tailwindcss.com/docs/guides/nextjs

---

#### GOO-7: Set up Figma design system

**Milestone:** Frontend Components  
**Priority:** High  
**Labels:** chore, design  
**Estimated effort:** 3 hours

**Description:**
Create Figma file with design tokens, components, and theme variants following MCP-friendly structure.

**Acceptance Criteria:**
- Design tokens page (colours, typography, spacing)
- Component library with Auto Layout
- Light and dark theme variants
- Semantic layer naming
- Components: StoryCard, Badge, Button, Form elements
- All layers named semantically (no "Rectangle 1")

**What I'll Learn:**
- Figma Auto Layout system
- Design token methodology
- Component-driven design
- Designing for dark mode
- MCP-optimised file structure

**Resources:**
- Figma Auto Layout documentation
- Design systems best practices

---

#### GOO-8: Implement theme system with CSS variables

**Milestone:** Frontend Components  
**Priority:** High  
**Labels:** feature, frontend  
**Estimated effort:** 3 hours

**Description:**
Create theme switching system using CSS variables and React Context, supporting light/dark modes with localStorage persistence.

**Acceptance Criteria:**
- CSS variables for all theme colours
- Theme toggle component with icon
- localStorage persistence
- No FOUC (Flash of Unstyled Content) on page load
- Tailwind configured for CSS variable theming
- ThemeContext and useTheme hook
- Works across all components

**What I'll Learn:**
- CSS custom properties (variables)
- React Context API for global state
- localStorage browser API
- Preventing FOUC with inline scripts
- Theme architecture patterns

**Resources:**
- https://joshwcomeau.com/react/dark-mode/
- Tailwind CSS variables guide

---

#### GOO-9: Provision and secure VPS

**Milestone:** Infrastructure  
**Priority:** Urgent  
**Labels:** backend, chore, devops  
**Estimated effort:** 2 hours

**Description:**
Research VPS providers, provision server, and complete initial security setup.

**Acceptance Criteria:**
- VPS provisioned (DigitalOcean/Linode/Vultr)
- SSH key authentication configured
- Non-root user created with sudo privileges
- Root login disabled
- Password authentication disabled
- Firewall configured (UFW) - ports 22, 80, 443
- Server accessible via SSH
- Basic security hardening completed

**What I'll Learn:**
- VPS basics and cloud provider comparison
- SSH key authentication
- Linux user management
- Firewall configuration (UFW)
- Server security best practices
- Basic Linux command line

**Resources:**
- DigitalOcean initial server setup tutorial
- SSH security best practices
- UFW firewall guide

---

#### GOO-10: Install and configure n8n

**Milestone:** Infrastructure  
**Priority:** Urgent  
**Labels:** backend, chore, devops  
**Estimated effort:** 3 hours

**Description:**
Install n8n on VPS with proper security, SSL certificate, and basic configuration.

**Acceptance Criteria:**
- n8n installed and running
- Accessible via domain/subdomain (e.g., n8n.yourdomain.com)
- SSL certificate configured (Let's Encrypt)
- Basic authentication enabled
- PM2 process manager configured
- n8n starts automatically on server reboot
- Test workflow created and working
- Nginx reverse proxy configured

**What I'll Learn:**
- Installing Node.js applications on Linux
- Nginx reverse proxy configuration
- SSL/TLS certificates with Certbot
- Process managers (PM2)
- Environment variable management
- Webhook basics

**Resources:**
- n8n self-hosting documentation
- Nginx reverse proxy guide
- Let's Encrypt/Certbot tutorial

---

### Database & Backend

#### GOO-11: Set up PostgreSQL database

**Milestone:** Infrastructure  
**Priority:** Urgent  
**Labels:** backend, chore, devops  
**Estimated effort:** 2 hours

**Description:**
Install PostgreSQL, configure for n8n and application use, and create initial databases.

**Acceptance Criteria:**
- PostgreSQL installed on VPS
- Database created: goodsomeday_prod
- Database user created with proper permissions
- Can connect from n8n
- Backup strategy documented
- Test connection successful

**What I'll Learn:**
- PostgreSQL installation and configuration
- Database user management and permissions
- Connection strings and security
- Basic database administration
- psql command line tool

**Resources:**
- PostgreSQL getting started guide
- Database security best practices

---

#### GOO-12: Design and implement database schema

**Milestone:** Visual Backend  
**Priority:** High  
**Labels:** backend, feature  
**Estimated effort:** 3 hours

**Description:**
Design PostgreSQL schema for stories, moderation, and learning journal.

**Acceptance Criteria:**
- stories table created (id, story_text, pipeline_stage, submitted_at, approved, ip_address)
- learning_journal table created (issue_id, title, what_built, what_learned, challenges, solutions, resources_used, time_estimated, time_actual, difficulty_rating)
- Proper indexes added for performance
- Constraints and validation defined
- Schema documented with comments
- Seed data added for testing

**What I'll Learn:**
- Relational database design
- SQL DDL statements
- Indexing strategies
- Data normalisation
- PostgreSQL data types
- Schema documentation

**Resources:**
- PostgreSQL schema design guide
- Database indexing best practices

---

#### GOO-13: Create n8n workflow - Story submission

**Milestone:** Visual Backend  
**Priority:** High  
**Labels:** backend, feature  
**Estimated effort:** 4 hours

**Description:**
Build n8n workflow to handle story submissions from frontend with validation and database storage.

**Acceptance Criteria:**
- Webhook endpoint created: /webhook/submit-story
- Data validation node (story text length, pipeline stage)
- Save to PostgreSQL stories table
- Error handling for invalid data
- Returns proper success/error responses
- Workflow tested with curl

**What I'll Learn:**
- n8n workflow basics
- Webhook configuration and testing
- Data validation patterns
- Error handling in workflows
- PostgreSQL integration in n8n
- REST API response formats

**Resources:**
- n8n webhook documentation
- n8n PostgreSQL node docs

---

#### GOO-14: Create n8n workflow - Get stories

**Milestone:** Visual Backend  
**Priority:** High  
**Labels:** backend, feature  
**Estimated effort:** 2 hours

**Description:**
Build n8n workflow to fetch approved stories with optional filtering by pipeline stage.

**Acceptance Criteria:**
- Webhook endpoint created: /webhook/get-stories
- Query PostgreSQL with filters (stage, limit)
- Return formatted JSON response
- Pagination support
- Only returns approved stories
- Proper error handling
- Workflow tested with different filters

**What I'll Learn:**
- SQL SELECT queries with WHERE clauses
- Query parameters and filtering
- API response formatting
- Pagination patterns
- n8n data transformation

**Resources:**
- PostgreSQL SELECT documentation
- REST API design patterns

---

#### GOO-15: Create n8n workflow - Learning journal

**Milestone:** Visual Backend  
**Priority:** Medium  
**Labels:** backend, feature, learning  
**Estimated effort:** 3 hours

**Description:**
Build n8n workflow to record learning data when Linear issues are completed.

**Acceptance Criteria:**
- Webhook endpoint created: /webhook/learning-journal
- Accepts Linear issue data
- Parses learning fields (what_built, what_learned, challenges, solutions)
- Upserts to learning_journal table (update if exists, insert if new)
- Handles missing/optional fields
- Returns success confirmation
- Workflow tested with sample data

**What I'll Learn:**
- Webhook payload parsing
- Upsert operations (INSERT ... ON CONFLICT)
- JSON data handling
- n8n function nodes
- Data transformation logic

**Resources:**
- PostgreSQL UPSERT documentation
- n8n Function node examples

---

### Frontend Components

#### GOO-16: Build StoryCard component

**Milestone:** Frontend Components  
**Priority:** High  
**Labels:** feature, frontend  
**Estimated effort:** 3 hours

**Description:**
Create React component for displaying submitted stories, matching Figma design.

**Acceptance Criteria:**
- Displays story text
- Shows pipeline stage badge with colour coding
- Timestamp formatting (relative time: "2 hours ago")
- Responsive design (mobile to desktop)
- Matches Figma specs exactly
- TypeScript interfaces defined
- Works with both light and dark themes
- Hover effects and transitions

**What I'll Learn:**
- React component design patterns
- TypeScript prop typing
- Tailwind responsive design
- Date formatting with date-fns
- Component composition
- Accessibility best practices

**Resources:**
- React component patterns
- date-fns documentation
- Figma StoryCard design

---

#### GOO-17: Create API client and hooks

**Milestone:** Frontend Components  
**Priority:** High  
**Labels:** backend, feature, frontend  
**Estimated effort:** 2 hours

**Description:**
Build API client layer with fetch wrapper functions and React hooks for data fetching.

**Acceptance Criteria:**
- API client in src/lib/api.ts with error handling
- submitStory() function
- getStories() function with filters
- useSubmitStory hook with loading/error/success states
- useStories hook with loading/error/refetch
- TypeScript throughout
- Environment variable for API URL
- Proper error messages

**What I'll Learn:**
- Fetch API usage and configuration
- Custom React hooks creation
- Error handling patterns
- Loading state management
- TypeScript generics
- Environment variables in Next.js

**Resources:**
- React hooks documentation
- fetch API guide
- TypeScript generics

---

#### GOO-18: Build story submission form

**Milestone:** Frontend Components  
**Priority:** High  
**Labels:** feature, frontend  
**Estimated effort:** 4 hours

**Description:**
Create form for submitting stories with validation and API integration.

**Acceptance Criteria:**
- Textarea for story input
- Dropdown for pipeline stage selection
- Client-side validation (50-5000 characters)
- Loading states during submission
- Error handling with user-friendly messages
- Success feedback (message + form clear)
- Connects to useSubmitStory hook
- Fully responsive
- Accessible (ARIA labels, keyboard navigation)

**What I'll Learn:**
- Form handling in React
- Client-side validation techniques
- API integration from frontend
- Loading and error state UX
- Form accessibility
- User feedback patterns

**Resources:**
- React forms best practices
- Form accessibility guide

---

#### GOO-19: Build story feed component

**Milestone:** Integration  
**Priority:** High  
**Labels:** feature, frontend  
**Estimated effort:** 4 hours

**Description:**
Display grid/list of submitted stories fetched from backend API.

**Acceptance Criteria:**
- Fetches stories using useStories hook
- Grid layout (responsive: 1/2/3 columns)
- Loading skeleton components
- Empty state ("No stories yet" message)
- Error handling with retry button
- Uses StoryCard component for each story
- Smooth loading transitions
- Auto-refresh on new submission

**What I'll Learn:**
- Data fetching in Next.js
- useEffect and async operations
- Loading states and skeletons
- Grid layouts with Tailwind
- Empty state design
- Component reusability

**Resources:**
- Next.js data fetching
- Skeleton loading patterns

---

#### GOO-20: Add story filtering

**Milestone:** Integration  
**Priority:** Low  
**Labels:** feature, frontend  
**Estimated effort:** 2 hours

**Description:**
Allow users to filter stories by pipeline stage (All, High School, University, Mid Career).

**Acceptance Criteria:**
- Filter UI component (button group or tabs)
- Active state styling for selected filter
- Updates URL params when filter changes
- Fetches filtered data from API
- Clear/reset filter option
- Maintains filter state on page refresh
- Smooth transitions between filtered views

**What I'll Learn:**
- URL parameters in Next.js
- Query string management
- Filtering UX patterns
- State synchronisation with URL
- Next.js routing

**Resources:**
- Next.js routing and params
- URL state management

---

### Admin, Automation & Polish

#### GOO-21: Build admin moderation panel

**Milestone:** Integration  
**Priority:** Medium  
**Labels:** backend, feature, frontend  
**Estimated effort:** 5 hours

**Description:**
Create password-protected admin interface for moderating story submissions.

**Acceptance Criteria:**
- Simple password protection (env variable)
- List all pending (unapproved) stories
- Approve button (green) per story
- Reject button (red) per story
- n8n workflows for approve/reject actions
- Updates reflect immediately (optimistic UI)
- Loading states for actions
- Confirmation dialogue for reject
- Admin route at /admin

**What I'll Learn:**
- Basic authentication patterns
- Admin interface design
- State management for lists
- Optimistic UI updates
- Protected routes in Next.js
- CRUD operations from frontend

**Resources:**
- Next.js authentication patterns
- Admin UI best practices

**Note:** This is basic auth for learning. Production would need proper authentication.

---

#### GOO-22: Set up automated release notes

**Milestone:** Launch  
**Priority:** Medium  
**Labels:** backend, devops, feature, learning  
**Estimated effort:** 4 hours

**Description:**
Create n8n workflow to generate release notes from Linear + GitHub data using Claude API.

**Acceptance Criteria:**
- n8n workflow triggered on git tag creation
- Fetches Linear issues closed since last release
- Fetches commits and PRs from GitHub
- Queries learning_journal for learning data
- Calls Claude API to generate 3 formats (technical, learning, blog)
- Posts to GitHub releases automatically
- Saves to docs/ folder in repo
- Sends notification on completion

**What I'll Learn:**
- GitHub API integration
- Linear API usage
- Claude API for content generation
- Webhook triggers and automation
- Release management workflows
- Multi-format documentation

**Resources:**
- GitHub API documentation
- Linear API docs
- Anthropic API documentation

---

#### GOO-23: Create changelog page

**Milestone:** Launch  
**Priority:** Low  
**Labels:** feature, frontend  
**Estimated effort:** 2 hours

**Description:**
Build public-facing changelog page displaying all releases and updates.

**Acceptance Criteria:**
- Route at /changelog
- Fetches releases from GitHub API
- Timeline/list format display
- Shows version, date, and changes
- Links to full GitHub release notes
- Filterable by type (feature/fix/chore)
- Beautiful, scannable design
- Responsive layout

**What I'll Learn:**
- GitHub API integration from frontend
- Timeline UI patterns
- Markdown rendering
- Data fetching and caching
- Public API consumption

**Resources:**
- GitHub Releases API
- Timeline UI patterns

---

#### GOO-24: Complete project documentation

**Milestone:** Launch  
**Priority:** Medium  
**Labels:** chore, learning  
**Estimated effort:** 3 hours

**Description:**
Write comprehensive documentation for the project including setup, architecture, and learning journey.

**Acceptance Criteria:**
- README.md updated with screenshots, setup instructions, architecture
- docs/ARCHITECTURE.md created (system design, data flow)
- docs/SETUP.md created (step-by-step setup guide)
- docs/api/README.md complete (all endpoints documented)
- docs/CONTRIBUTING.md created
- docs/LEARNING.md created (learning journey overview)
- Learning journey docs for each major feature
- Code comments added to complex functions

**What I'll Learn:**
- Technical documentation writing
- Architecture diagrams (ASCII art)
- API documentation standards
- Writing for different audiences
- Documentation-driven development

**Resources:**
- Documentation best practices
- Markdown guide
- API documentation examples

---

#### GOO-25: Deploy to production

**Milestone:** Launch  
**Priority:** High  
**Labels:** chore, devops  
**Estimated effort:** 2 hours

**Description:**
Deploy Next.js frontend to Vercel and configure production environment.

**Acceptance Criteria:**
- Deployed to Vercel
- Environment variables configured
- Custom domain connected (if available)
- Production API endpoints configured
- SSL/HTTPS working
- CORS configured in n8n for production
- Error monitoring set up
- Final testing in production
- Performance check passed

**What I'll Learn:**
- Vercel deployment process
- Production environment configuration
- DNS and domain management
- Environment-specific configuration
- Production debugging
- Performance optimisation

**Resources:**
- Vercel deployment guide
- Next.js production checklist
- Environment variables in Vercel

---

## Git Workflow

### Daily Workflow Pattern

```bash
# 1. In Linear: Move ticket to "In Progress"
#    → Linear auto-creates branch (e.g., goo-9-provision-vps)

# 2. Fetch and checkout the branch
git fetch origin
git checkout goo-9-provision-vps

# 3. Work on the feature
# ... make changes ...

# 4. Commit (multiple commits OK on feature branch)
git add .
git commit -m "feat(GOO-9): configure SSH key authentication"

# Continue working, more commits...
git add .
git commit -m "feat(GOO-9): set up firewall rules"

# 5. Push to GitHub
git push origin goo-9-provision-vps

# 6. Create Pull Request
ghpr  # Fish alias: gh pr create --fill

# 7. Self-review on GitHub
# - Read through Files Changed tab
# - Check it matches acceptance criteria
# - Add comments to complex sections
# - Catch any mistakes

# 8. Merge PR
ghmerge  # Fish alias: gh pr merge --squash --delete-branch
# → Linear ticket auto-closes to "Done"

# 9. Back to main, pull latest
git checkout main
git pull origin main
```

### Commit Message Format

```
<type>(<ticket>): <subject>

<body with bullet points>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Formatting, no code change
- `refactor` - Code restructuring, no feature/fix
- `test` - Adding tests
- `chore` - Build/config changes
- `perf` - Performance improvement

**Examples:**

```bash
# Simple commit
git commit -m "feat(GOO-16): add StoryCard component with theme support"

# Detailed commit
git commit -m "feat(GOO-18): build story submission form

- Add textarea with character validation (50-5000)
- Add pipeline stage dropdown
- Implement loading and error states
- Connect to useSubmitStory hook
- Add success message and form reset
- Ensure full accessibility (ARIA labels, keyboard nav)"

# Fix commit
git commit -m "fix(GOO-8): prevent theme flicker on page load

- Add inline script to set theme before React hydration
- Move localStorage check to <head>
- Resolves FOUC issue"

# Documentation
git commit -m "docs: add API endpoint documentation for story workflows

- Document POST /webhook/submit-story
- Document GET /webhook/get-stories
- Include request/response examples
- Add error handling notes"
```

### Fish Shell Aliases

Add to `~/.config/fish/config.fish`:

```fish
# GitHub CLI shortcuts
alias ghpr="gh pr create --fill"
alias ghmerge="gh pr merge --squash --delete-branch"
alias ghprs="gh pr status"
```

---

## Chat Templates System

### Daily Activation Trigger (START HERE EACH DAY)

**00-daily-activation-trigger.md** - Interactive morning ritual system

This is your primary entry point each day. When starting work:
- Say "Run my daily activation" or "DAP" to Claude in a fresh chat
- Claude asks 3 quick questions about your state (emoji, what's true, time available)
- Based on your responses, suggests one of 4 versions
- Guides you interactively to land on ONE tiny action
- Launches you into 20 minutes of focused work

**The 4 versions available:**
- **13a-version1-essential-three.md** (2-3 min) - Fast structure when scattered
- **13b-version2-flexible-six.md** (3-5 min) - Choose 3 questions that resonate
- **13c-version3-one-question.md** (30-60 sec) - Single unlock when stuck
- **13d-full-version.md** (5-10 min) - Deep reflection when you have time

**What you're learning:**
- Motivational interviewing techniques
- Cognitive science for task initiation
- Arousal regulation strategies
- Self-compassion in productivity
- Activist mindset principles
- Integrating wellbeing into workflow

**Use this system daily** to connect values to action and overcome starting friction.


### Other Templates & When to Use Each Template

**00-daily-activation-trigger.md (+ versions 13a-13d)**
- Every morning before starting work
- When you can't decide what to work on
- Feeling scattered or resistant to starting
- Need to connect to motivation
- Lost in planning mode
- Use in a fresh Claude chat, say "Run my daily activation"

**Specific versions:**
- 13a (Essential Three): Normal starting friction, 2-3 min available
- 13b (Flexible Six): Want autonomy, medium energy, 3-5 min
- 13c (One Question): Very stuck, anxious, or only 30 sec available
- 13d (Full Version): Open to deep reflection, 5-10 min available

**01-figjam-coaching.md**
- Reviewing technical concepts visually
- Mapping architecture or data flow
- Building mental models
- Active recall practice
- Use at start of each milestone

**02-weekly-summary.md**
- End of week reflections
- Progress tracking
- Planning next week
- Celebrating wins, acknowledging challenges

**03-vps-setup.md**
- Server provisioning help
- Security configuration
- SSH troubleshooting
- Linux commands
- Milestone 2 primary template

**04-frontend-help.md**
- React component questions
- Next.js patterns
- TypeScript issues
- Tailwind styling
- Milestone 4 & 5 primary template

**05-backend-help.md**
- n8n workflow help
- PostgreSQL questions
- Database schema design
- API endpoint logic
- Milestone 2 & 3 primary template

**06-stakeholder-plan.md**
- Preparing presentations
- Communicating with mentors
- Portfolio explanations
- Interview prep
- Use before major sharing

**07-strategic-prompting.md**
- Improving Claude Code usage
- Better AI assistance
- Context management
- Learning to prompt effectively
- Use throughout, especially Milestone 4

**08-empathetic-leadership.md**
- Navigating feedback
- Communication challenges
- Asking for help
- Managing expectations
- Use as needed for people issues

**09-problem-visualisation.md**
- Understanding complex concepts
- Building mental models
- Seeing system architecture
- Data flow confusion
- Use when stuck conceptually

**10-challenging-assumptions.md**
- Debugging your thinking
- Stuck and don't know why
- Questioning your approach
- Finding blind spots
- After each milestone review

**11-wellbeing-checkin.md**
- Feeling overwhelmed
- Burnout signs
- Need to adjust pace
- Permission to rest
- Use proactively, not just when struggling

**12-confident-humility.md**
- Imposter syndrome
- Sharing work anxiety
- Balancing confidence and openness
- Growth mindset
- After each milestone review

### Milestone Completion Review Process

**After completing each milestone:**

1. **Update Linear:**
   - Move all tickets to Done
   - Fill in learning notes
   - Record actual time vs estimated

2. **Update docs/progress.md:**
   ```markdown
   ## Milestone 2: Infrastructure (Complete)
   
   **Completed:** [date]
   **Estimated effort:** 6-8 hours
   **Actual effort:** 7.5 hours
   **Tickets closed:** GOO-9, GOO-10, GOO-11
   
   ### What I Built
   - VPS running and secured
   - n8n accessible with SSL
   - PostgreSQL configured
   
   ### What I Learned
   - SSH key authentication process
   - Nginx reverse proxy configuration
   - Linux user permissions
   
   ### Challenges
   - UFW firewall blocked n8n initially
   - SSL certificate renewal setup
   
   ### Resources Used
   - DigitalOcean tutorials
   - n8n documentation
   - Chat template: 03-vps-setup.md
   
   **Progress:** 2/6 milestones (33%)
   ```

3. **Review with templates:**
   - Open fresh chat with template 10 (challenging-assumptions.md)
   - Reflect on what worked, what didn't
   - Open fresh chat with template 11 (wellbeing-checkin.md)
   - Check energy levels, sustainable pace
   - Open fresh chat with template 12 (confident-humility.md)
   - Reflect on growth, celebrate learning

4. **LinkedIn Newsletter:**
   - Write update about milestone completion
   - Share key learnings
   - Be honest about challenges
   - Include visual if possible (screenshot, diagram)

5. **Rest before next milestone:**
   - Minimum 1 day break
   - Physical movement
   - Let learning consolidate

---

## Session Guidelines (Wellbeing Boundaries)

### Before Starting a Session

- **Run your daily activation** (see template 00-daily-activation-trigger.md)
  - Opens a fresh Claude chat
  - Say "Run my daily activation" or "DAP"
  - Follow the interactive prompts
  - Land on ONE tiny action for the next 20 minutes
- Or if you already know what you're working on:
  - Choose which milestone/ticket
  - Set a 2-3 hour timer
  - Clear workspace, hydrate, have snacks ready
  - Check energy level (if low, use daily activation first)

### During the Session

- Work focused on current ticket
- Take 5-10 min break every hour (walk, stretch, water)
- If stuck for 30+ min, use chat templates for help
- Track time in Linear as you go
- Commit frequently (small commits = easier to review)

### After the Session

- Update Linear with learning notes
- Commit and push all work
- Record actual time spent
- **Stop even if "almost done"** (honour the 2-3 hour boundary)
- Small task to finish? Max 30 min over, then stop
- Rest before next session

### Between Sessions

- Minimum 1-2 hour break
- Ideally next session on different day
- Physical movement (walk, exercise)
- Hydration and proper meals
- Let learning consolidate through rest

### When to Stop Immediately

- Frustration rising (>30 min stuck = use chat template)
- Energy crashing (rest, don't push through)
- Making silly mistakes (sign of cognitive fatigue)
- Losing track of time (timer helps prevent this)
- Physical discomfort (headache, eye strain, tension)

**Remember:** Sustainable pace beats rushed completion. You're building a learning system, not just a product.

---

## Progress Tracking

### Linear Milestones

Create 6 milestones in Linear:
1. Foundation
2. Infrastructure
3. Visual Backend
4. Frontend Components
5. Integration
6. Launch

Assign tickets to corresponding milestones. Linear will show progress automatically.

### docs/progress.md

Track weekly progress:

```markdown
# Goodsomeday Progress Tracking

## Week 1: Foundation & Infrastructure

**Milestones targeted:** 1-2  
**Milestones completed:** 1/2  
**Sessions:** 5  
**Total effort:** 11 hours  
**Progress:** 17%

### Completed
- [x] Milestone 1: Foundation (5.5 hours)
- [ ] Milestone 2: Infrastructure (in progress)

### This Week's Learnings
- Professional Git workflow
- Linear + GitHub integration
- Template-based communication
- VPS security basics (in progress)

### Challenges
- Fish shell syntax confusion (resolved)
- Git commit amend issues (learned)
- UFW firewall blocking n8n (troubleshooting)

### Next Week Plan
- Complete Milestone 2
- Start Milestone 3
- First n8n workflows

---

## Week 2: [dates]

...
```

### Social Sharing Schedule

**After Milestone 1 (Foundation):**
- Optional: Brief "starting the journey" post

**After Milestone 2 (Infrastructure):**
- LinkedIn newsletter: "Visual learner's approach to backend"
- Share VPS setup experience

**After Milestone 3 (Visual Backend):**
- LinkedIn post: "Building APIs without coding APIs"
- n8n workflow screenshots

**After Milestone 4 (Frontend):**
- LinkedIn post: "Claude Code + Figma = frontend speed"
- Component demos

**After Milestone 5 (Integration):**
- Optional: "Halfway reflection" post

**After Milestone 6 (Launch):**
- LinkedIn newsletter: Complete journey reflection
- Substack article: "Learning just enough backend to never do it manually"
- Product Hunt launch (optional)

---

## Project Structure

```
goodsomeday/
├── README.md
├── docs/
│   ├── foundation.md (this document)
│   ├── progress.md (weekly tracking)
│   ├── ARCHITECTURE.md (created in GOO-24)
│   ├── SETUP.md (created in GOO-24)
│   ├── CONTRIBUTING.md (created in GOO-24)
│   ├── LEARNING.md (created in GOO-24)
│   ├── api/
│   │   └── README.md (created in GOO-15)
│   ├── learning-journey/
│   │   ├── template.md (created in GOO-24)
│   │   ├── index.md (created in GOO-24)
│   │   └── 01-theme-system.md (example)
│   └── learning-resources/
│       ├── chat-selection-guide.md
│       └── chat-templates/
│           ├── 00-daily-activation-trigger.md        ⭐ START HERE
│           ├── 13a-version1-essential-three.md       ⭐ Daily activation
│           ├── 13b-version2-flexible-six.md          ⭐ Daily activation
│           ├── 13c-version3-one-question.md          ⭐ Daily activation
│           ├── 13d-full-version.md                   ⭐ Daily activation
│           ├── 01-figjam-coaching.md
│           ├── 02-weekly-summary.md
│           ├── 03-vps-setup.md
│           ├── 04-frontend-help.md
│           ├── 05-backend-help.md
│           ├── 06-stakeholder-plan.md
│           ├── 07-strategic-prompting.md
│           ├── 08-empathetic-leadership.md
│           ├── 09-problem-visualisation.md
│           ├── 10-challenging-assumptions.md
│           ├── 11-wellbeing-checkin.md
│           └── 12-confident-humility.md
│           ├── 01-figjam-coaching.md
│           ├── 02-weekly-summary.md
│           ├── 03-vps-setup.md
│           ├── 04-frontend-help.md
│           ├── 05-backend-help.md
│           ├── 06-stakeholder-plan.md
│           ├── 07-strategic-prompting.md
│           ├── 08-empathetic-leadership.md
│           ├── 09-problem-visualisation.md
│           ├── 10-challenging-assumptions.md
│           ├── 11-wellbeing-checkin.md
│           └── 12-confident-humility.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── admin/
│   │   └── changelog/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── SkeletonCard.tsx
│   │   │   └── ThemeToggle.tsx
│   │   └── features/
│   │       ├── StoryCard.tsx
│   │       ├── SubmitStoryForm.tsx
│   │       ├── StoryFeed.tsx
│   │       ├── StoryFilter.tsx
│   │       └── ChangelogEntry.tsx
│   ├── lib/
│   │   ├── api.ts
│   │   └── github.ts
│   ├── hooks/
│   │   ├── useSubmitStory.ts
│   │   ├── useStories.ts
│   │   └── useAdmin.ts
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   └── types/
│       ├── theme.ts
│       ├── story.ts
│       └── api.ts
├── public/
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## Key Mantras

**Learning Focus:**
- "Tools adapt to humans, not the other way around"
- "Learning just enough backend to never do it manually again"
- "Visual workflows, AI assistance, focus on strengths"
- "The real goal is design systems, not database optimisation"

**Wellbeing:**
- "Sustainable pace beats rushed completion"
- "2-3 hours max, then stop"
- "Rest is productive"
- "Stuck for 30 min? Use a chat template"

**Building in Public:**
- "Document the journey, not just the destination"
- "Failures are data, share them"
- "Authentic over polished"
- "Help others learn by showing your process"

**Professional Practice:**
- "Feature branch → PR → review → merge"
- "Commit messages explain why, not just what"
- "Self-review catches bugs before others see them"
- "Documentation now = clarity later"

---

## Success Indicators

You're on track if:

- Completing milestones, not rushing through them
- Learning notes filled in for each ticket
- Using chat templates when stuck
- Taking breaks between sessions
- Celebrating completions (even small ones)
- Sharing progress authentically
- Feeling energised, not drained
- Understanding concepts, not just copying code

You need to adjust if:

- Skipping milestones or tickets
- Working 4+ hour sessions regularly
- Feeling burnt out or overwhelmed
- Avoiding asking for help
- Comparing unfavourably to others
- Losing sight of why you started
- Perfectionism blocking progress

**When in doubt:** Open a chat with template 11 (wellbeing-checkin.md)

---

## Starting Fresh (When You Return)

### Next Session Checklist

1. **Review where you left off:**
   - Check Linear for current milestone
   - Review `docs/progress.md`
   - Identify next ticket

2. **Set up for success:**
   - Clear workspace
   - Hydrate, snacks ready
   - Set 2-3 hour timer
   - Close distractions

3. **Start with context:**
   - Open relevant chat template
   - Paste this foundation.md context if needed
   - Begin working on ticket

4. **Use the workflow:**
   - Move ticket to "In Progress" in Linear
   - Checkout auto-created branch
   - Work → Commit → Push → PR → Merge

5. **End session properly:**
   - Update Linear notes
   - Commit and push
   - Record time
   - Stop on time

---

## Current Status

**Milestones completed:** 1/6 (17%)  
**Tickets closed:** 0/20  
**Next milestone:** Infrastructure  
**Next ticket:** GOO-9 (Provision and secure VPS)  
**Chat template to use:** 03-vps-setup.md  

**Foundation work complete:**
- Linear configured with milestones
- 20 tickets created and assigned
- GitHub repository ready
- Chat templates system built
- Progress tracking structure established
- Professional workflow understood

**Ready to build.**

---

*Document last updated: After Milestone 1*  
*Australian English | Visual-First Approach | AI-Assisted Development | Building in Public*