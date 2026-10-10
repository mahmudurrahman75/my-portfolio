# Software Engineer Portfolio

A premium, modern, production-ready portfolio website for Software Engineers. Built with **React**, **Vite**, **ES6+ JavaScript**, and **Vanilla CSS** design tokens.

All portfolio content is decoupled from code and maintained exclusively in local **JSON files** within `src/data/`. No backend, database, or API server is required.

---

## 🌟 Key Features

- **Dark Engineering Theme**: Restrained dark palette with subtle electric blue/violet accents, generous spacing, fine borders, and smooth transitions.
- **100% Data-Driven Architecture**: All personal information, skills, projects, work experience, academics, certifications, and contact links reside in `src/data/*.json`.
- **Dynamic Project Filtering**: Filter projects by category (Full Stack, Frontend, Backend & Systems, Developer Tools) with keyboard-accessible tabs.
- **Graceful Asset Fallbacks**: Automatic fallbacks for missing images, broken links, or empty data sections.
- **Direct Contact Experience**: One-click email copy button and native `mailto:` CTA without non-functional form mockups.
- **Accessibility & Performance**: Semantic HTML5 landmarks, visible `:focus-visible` rings, `prefers-reduced-motion` compliance, and sub-2s static Vite builds.
- **Mobile Responsive**: Custom mobile navigation drawer, fluid typography using `clamp()`, and auto-fitting responsive grids.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS with centralized design tokens (`variables.css`, `global.css`, `layout.css`, `components.css`)
- **Icons**: Lucide React + custom SVG icons
- **Fonts**: Inter & JetBrains Mono (via Google Fonts)

---

## 📁 Project Folder Structure

```
my-portfolio/
├── public/
│   ├── documents/
│   │   └── resume.pdf            # Your downloadable résumé
│   ├── images/
│   │   ├── profile.svg           # Your profile picture / avatar
│   │   └── projects/             # Project screenshots or SVG thumbnails
│   │       ├── orchestrator.svg
│   │       ├── metrics.svg
│   │       ├── nexus-kv.svg
│   │       ├── docupulse.svg
│   │       ├── hypergateway.svg
│   │       └── graphdraft.svg
│   ├── favicon.svg               # Site favicon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedHeroVisual.jsx # 3D floating code editor & satellite badges
│   │   │   ├── Button.jsx        # Reusable button / anchor component
│   │   │   ├── EmptyState.jsx    # Clean fallback for empty lists
│   │   │   ├── ProjectCard.jsx   # Project showcase card with image error handling
│   │   │   ├── SectionHeading.jsx# Consistent section badge, title & description
│   │   │   ├── SocialLinks.jsx   # Interactive social links with hover glow
│   │   │   └── Tag.jsx           # Technology and category pill
│   │   ├── layout/
│   │   │   ├── Container.jsx     # Centered max-width layout wrapper
│   │   │   ├── Footer.jsx        # Dynamic year copyright, links & back-to-top
│   │   │   └── Navbar.jsx        # Sticky navigation with scroll observer & drawer
│   │   └── sections/
│   │       ├── Hero.jsx          # Greeting, title, headline, CTAs & avatar
│   │       ├── About.jsx         # Biography, core strengths & career focus
│   │       ├── Skills.jsx        # Categorized skill taxonomy cards
│   │       ├── Projects.jsx      # Filterable project cards grid
│   │       ├── Experience.jsx    # Career history vertical timeline
│   │       ├── Education.jsx     # Degrees, coursework & academic honors
│   │       ├── Achievements.jsx  # Certifications, awards & credential links
│   │       └── Contact.jsx       # Direct mail CTA & email copy interaction
│   ├── data/                     # 💡 THE SOURCE OF TRUTH (EDIT CONTENT HERE)
│   │   ├── site.json             # Global site metadata, SEO title, navigation
│   │   ├── personal.json         # Your name, title, bio headline, resume path
│   │   ├── about.json            # Biography paragraphs, career goals, strengths
│   │   ├── social-links.json     # GitHub, LinkedIn, Email, Twitter URLs
│   │   ├── skills.json           # Categories & skill records with icons
│   │   ├── projects.json         # Project showcase items, links & tags
│   │   ├── experience.json       # Career positions, responsibilities & impact
│   │   ├── education.json        # Universities, degrees & relevant coursework
│   │   ├── achievements.json     # Certifications, hackathons & awards
│   │   └── contact.json          # Email, location, availability statement
│   ├── styles/
│   │   ├── variables.css         # Design tokens: colors, spacing, radii, shadows
│   │   ├── global.css            # Base resets, accessibility, selection & mesh
│   │   ├── layout.css            # Container, section spacing & responsive grids
│   │   ├── components.css        # Navbar, buttons, cards, timeline, badges
│   │   └── hero-visual.css       # 3D workspace perspective, glow, and floating animations
│   ├── utils/
│   │   ├── helpers.js            # Initials generator & link validators
│   │   └── icons.jsx             # Dynamic Lucide icon and SVG resolver
│   ├── App.jsx                   # Main layout assembling all sections
│   ├── index.css                 # Master CSS stylesheet bundle
│   └── main.jsx                  # React DOM mount point
├── index.html                    # SEO meta tags, title & font links
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` (installed with Node)

### Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd my-portfolio

# Install project dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open your browser at the displayed local URL (usually `http://localhost:5173`). Vite provides instantaneous Hot Module Replacement (HMR) when modifying JSON data or React components.

### Building for Production

```bash
npm run build
```

This compiles a minified, static bundle into the `dist/` directory ready for deployment on any static host.

### Previewing the Production Build Locally

```bash
npm run preview
```

---

## ✏️ Customization Guide: Editing Your Portfolio Content

You do **not** need to touch React component code to update your portfolio. Simply edit the JSON files in `src/data/`:

### 1. Personal Information (`src/data/personal.json`)
Update your name, title, short bio, location, and availability:
```json
{
  "fullName": "Your Name",
  "title": "Software Engineer",
  "tagline": "Building high-performance distributed systems.",
  "location": "City, Country (Open to Remote)",
  "profileImage": "/images/profile.svg",
  "availabilityStatus": "Available for full-time opportunities",
  "yearsOfExperience": "4+ years",
  "resumePath": "/documents/resume.pdf"
}
```

### 2. Replacing Your Profile Photo
1. Place your image inside `public/images/` (e.g. `public/images/profile.jpg`).
2. Update `"profileImage": "/images/profile.jpg"` in `src/data/personal.json`.
3. If no image is provided or the file path is incorrect, an initials avatar fallback is automatically displayed.

### 3. Adding Your Résumé
1. Drop your PDF file into `public/documents/` (e.g. `public/documents/resume.pdf`).
2. In `src/data/personal.json`, ensure `"resumePath": "/documents/resume.pdf"`.
3. To hide the résumé button entirely, set `"resumePath": ""`.

### 4. Adding a New Project (`src/data/projects.json`)
Add an object to the array:
```json
{
  "id": "my-new-project",
  "name": "Distributed Storage Mesh",
  "category": "Backend & Systems",
  "featured": true,
  "shortDescription": "High-throughput fault tolerant object store.",
  "techStack": ["Go", "gRPC", "Docker", "PostgreSQL"],
  "thumbnail": "/images/projects/storage.png",
  "githubUrl": "https://github.com/yourusername/project",
  "liveDemoUrl": "https://project-demo.example.com",
  "keyFeatures": [
    "Sub-millisecond retrieval under high concurrency",
    "Automated node failover and replica reconciliation"
  ]
}
```
*Note: If `liveDemoUrl` or `githubUrl` is an empty string `""`, the corresponding button is automatically hidden.*

### 5. Adding Skills (`src/data/skills.json`)
Organized by category cards. Supported icons correspond to Lucide icon names:
```json
{
  "category": "Cloud & Infrastructure",
  "description": "Container orchestration and continuous deployment.",
  "skills": [
    { "name": "Kubernetes", "featured": true, "icon": "Layers" },
    { "name": "Terraform", "featured": false, "icon": "Box" }
  ]
}
```

### 6. Experience & Education (`src/data/experience.json`, `src/data/education.json`)
Add work positions, internships, degrees, and coursework. If you have no formal employment records yet, set `experience.json` to an empty array `[]` and the section will cleanly omit itself.

### 7. Social Links (`src/data/social-links.json`)
Configure your GitHub, LinkedIn, email, or X/Twitter handles:
```json
[
  { "id": "github", "label": "GitHub", "url": "https://github.com/username", "icon": "Github" },
  { "id": "linkedin", "label": "LinkedIn", "url": "https://linkedin.com/in/username", "icon": "Linkedin" },
  { "id": "email", "label": "Email", "url": "mailto:youremail@example.com", "icon": "Mail" }
]
```

---

## 🌐 Deployment

Because this is a 100% static React application with zero runtime backend dependencies, you can deploy it to any static web host for free:

### Vercel
1. Push your repository to GitHub.
2. Import the repository on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Click **Deploy Site**.

### GitHub Pages
1. In `vite.config.ts`, add `base: '/<repository-name>/'` (if not using a custom domain).
2. Run `npm run build`.
3. Deploy the contents of the `dist/` directory via the `gh-pages` CLI or GitHub Actions.

---

## 📄 License

This portfolio template is open-source and free to customize for your personal portfolio.
