# Goodsomeday

A platform for sharing career journey stories - built while learning **visual-first, AI-assisted full-stack development**.

> **📚 This is a learning project.** I'm a visual learner and frontend developer exploring modern tools (n8n, Claude Code, Figma MCP) that let me build complete products without losing my soul to traditional backend development.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://goodsomeday.vercel.app) 
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🎯 What is Goodsomeday?

Goodsomeday is a platform where people can share their career journey stories - the challenges, pivots, and lessons learned at different stages of their professional path.

**Inspired by:** Australia's recent [Leaky Pipeline Report](https://www.vic.gov.au/leaky-tech-pipeline-report) showing where we lose women in tech careers.

**Stories are categorized by stage:**
- **High School** - Early career decisions and first steps
- **University** - Academic and early professional experiences  
- **Mid-Career** - Transitions, growth, and pivots

The platform focuses on authentic stories that help others navigate similar journeys, with an emphasis on accessibility and inclusive design.

---

## 🚀 Tech Stack

**Frontend** *(My Comfort Zone)*
- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Lucide React](https://lucide.dev/) - Icons
- Focus: Beautiful, accessible interfaces for ALL users

**Backend** *(Visual & AI-Assisted)*
- [n8n](https://n8n.io/) - Visual workflow automation (no Express.js!)
- [PostgreSQL](https://www.postgresql.org/) - Database (accessed via n8n nodes)
- Visual drag-and-drop logic instead of hand-coded APIs

**Infrastructure**
- [DigitalOcean](https://www.digitalocean.com/) - VPS hosting
- [Nginx](https://nginx.org/) - Reverse proxy

**AI & Automation**
- [Claude Code](https://docs.anthropic.com/claude/docs/claude-code) - AI-assisted component generation
- [Claude API](https://www.anthropic.com/) - Automated release notes
- [Figma MCP](https://www.figma.com/) - Design-to-code integration (future goal)

**Tools & Workflow**
- [Linear](https://linear.app/) - Project management with learning documentation
- [Figma](https://figma.com/) - Design system and component library
- [GitHub](https://github.com/) - Version control with PR workflow

---

## 📖 Learning Journey

**This project exists to answer a question:** Can a visual learner who loves frontend development build complete products using modern AI and no-code tools - without becoming a traditional backend developer?

### The Approach

I'm not learning "full-stack" the traditional way. I'm learning **visual-first, AI-assisted full-stack**:

**What I'm Using:**
- 🎨 **n8n** for backend logic (drag-and-drop workflows, not Express.js)
- 🤖 **Claude Code** for component generation (review, don't write from scratch)
- 📐 **Figma MCP** for design-to-code (the real end goal)

**What I'm NOT Doing:**
- ❌ Hand-coding CRUD APIs
- ❌ Writing raw SQL queries
- ❌ Becoming a database optimization expert
- ❌ Spending months on traditional backend learning

**What I AM Doing:**
- ✅ Using visual tools that match how I think
- ✅ Letting AI handle boilerplate I don't want to write
- ✅ Focusing on beautiful, accessible frontends
- ✅ Building toward design system automation
- ✅ Shipping a product that helps people

### Why This Matters

**I care about:**
- Beautiful, accessible interfaces
- Equality and fair work in tech  
- Design systems and collaboration
- Making technology approachable for everyone

**I don't care about:**
- Writing server boilerplate manually
- SQL optimization minutiae
- Pretending to love what I don't

The future isn't "everyone becomes a traditional full-stack developer." It's "use modern tools to build on your unique strengths."

### Skills I'm Developing

**Technical:**
- Visual workflow design (n8n)
- AI-assisted development (Claude Code)
- Backend concepts (without drowning in syntax)
- Design-to-code integration (Figma MCP)
- Infrastructure basics (just enough to be dangerous)

**Professional:**
- Building in public
- Systematic learning documentation
- Git workflow best practices
- Strategic tool selection
- Learning efficiency over mastery

**Track My Progress:**
- [Changelog](docs/CHANGELOG.md) - What's been built
- [Learning Journey](docs/learning-journey/) - What I learned building each feature
- [Architecture](docs/ARCHITECTURE.md) - How it all fits together

---

## ✨ Features

**Current (MVP):**
- ✅ Story submission with visual validation (n8n workflow)
- ✅ Story feed with filtering by pipeline stage
- ✅ Light/dark theme system (accessible color contrast)
- ✅ Admin moderation panel
- ✅ Automated release notes (Claude API)

**In Progress:**
- 🔄 Visual backend workflows (replacing traditional API code)
- 🔄 AI-generated components (Claude Code + Figma specs)
- 🔄 Accessibility-first design system

**Planned (v2.0+):**
- 📋 Figma MCP integration (design → code automation)
- 📋 Design system documentation generator
- 📋 Comments on stories
- 📋 User authentication
- 📋 Story reactions/likes
- 📋 Search functionality

---

## 🛠️ Project Setup

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- VPS with Ubuntu 22.04 (for backend)
- PostgreSQL 14+
- Domain name (optional, for SSL)

### Local Development

```bash
# Clone the repository
git clone https://github.com/MoodyBones/goodsomeday.git
cd goodsomeday

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-n8n-instance.com/webhook
```

For detailed setup instructions including VPS, database, and n8n configuration, see [docs/SETUP.md](docs/SETUP.md).

---

## 📁 Project Structure

```
goodsomeday/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── page.tsx        # Home page
│   │   ├── admin/          # Admin routes
│   │   └── changelog/      # Changelog page
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   └── features/       # Feature-specific components
│   ├── contexts/           # React contexts (theme, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and API client
│   └── types/              # TypeScript type definitions
├── docs/
│   ├── api/                # API documentation
│   ├── learning-journey/   # Learning documentation
│   └── ARCHITECTURE.md     # System architecture
└── public/                 # Static assets
```

---

## 🔗 API Documentation

The backend is built with n8n workflows hosted on a VPS. Main endpoints:

- `POST /webhook/submit-story` - Submit a new story
- `GET /webhook/get-stories` - Retrieve approved stories
- `POST /webhook/learning-journal` - Record learning data (internal)

Full API documentation: [docs/api/README.md](docs/api/README.md)

---

## 🚢 Deployment

**Frontend:** Deployed on [Vercel](https://vercel.com/)  
**Backend:** Self-hosted on DigitalOcean VPS

See [docs/SETUP.md](docs/SETUP.md) for complete deployment instructions.

---

## 🤝 Contributing

This is primarily a learning project, but feedback and suggestions are welcome!

1. Check existing issues or create a new one
2. Fork the repository
3. Create a feature branch (`git checkout -b feature/amazing-feature`)
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for more details.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Australia's Leaky Pipeline Report** - The inspiration for this project
- **Josh Comeau** - Dark mode implementation patterns
- **n8n Community** - Visual workflow automation inspiration
- **Anthropic** - Claude Code and API for AI-assisted development
- **Linear** - Amazing project management tool
- **The Visual Learning Community** - For showing there are many paths to building

---

## 📧 Contact

**Mel Jones** (MoodyBones)  
Visual learner • Frontend developer • Accessibility advocate

- GitHub: [@MoodyBones](https://github.com/MoodyBones)
- Project: [goodsomeday](https://github.com/MoodyBones/goodsomeday)
- LinkedIn: [Connect with me](#)
- Twitter: [@yourusername](#)

---

## 🌟 Building a Different Way

I'm building this project in public and documenting a non-traditional path to full-stack development.

**If you're:**
- A visual learner
- Frontend-focused but need backend capabilities
- Interested in AI-assisted development
- Exploring n8n or Figma MCP
- Building on your unique strengths

**Follow along!**

- ⭐ Star this repo to follow the journey
- 📖 Read the [learning docs](docs/learning-journey/)
- 💬 Ask questions in Issues
- 🐦 Follow updates on [Twitter/LinkedIn]

**Let's build the future where tools adapt to humans, not the other way around.** 🚀

---

Built with ❤️, visual thinking, and AI assistance by [MoodyBones](https://github.com/MoodyBones)