Build "Portfolio v2" for a vocational high school student named Raihaan. It must be a single-page, scroll-based personal portfolio in a LIGHT, MINIMAL BRUTALIST style, inspired by the Guardbase landing page (described below) and the Hermes Agent website's stark, terminal-like feel.

## TECH STACK
- Next.js (App Router, JavaScript or TypeScript), React, plain CSS Modules or global CSS with CSS variables. No heavy UI libraries
- Use next/font for fonts, next/image where images are used
- Single page with smooth scrolling and anchor navigation
- Mobile-first and fully responsive (test at 360px, 768px, 1280px)
- Deployment-ready for Vercel: `npm run build` must pass with zero errors
- ALL content lives in ONE file (src/data/content.js) so I can edit text, links and projects easily
- All site content in English
- NO profile photo anywhere (see Hero for the replacement visual)

## DESIGN SYSTEM: LIGHT MINIMAL BRUTALISM, BLUE + WHITE
Colors (CSS variables):
- Background: white #FFFFFF, with soft off-white panels #F5F8FF
- Primary blue: #2F5BEA (deep) to #6C9BFF (light) used as gradients on buttons and highlighted words
- Text: near-black #0B0F1A, muted text #5B6475
- Borders: thin 1px hairlines in light blue-grey (#D6DEEF), plus a few thick 2px dark borders for brutalist emphasis
Typography:
- Headlines: large, tight-tracking grotesk sans (Inter Tight / Geist / Space Grotesk), light-to-regular weight, very large (clamp up to ~96px desktop)
- Labels, nav, buttons, tags, numbers: monospace (Geist Mono / JetBrains Mono), UPPERCASE, small, wide letter-spacing
Style details to copy from the reference:
- Hero headline where selected words are filled with a blue gradient (e.g. "deserves" and "as software" in the reference). Mixed black and blue-gradient words in one sentence
- Content sits inside a framed container with thin vertical/horizontal grid lines at the edges, and small "+" crosshair markers at the corners of major sections
- Section labels like "■ ABOUT ME": a small blue square bullet followed by a mono uppercase label
- Numbered rows "01, 02, 03, 04" in mono, separated by dashed hairlines, each row with a small bordered icon box on the right
- Primary button: blue gradient fill, white mono uppercase text and an arrow (e.g. "VIEW PROJECTS →"). Secondary button: white fill, 1px blue border, mono text
- Brutalist touches: hard square corners (no border-radius), hard offset shadows (4px 4px 0 blue or dark) on cards and buttons, hover shifts the element 2px and shrinks the shadow
- A "marquee" strip like the "TRUSTED BY" logo row, but showing Raihaan's tools/tech names as scrolling mono text (pause on hover, respect prefers-reduced-motion)

## HEADER (sticky)
- Left: small square logo mark + "Raihaan" wordmark
- Center/right: nav links About, Skills, Projects, Contact (mono, small). Active link highlighted by scroll position
- Far right: blue gradient button "CONTACT ME →"
- Thin 1px bottom border. On mobile: hamburger that opens a full-width boxed menu

## SECTIONS (all four are mandatory, in this order)

### 01 — HERO / IDENTITY
- Small mono label: "■ HELLO, I'M RAIHAAN"
- Giant headline, for example: "Designing and building **useful** software, **driven by data.**" (bold the idea, apply blue gradient to the highlighted words)
- Sub-text (small): "XI RPL student at SMKN 6 Surakarta. UI/UX designer, fullstack and mobile developer, aspiring data scientist."
- Buttons: [VIEW PROJECTS →] (primary), [CONTACT ME] (secondary)
- Replacement for a photo: a decorative pixel/dot-matrix halftone artwork in blue at the bottom of the hero (like the dotted mountain in the reference). Generate it with an inline SVG or canvas using small squares/dots that fade from solid blue to white. It must be lightweight and responsive
- Identity card (small boxed strip below the hero): NAME: Raihaan / CLASS: XI RPL / SCHOOL: SMKN 6 SURAKARTA / GOAL: DATA SCIENTIST, in mono label-value pairs
- Then the tools marquee strip

### 02 — ABOUT ME
- Label "■ ABOUT ME"
- Left: heading "A student who loves turning ideas into products." Right: 2 short first-person paragraphs: I'm Raihaan, an XI RPL student at SMKN 6 Surakarta, fascinated by the world of technology. My dream is to become a Data Scientist, and along the way I explore UI/UX design, fullstack web development, mobile app development, and data science
- Below: 4 numbered rows (01–04) in the "What Keeps Security Teams Up At Night" layout style: 01 UI/UX Design, 02 Fullstack Web, 03 Mobile Apps, 04 Data Science, each with one short line about what I enjoy about it and a small icon box

### 03 — SKILLS
- Label "■ SKILLS"
- 4 framed cards in a 2x2 grid (1 column on mobile), each with a mono header bar and 4 main tools as bordered uppercase tags:
  - UI/UX DESIGN: Figma, FigJam, Adobe Photoshop, Canva
  - FULLSTACK WEB DEVELOPMENT: React, Node.js, Express, PostgreSQL
  - MOBILE APP DEVELOPMENT: Flutter, Dart, SQLite, Firebase
  - DATA SCIENCE: Python, Pandas, NumPy, Jupyter Notebook
- Tags turn blue on hover

### 04 — PROJECTS (minimum 2 school projects)
- Label "■ SELECTED PROJECTS"
- Two-column grid on desktop, one column on mobile. Each card: header bar with category label, media area, title + status badge, description, tech tags, action buttons

Project 1
- Category: FULLSTACK WEB DEVELOPMENT
- Media: browser-window mockup (three small squares top-left, URL bar "/projects/educlass.png") with a "SCREENSHOT PENDING" placeholder
- Title: EDUCLASS LMS, badge: IN PROGRESS
- Description: "A simple e-learning platform where teachers create classes, upload materials, and assign tasks, while students enroll, submit assignments, and track their grades. Features role-based access (admin, teacher, student) with JWT authentication."
- Tags: REACT, NODE.JS, EXPRESS, POSTGRESQL, JWT, DOCKER
- Buttons: [GITHUB], [LIVE DEMO] (disabled style until a link is added)

Project 2
- Category: MOBILE APP DEVELOPMENT
- Media: phone-frame mockup (thick border, notch bar) with a "SCREENSHOT PENDING" placeholder
- Title: DUITKU TRACKER, badge: IN PROGRESS
- Description: "A personal finance app for recording income and expenses by category, with monthly summaries and charts. Works fully offline with local storage, so data stays on the device."
- Tags: FLUTTER, DART, SQLITE, FL_CHART
- Buttons: [GITHUB], [DOWNLOAD APK] (disabled style until a link is added)

Rules: projects are data-driven (adding a third project = adding one object in content.js). Missing links render as disabled buttons, never hidden. Status badge uses blue outline.

### 05 — CONTACT + SOCIAL MEDIA
- Label "■ CONTACT"
- Large heading "Let's build something together." with a short line: "Open for collaboration and learning."
- Email button (mailto) plus brutalist social buttons: GitHub, LinkedIn, Instagram. Use clearly marked placeholder URLs in content.js with TODO comments
- Footer: "© 2026 Raihaan, SMKN 6 Surakarta" with a thin top border

## QUALITY REQUIREMENTS
- Component structure: Header, Hero, DotArt, ToolsMarquee, About, Skills, Projects, ProjectCard, Contact, Footer
- Semantic HTML, strong contrast, visible keyboard focus (2px blue outline), touch targets at least 44px
- Subtle reveal-on-scroll animations (respect prefers-reduced-motion)
- No horizontal scroll on mobile
- Metadata via Next.js metadata API (title, description, Open Graph), simple favicon

## DEPLOYMENT (VERCEL)
- `npm install` and `npm run build` must pass
- Add a short README: run locally, where to edit content (src/data/content.js), and Vercel deployment steps (GitHub import and Vercel CLI)

When finished, summarize what you built and list the placeholders I still need to fill (social links, email, project links, screenshots).