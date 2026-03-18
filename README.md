<div align="center">

  # ✦ Girik Sain — Portfolio

  **A Modern, Minimal, Premium Creative Portfolio**

  [![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-gray?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  [![CSS](https://img.shields.io/badge/Vanilla_CSS-Custom-38B2AC?style=for-the-badge&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)

  <p align="center">
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Quick Start</a> •
    <a href="#project-structure">Structure</a> •
    <a href="#credits">Credits</a>
  </p>
</div>

---

## ✨ About

A premium, dark-themed creative portfolio website for **Girik Sain** — a multidisciplinary creative specializing in video editing, motion design, graphic design, and responsive website & web application development.

Built with a minimal, futuristic, and interactive design language inspired by modern developer portfolios. The site showcases Girik's work across graphic design, video editing, and web development through an immersive browsing experience.

---

## 🚀 Features

- **Immersive Hero Section** — Bold typography with animated particle background, gradient orbs, and smooth scroll indicator
- **Interactive Skills Grid** — Categorized skill cards (Graphic Design, Video Editing, Web Development) with hover animations and glow effects
- **Portfolio Gallery** — Three dedicated project pages with real project images:
  - **Graphic Design** — Thumbnails, Poster Design, Infographics, Branding (filterable tabs + image modal)
  - **Video Editing** — Video cards with hover play previews and modal player
  - **Web Development** — Project cards with tech stack details and live links
- **Connect Protocol** — Futuristic contact section with social links and a sleek contact form
- **Smooth Micro-Animations** — Framer Motion powered fade-ins, hover effects, and scroll-based reveals
- **Fully Responsive** — Optimized for Desktop, Tablet, and Mobile
- **Dark Theme** — Premium black background with neon green (#00ffa3) accent highlights
- **Canvas Particle Background** — Animated interconnected particles on the hero section

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Styling** | Vanilla CSS with CSS Custom Properties |
| **Animations** | Framer Motion |
| **Typography** | Inter, Space Grotesk (Google Fonts) |
| **Images** | Next.js Image (optimized, local + Google Drive) |
| **Deployment** | Netlify / Vercel |

---

## 📂 Project Structure

```
girik-port/
├── public/
│   └── projects/          # Project images
│       ├── thumbnails/    # YouTube thumbnail designs
│       ├── posters/       # Poster design artworks
│       ├── infographics/  # Infographic designs
│       └── branding/      # Brand identity & collateral
├── src/
│   ├── app/
│   │   ├── globals.css    # Complete design system & styles
│   │   ├── layout.js      # Root layout with SEO metadata
│   │   ├── page.js        # Homepage (Hero + About + Skills + Projects + Contact)
│   │   └── projects/
│   │       ├── graphic-design/page.jsx   # Graphic design gallery with tabs
│   │       ├── video-editing/page.jsx    # Video editing showcase
│   │       └── web-development/page.jsx  # Web projects with detail modals
│   └── components/
│       ├── Navbar.jsx             # Fixed nav with scroll detection & mobile menu
│       ├── Hero.jsx               # Hero with particles, gradients, CTAs
│       ├── About.jsx              # Bio section with animated stat cards
│       ├── Skills.jsx             # Categorized skill grid with hover effects
│       ├── Projects.jsx           # Project category cards linking to pages
│       ├── Contact.jsx            # Connect Protocol (socials + contact form)
│       ├── Footer.jsx             # Footer with credits
│       └── ParticleBackground.jsx # Canvas particle animation
├── next.config.mjs        # Next.js config with remote image patterns
├── package.json           # Dependencies & scripts
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/techcodie/girik-port.git
cd girik-port
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

✅ Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 🎨 Design Principles

- **Minimal & Spacious** — Clean layout with generous whitespace
- **Dark & Premium** — Pure black background (#050505) with neon green accents (#00ffa3)
- **Modern Typography** — Inter for body, Space Grotesk for headings
- **Glassmorphism** — Subtle frosted-glass card effects with border highlights
- **Micro-Interactions** — Hover animations, scroll reveals, spring physics
- **Grid-Based Layout** — Consistent responsive grid system

---

## 🖥️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Large name display, role badges, particle background, CTAs |
| 2 | **About** | Bio text with highlighted keywords + animated stat cards |
| 3 | **Skills** | Categorized grid — Graphic Design, Video Editing, Web Dev |
| 4 | **Projects** | Three category cards linking to dedicated project pages |
| 5 | **Connect Protocol** | Social links (Email, LinkedIn, Instagram, GitHub) + contact form |

---

## 👤 Credits

- **Portfolio Owner:** [Girik Sain](https://github.com/techcodie)
- **Built by:** [ANSH BAHETI](https://github.com/techcodie)
- **Design Inspiration:** [GreenHacker](https://greenhacker.in)

---

<p align="center">
  <sub>Made with 💚 by <strong>ANSH BAHETI</strong></sub>
</p>
