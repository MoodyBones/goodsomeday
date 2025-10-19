# Changelog

All notable changes to the Goodsomeday project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### In Progress
- GOO-12: Database schema design for stories and learning journal

### Planned
- GOO-13: Build n8n workflow for story submission
- GOO-14: Build n8n workflow for story retrieval
- GOO-15: Create story submission form (frontend)
- GOO-16: Create story feed display (frontend)
- GOO-17: Admin moderation panel
- GOO-18: Deploy MVP to production

---

## [0.3.0] - 2025-10-19

### Added - Infrastructure Complete
- **GOO-9:** VPS provisioning and security hardening
  - Hostinger VPS setup (Ubuntu 22.04)
  - Non-root user with sudo privileges
  - SSH key authentication (password auth disabled)
  - UFW firewall configuration (ports 22, 80, 443)
  - Defense-in-depth security approach

- **GOO-10:** n8n installation and configuration
  - Node.js 20.x installation
  - n8n global installation
  - Nginx reverse proxy configuration
  - SSL/TLS certificates (Let's Encrypt)
  - PM2 process manager for n8n
  - DNS configuration (n8n.goodsomeday.com)

- **GOO-11:** PostgreSQL database setup
  - PostgreSQL 16 installation
  - goodsomeday_prod database creation
  - goodsomeday_user with restricted permissions
  - n8n database credential configuration
  - Backup strategy documentation

### Documentation
- `docs/BACKUP-STRATEGY.md` - Database backup procedures
- `docs/updates/update-004-goo-10.md` - n8n setup reflection
- `docs/updates/update-005-goo-11.md` - PostgreSQL setup reflection
- `docs/learning-resources/questions/GOO-9-vps-security.md` - Active recall questions
- `docs/learning-resources/questions/GOO-10-n8n-setup.md` - Active recall questions
- `docs/learning-resources/questions/GOO-11-postgresql-setup.md` - Active recall questions

### Infrastructure
- VPS: Hostinger Ubuntu 22.04
- Backend: n8n (workflow automation)
- Database: PostgreSQL 16
- Reverse Proxy: Nginx with SSL
- Process Manager: PM2

---

## [0.2.0] - 2025-10-17

### Added - Project Foundation
- **GOO-6:** Project initialization
  - Next.js 14 setup with TypeScript
  - Tailwind CSS configuration
  - Basic project structure
  - Git repository initialization

- **GOO-7:** Core documentation
  - README.md with project overview
  - Learning resources structure
  - Foundation.md with all 20 tickets defined
  - Chat templates for AI assistance

- **GOO-8:** Development workflow setup
  - Git branching strategy
  - Linear integration
  - Learning journal template
  - Active recall question format

### Documentation
- `docs/learning-resources/foundation.md` - Complete project plan
- `docs/learning-resources/chat-templates/` - AI assistance templates
- `docs/learning-resources/chat-selection-guide.md` - When to use which template
- `README.md` - Project overview and philosophy

---

## [0.1.0] - 2025-10-10

### Added - Initial Concept
- Project conception: Career transformation story platform
- Inspired by Australia's Leaky Pipeline Report
- Core vision: Reframing tool, not just story platform
- Transformation narrative arc defined: barrier → reflection → action → growth
- Visual-first, AI-assisted development approach chosen

### Philosophy
- Stories must demonstrate agency, not just trauma
- Both "stayed in tech" and "left tech" are valid outcomes
- Action is required element of every story
- Guided freeform storytelling (not rigid forms)

---

## Version History Summary

- **v0.3.0** - Infrastructure complete (VPS, n8n, PostgreSQL)
- **v0.2.0** - Project foundation and documentation
- **v0.1.0** - Initial concept and vision

---

## Learning Journey

Each major ticket includes:
- **Update** - Personal reflection on what was learned
- **Active Recall Questions** - For spaced repetition learning
- **LinkedIn Post** - Public-facing learning share (some tickets)

See `docs/updates/` and `docs/learning-resources/questions/` for detailed learning documentation.

---

## Upcoming Milestones

### Milestone 2: Backend Workflows (In Progress)
- [ ] GOO-12: Database schema design
- [ ] GOO-13: Story submission workflow
- [ ] GOO-14: Story retrieval workflow
- [ ] GOO-15: Admin moderation workflow

### Milestone 3: Frontend UI
- [ ] GOO-16: Story submission form
- [ ] GOO-17: Story feed display
- [ ] GOO-18: Theme system implementation
- [ ] GOO-19: Accessibility audit

### Milestone 4: MVP Launch
- [ ] GOO-20: End-to-end testing
- [ ] GOO-21: Production deployment
- [ ] GOO-22: Monitoring setup
- [ ] GOO-23: Public launch

---

## Breaking Changes

None yet (pre-release)

---

## Migration Notes

### v0.3.0 → v0.4.0 (Upcoming)
- Database schema will be finalized (GOO-12)
- Breaking change: Story structure may change based on final schema design
- Migration script will be provided if needed

---

## Contributors

**Mel Jones** ([@MoodyBones](https://github.com/MoodyBones))
- Visual learner • Frontend developer • Accessibility advocate
- Building in public with visual-first, AI-assisted approach

---

## Acknowledgments

- **Australia's Leaky Pipeline Report** - Inspiration for the project
- **n8n Community** - Visual workflow automation inspiration
- **Anthropic (Claude Code)** - AI-assisted development tools
- **Josh Comeau** - Dark mode implementation patterns
- **Linear** - Project management with learning documentation

---

**Last Updated:** 19 October 2025
**Current Version:** 0.3.0 (Infrastructure Complete)
**Next Version:** 0.4.0 (Database Schema Complete - In Progress)
