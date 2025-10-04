# Goodsomeday

A platform for sharing career journey stories - built while learning full-stack development from scratch.

> **📚 This is a learning project.** I'm documenting my journey from frontend developer to full-stack, building real infrastructure and automation along the way.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://goodsomeday.vercel.app) 
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🎯 What is Goodsomeday?

Goodsomeday is a platform where people can share their career journey stories - the challenges, pivots, and lessons learned at different stages of their professional path. Stories are categorized by "leaky pipeline" stages:

- **High School** - Early career decisions and first steps
- **University** - Academic and early professional experiences  
- **Mid-Career** - Transitions, growth, and pivots

The platform focuses on authentic stories that help others navigate similar journeys.

---

## 🚀 Tech Stack

**Frontend:**
- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Lucide React](https://lucide.dev/) - Icons

**Backend & Infrastructure:**
- [n8n](https://n8n.io/) - Workflow automation (self-hosted)
- [PostgreSQL](https://www.postgresql.org/) - Database
- [DigitalOcean](https://www.digitalocean.com/) - VPS hosting
- [Nginx](https://nginx.org/) - Reverse proxy

**Automation & Tools:**
- [Linear](https://linear.app/) - Project management
- [Figma](https://figma.com/) - Design system
- [Claude API](https://www.anthropic.com/) - Release notes generation
- [GitHub Actions](https://github.com/features/actions) - CI/CD

---

## 📖 Learning Journey

This project exists to document my learning journey from frontend development to full-stack infrastructure. Each feature includes detailed learning notes about what I built and what I learned building it.

**Skills I'm Learning:**
- Backend development (APIs, databases, servers)
- DevOps (VPS management, deployment, automation)
- Workflow automation (n8n)
- Database design (PostgreSQL)
- System architecture
- Release automation

**Tracking My Progress:**
- [Changelog](docs/CHANGELOG.md) - What's been built
- [Learning Journey](docs/learning-journey/) - What I learned building each feature
- [Architecture](docs/ARCHITECTURE.md) - How it all fits together

---

## ✨ Features

**Current (MVP):**
- ✅ Story submission with validation
- ✅ Story feed with filtering by pipeline stage
- ✅ Light/dark theme system
- ✅ Admin moderation panel
- ✅ Automated release notes

**Planned (v2.0+):**
- Comments on stories
- User authentication
- Story reactions/likes
- Search functionality
- Email notifications
- RSS feed

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

- **Josh Comeau** - Dark mode implementation patterns
- **n8n Community** - Workflow automation inspiration
- **Linear** - Amazing project management tool
- **The Dev Community** - For all the learning resources

---

## 📧 Contact

**Mel Jones** (MoodyBones)
- GitHub: [@MoodyBones](https://github.com/MoodyBones)
- Project Link: [https://github.com/MoodyBones/goodsomeday](https://github.com/MoodyBones/goodsomeday)

---

## 🌟 Learning in Public

I'm building this project in public and documenting everything I learn. If you're also learning full-stack development, feel free to:

- ⭐ Star this repo to follow along
- 📖 Read the [learning journey docs](docs/learning-journey/)
- 💬 Ask questions in Issues
- 🐦 Follow my progress on [Twitter/X](https://twitter.com/yourusername)

**Let's learn together!** 🚀

---

Built with ❤️ and lots of learning by [MoodyBones](https://github.com/MoodyBones)