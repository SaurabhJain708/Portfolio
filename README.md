# Saurabh Jain — Portfolio

A modern, animated portfolio site for **Saurabh Jain** — Full-Stack AI Engineer & RAG & Infrastructure Architect. Built with Next.js 16, React 19, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## Features

- **Responsive design** — Mobile-first, works across all devices
- **Smooth animations** — Framer Motion for scroll progress, section transitions, and micro-interactions
- **Dark theme** — Blueprint-inspired aesthetic with subtle grid patterns and ambient effects
- **Resume page** — Dedicated `/resume` route with print-optimized HTML resume
- **Blog** — Tech blog with carousel and full-article modal view
- **Products showcase** — StackVault and KRAG with demo videos and status badges
- **Open Source** — TwentyCRM, Formbricks, and KRAG contributions with PR/issue links
- **Recommendations** — Peer endorsements with modal expansion

## Sections

| Section | Description |
|--------|-------------|
| **Who I Am** | Video introduction placeholder |
| **Blog** | Infinite-scroll carousel of tech articles (RAG, auth, etc.) |
| **OSS** | Open source contributions with modal for PRs and issues |
| **Stack** | Skills by category (AI & RAG, Frontend, Backend, DevOps) |
| **Experience** | Professional work history timeline |
| **Recommendations** | Peer endorsements with “View full” modal |
| **Products** | Live products (StackVault, KRAG) with demos and links |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4, Radix UI, Lucide icons
- **Animations:** Framer Motion
- **Fonts:** Geist Sans, Geist Mono (Next.js font optimization)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/SaurabhJain708/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── resume/
│   │   └── route.ts      # HTML resume (GET /resume)
│   └── blog/
│       ├── page.tsx      # Blog listing
│       └── [slug]/       # Blog post pages (if used)
├── data/
│   └── blogs.ts          # Blog content
public/                   # Static assets (images, etc.)
```

## Customization

- **Profile data:** Edit the `DATA` object in `src/app/page.tsx`
- **Blog posts:** Add or edit entries in `src/data/blogs.ts`
- **Resume:** Update `src/app/resume/route.ts` with your HTML content
- **Styling:** Tailwind classes in components; global styles in `globals.css`

## License

MIT
