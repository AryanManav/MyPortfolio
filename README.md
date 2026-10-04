# Aryan Manav · Portfolio

My personal portfolio: a single-page site showing my experience, projects, skills and contact details.

**Live:** https://aryan-portfolio-pi.vercel.app/

---

## Features

- **Projects** with screenshots, tech stacks and live links
- **Experience timeline**, skills grouped by area, education and achievements
- **Scroll-aware navigation** that highlights the section you're reading, with an accessible mobile menu
- **Scroll reveal animations** that respect `prefers-reduced-motion`
- **SEO and social previews** through meta and Open Graph tags
- **Lightweight:** no UI framework, about 5 KB of gzipped CSS and WebP images

## Tech stack

- **Frontend:** React 18 + Vite
- **Styling:** hand-written CSS with a small token-based design system
- **Icons:** Phosphor (`react-icons/pi`) and Devicon
- **Deployment:** Vercel

## Project structure

```
MyPortfolio/
├── public/              favicon, Open Graph image
├── src/
│   ├── assets/          WebP images
│   ├── components/      one component + stylesheet per section
│   ├── hooks/           useReveal (scroll animations)
│   ├── data.js          all site content (profile, projects, skills, ...)
│   ├── App.jsx
│   ├── index.css        design tokens and global styles
│   └── main.jsx
├── index.html
└── vite.config.js
```

To update content (projects, experience, resume link), edit `src/data.js`.

## Running locally

```bash
cd MyPortfolio
npm install
npm run dev
```
