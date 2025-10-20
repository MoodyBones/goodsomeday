# Goodsomeday System Architecture

**Project:** Goodsomeday - Career transformation story platform
**Last Updated:** 19 October 2025
**Status:** MVP Development (Pre-launch)

---

## Overview

Goodsomeday is a full-stack web application built with a visual-first, AI-assisted development approach. The platform enables users to share structured transformation stories about barriers they faced in tech careers and the actions they took to create change.

**Core Philosophy:** Use modern tools that match how the developer thinks, rather than forcing traditional backend development patterns.

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                          USERS                               │
│                      (Web Browsers)                          │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   FRONTEND (Vercel)                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │           Next.js 14 (App Router)                     │  │
│  │  • React components (TypeScript)                      │  │
│  │  • Tailwind CSS styling                               │  │
│  │  • Client-side routing                                │  │
│  │  • Theme system (light/dark)                          │  │
│  └───────────────────────────────────────────────────────┘  │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS API Calls
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  BACKEND (VPS)                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                   Nginx (Reverse Proxy)               │  │
│  │  • SSL/TLS (Let's Encrypt)                            │  │
│  │  • Routes n8n.goodsomeday.com → localhost:5678       │  │
│  └────────────────────┬──────────────────────────────────┘  │
│                       │                                      │
│  ┌────────────────────▼──────────────────────────────────┐  │
│  │               n8n (Workflow Engine)                   │  │
│  │  • Visual workflow automation                         │  │
│  │  • Webhook endpoints                                  │  │
│  │  • Business logic (drag-and-drop)                     │  │
│  │  • Data validation                                    │  │
│  │  • Process management (PM2)                           │  │
│  └────────────────────┬──────────────────────────────────┘  │
│                       │ PostgreSQL queries                   │
│  ┌────────────────────▼──────────────────────────────────┐  │
│  │            PostgreSQL 16 (Database)                   │  │
│  │  • stories table                                      │  │
│  │  • learning_journal table                             │  │
│  │  • Automated backups (pg_dump)                        │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  Infrastructure: Hostinger VPS (Ubuntu 22.04)               │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Details

### Frontend Layer

**Technology:** Next.js 14 with App Router
**Hosting:** Vercel (auto-deploy from main branch)
**Deployment URL:** https://goodsomeday.vercel.app

**Key Components:**

1. **Story Submission Flow**
   - Multi-step form with guided prompts
   - Transformation narrative structure (barrier → reflection → action → transformation)
   - Client-side validation before API submission
   - "Where are you today?" reflection prompt at end

2. **Story Feed**
   - Display approved stories
   - Filter by pipeline stage (student/early_career/mid_career)
   - Accessible card-based layout
   - Light/dark theme support

3. **Admin Panel** (Future)
   - Moderation queue for pending stories
   - Approve/reject workflow
   - Spam detection tools

**State Management:**
- React Context for theme (ThemeProvider)
- Local state for forms
- No global state library (keeping it simple for MVP)

**Styling:**
- Tailwind CSS utility classes
- Custom design system (accessible colors, typography)
- Responsive design (mobile-first)

---

### Backend Layer

**Technology:** n8n (visual workflow automation)
**Hosting:** Self-hosted on Hostinger VPS
**Access URL:** https://n8n.goodsomeday.com

**Why n8n?**
- Visual learner-friendly (drag-and-drop logic)
- No need to hand-code Express.js APIs
- Built-in database nodes (no manual SQL)
- Easy to modify workflows without deployments
- Self-hosted = full control

**n8n Workflows (Webhooks):**

1. **submit-story**
   - Validates story_text length (100-5000 chars)
   - Validates pipeline_stage enum
   - Validates current_status enum (optional)
   - Captures IP address
   - Inserts into `stories` table with approved=false
   - Returns success/error response

2. **get-stories**
   - Queries approved stories
   - Filters by pipeline_stage (optional)
   - Pagination (limit/offset)
   - Orders by submitted_at DESC
   - Returns JSON array

3. **admin/pending-stories** (Future)
   - Queries stories WHERE approved=false
   - Returns moderation queue

4. **admin/moderate-story** (Future)
   - Updates approved status
   - Sets moderated_at timestamp

5. **learning-journal** (Internal)
   - Records learning from Linear tickets
   - Inserts into learning_journal table

**Process Management:**
- PM2 keeps n8n running
- Systemd service (pm2-mel.service)
- Auto-restart on crashes
- Logs in ~/.pm2/logs/

---

### Reverse Proxy Layer

**Technology:** Nginx
**Purpose:** Route HTTPS traffic to n8n

**Configuration:**
```nginx
server {
    listen 443 ssl;
    server_name n8n.goodsomeday.com;

    ssl_certificate /etc/letsencrypt/live/n8n.goodsomeday.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/n8n.goodsomeday.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5678;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

**SSL/TLS:**
- Let's Encrypt certificates (free)
- Auto-renewal via Certbot
- HTTPS enforced (HTTP redirects to HTTPS)

---

### Database Layer

**Technology:** PostgreSQL 16
**Hosting:** Co-located on VPS (localhost connection)

**Database:** `goodsomeday_prod`
**User:** `goodsomeday_user` (restricted permissions)

**Tables:**

1. **stories**
   ```sql
   - id (SERIAL PRIMARY KEY)
   - story_text (TEXT, 100-5000 chars)
   - pipeline_stage (VARCHAR: student/early_career/mid_career)
   - current_status (VARCHAR: stayed_in_tech/left_tech/still_navigating, nullable)
   - submitted_at (TIMESTAMP WITH TIME ZONE)
   - approved (BOOLEAN, default FALSE)
   - ip_address (INET)
   - moderated_at (TIMESTAMP WITH TIME ZONE)
   - created_at, updated_at (auto-managed)
   ```

2. **learning_journal**
   ```sql
   - id (SERIAL PRIMARY KEY)
   - issue_id (VARCHAR, UNIQUE, e.g., "GOO-12")
   - title, what_built, what_learned, challenges, solutions, resources_used (TEXT)
   - time_estimated, time_actual (INTEGER, minutes)
   - difficulty_rating (INTEGER, 1-5)
   - completed_at, created_at, updated_at (TIMESTAMP)
   ```

**Indexes:**
- `idx_stories_approved` (partial, WHERE approved=TRUE)
- `idx_stories_pipeline_stage`
- `idx_stories_submitted_at` (DESC)

**Triggers:**
- Auto-update `updated_at` on row changes

**Backups:**
- Manual pg_dump (documented in BACKUP-STRATEGY.md)
- Future: Automated daily backups via cron

---

### Infrastructure Layer

**Provider:** Hostinger
**Server:** Ubuntu 22.04 LTS VPS
**Access:** SSH key authentication (password auth disabled)

**Security Measures:**
1. Non-root user (mel) with sudo privileges
2. SSH key-only authentication
3. UFW firewall (ports 22, 80, 443 only)
4. Regular security updates
5. Principle of least privilege (database user permissions)

**Services Running:**
- Nginx (reverse proxy)
- n8n (via PM2)
- PostgreSQL
- SSH (sshd)

---

## Data Flow

### Story Submission Flow

```
1. User fills out story form (Frontend)
   ↓
2. Client validates input (character count, required fields)
   ↓
3. POST request to https://n8n.goodsomeday.com/webhook/submit-story
   ↓
4. Nginx forwards to n8n on localhost:5678
   ↓
5. n8n workflow validates data
   ↓
6. n8n inserts into PostgreSQL stories table (approved=FALSE)
   ↓
7. n8n returns {success: true, id: 42}
   ↓
8. Frontend shows confirmation message
```

### Story Retrieval Flow

```
1. User visits story feed (Frontend)
   ↓
2. GET request to https://n8n.goodsomeday.com/webhook/get-stories?pipeline_stage=student
   ↓
3. n8n workflow queries PostgreSQL WHERE approved=TRUE
   ↓
4. n8n returns JSON array of stories
   ↓
5. Frontend renders story cards
```

---

## Development Workflow

### Git Workflow

```
1. Create feature branch from main
   git checkout -b goo-XX-feature-name

2. Make changes, commit locally
   git add .
   git commit -m "feat: description"

3. Push branch
   git push -u origin goo-XX-feature-name

4. Create PR on GitHub

5. Self-review, check diff

6. Merge to main

7. Auto-deploy to Vercel (frontend)
   Manual deploy for backend (n8n workflows)
```

### Linear Integration

- Each feature = Linear ticket (GOO-XX)
- Tickets document acceptance criteria
- Learning journal entry created on completion
- Active recall questions for spaced repetition

### AI-Assisted Development

**Tools Used:**
1. **Claude Code** - Component generation, code review
2. **Claude API** - Automated release notes (future)
3. **Figma MCP** - Design-to-code (future goal)

**Philosophy:** Review AI output, don't blindly accept

---

## Deployment Strategy

### Frontend (Vercel)

**Automatic:**
- Push to main → Auto-deploy
- Preview deployments for PRs
- Environment variables in Vercel dashboard

**Environment Variables:**
```
NEXT_PUBLIC_API_URL=https://n8n.goodsomeday.com/webhook
```

### Backend (VPS)

**Manual Process:**
1. SSH into VPS: `ssh mel@your-vps-ip`
2. Access n8n UI: https://n8n.goodsomeday.com
3. Update workflows via visual editor
4. Test with curl or Postman
5. Workflows auto-save (no restart needed)

**Database Migrations:**
1. Write SQL in `docs/database/migrations/`
2. Test locally (optional)
3. SSH to VPS and run:
   ```bash
   sudo -u postgres psql goodsomeday_prod < migration.sql
   ```
4. Document in changelog

---

## Monitoring & Observability

**Current State (MVP):**
- PM2 logs for n8n: `pm2 logs n8n`
- PostgreSQL logs: `/var/log/postgresql/`
- Nginx logs: `/var/log/nginx/`
- Manual monitoring (no alerting yet)

**Future:**
- Error tracking (Sentry or similar)
- Uptime monitoring (UptimeRobot)
- Performance metrics (response times)
- Database query analysis

---

## Security Architecture

### Current Measures

1. **HTTPS Everywhere**
   - Let's Encrypt SSL certificates
   - HTTP → HTTPS redirect

2. **Firewall (UFW)**
   - Default deny incoming
   - Allow: 22 (SSH), 80 (HTTP), 443 (HTTPS)

3. **SSH Hardening**
   - Key-based authentication only
   - Root login disabled
   - Password authentication disabled

4. **Database Security**
   - Separate user (goodsomeday_user) with limited permissions
   - No remote connections (localhost only)
   - Input validation via n8n (SQL injection protection)

5. **Application Security**
   - IP address logging for spam detection
   - Story moderation queue
   - Input validation (character limits, enum constraints)

### Future Security Enhancements

- [ ] Admin authentication (JWT tokens)
- [ ] Rate limiting (3 stories per IP per day)
- [ ] CORS configuration (restrict to frontend domain)
- [ ] Automated spam detection (ML or rule-based)
- [ ] Security headers (CSP, X-Frame-Options, etc.)

---

## Scalability Considerations

**Current Capacity:** Small-scale MVP (hundreds of stories)

**Bottlenecks:**
1. Single VPS (no horizontal scaling)
2. PostgreSQL on same server as n8n
3. No caching layer

**Future Scaling Path:**

**Phase 1: Vertical Scaling**
- Upgrade VPS resources (more CPU/RAM)
- Add PostgreSQL connection pooling

**Phase 2: Caching**
- Redis for approved stories (reduce DB load)
- CDN for static assets

**Phase 3: Horizontal Scaling**
- Separate database server
- Load balancer + multiple n8n instances
- Read replicas for PostgreSQL

**Note:** For MVP, single VPS is sufficient. Scale when usage demands it.

---

## Technology Choices Rationale

### Why Next.js?
- Modern React framework with great DX
- App Router for better performance
- Vercel deployment (zero config)
- Strong TypeScript support

### Why n8n?
- **Visual-first approach** matches developer's learning style
- No need to hand-code Express.js boilerplate
- Self-hosted = full control and no vendor lock-in
- Easy to modify workflows without code changes

### Why PostgreSQL?
- Robust, mature, open-source
- Strong data integrity (constraints, triggers)
- n8n has excellent PostgreSQL integration
- Skills transferable to other projects

### Why Vercel?
- Best Next.js deployment experience
- Auto-preview deployments
- Free tier suitable for MVP
- Global CDN

### Why Hostinger?
- Affordable VPS pricing
- Good performance
- Simple management interface
- Cost-effective for self-hosting

---

## Known Limitations (MVP)

1. **No authentication** - Admin endpoints unprotected (future: JWT)
2. **No rate limiting** - Vulnerable to spam (future: IP-based limits)
3. **Manual backups** - No automated backup strategy yet
4. **Single point of failure** - One VPS for everything
5. **No search** - Stories not searchable by keywords (future: full-text search)
6. **No analytics** - Can't track story impact or user engagement

**Philosophy:** Ship MVP, iterate based on real usage.

---

## Related Documentation

- [API Documentation](api/README.md) - n8n webhook endpoints
- [Schema Design Philosophy](Schema-Design-Philosophy.md) - Product vision and data model
- [Database Schema](database/schema.sql) - PostgreSQL table definitions
- [SETUP.md](SETUP.md) - VPS deployment guide
- [BACKUP-STRATEGY.md](BACKUP-STRATEGY.md) - Database backup procedures
- [Learning Resources](learning-resources/foundation.md) - Project overview and tickets

---

**Last Updated:** 19 October 2025
**Next Review:** After MVP launch
