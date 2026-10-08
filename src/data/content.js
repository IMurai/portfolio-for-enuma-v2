/**
 * ============================================================
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to change text, links, projects and socials.
 *  Nothing else needs to change when you edit copy.
 * ============================================================
 */

export const identity = {
  name: "Raihaan",
  fullName: "Muhammad Raihaan Naafi Attaryanto",
  role: "UI/UX Designer · Fullstack & Mobile Developer",
  class: "XI RPL",
  school: "SMKN 6 Surakarta",
  schoolShort: "SMKN 6 SURAKARTA",
  goal: "DATA SCIENTIST",
  location: "Surakarta, Indonesia",
};

export const hero = {
  label: "WELCOME TO MY PORTFOLIO",
  // "true" = filled with the blue gradient, "false" = near-black text
  headline: [
    { text: "Hello, ", gradient: true },
    { text: "I'm Muhammad ", gradient: false },
    { text: "Raihaan ", gradient: true },
    { text: "Naafi Attaryanto", gradient: false },
    { text: ".", gradient: true },    
  ],
  subtext:
    "XI RPL student at SMKN 6 Surakarta. UI/UX designer, fullstack and mobile developer, aspiring data scientist.",
  primaryCta: { label: "VIEW PROJECTS", href: "#projects" },
  secondaryCta: { label: "CONTACT ME", href: "#contact" },
};

export const about = {
  label: "ABOUT ME",
  heading: "A student who loves turning ideas into products.",
  paragraphs: [
    "I'm Muhammad Raihaan Naafi Attaryanto, an XI RPL student at SMKN 6 Surakarta, fascinated by the world of technology. I enjoy taking an idea from a rough sketch on paper all the way to a working product people can actually use.",
    "My dream is to become a Data Scientist, and along the way I explore UI/UX design, fullstack web development, mobile app development, and data science — learning a little more from every project I ship.",
  ],
  rows: [
    {
      id: "01",
      title: "UI/UX Design",
      line: "I like mapping messy problems into clean flows and interfaces that feel obvious to use.",
      icon: "pen",
    },
    {
      id: "02",
      title: "Fullstack Web",
      line: "Building both sides of the app keeps me curious — databases, APIs and the pixels on top.",
      icon: "code",
    },
    {
      id: "03",
      title: "Mobile Apps",
      line: "There is something satisfying about an app that works offline and stays fast in your hand.",
      icon: "phone",
    },
    {
      id: "04",
      title: "Data Science",
      line: "Turning raw numbers into a clear answer is the skill I am chasing every single day.",
      icon: "chart",
    },
  ],
};

export const skills = {
  label: "SKILLS",
  cards: [
    {
      title: "UI/UX DESIGN",
      tags: ["Figma", "Affinity", "Adobe Photoshop", "Canva"],
    },
    {
      title: "FULLSTACK WEB DEVELOPMENT",
      tags: ["React", "Node.js", "PHP", "MySql"],
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      tags: ["Flutter", "Kotlin", "SQLite", "Firebase"],
    },
    {
      title: "DATA SCIENCE",
      tags: ["Python", "Pandas", "NumPy", "Jupyter Notebook"],
    },
  ],
};

export const projects = {
  label: "SELECTED PROJECTS",
  items: [
    {
      id: "educlass",
      category: "FULLSTACK WEB DEVELOPMENT",
      media: {
        type: "browser",
        // TODO: replace with your real screenshot, e.g. "/projects/educlass.png"
        url: "/projects/Jadwalin.png",
        screenshot: null, // put a string path here once the file exists in /public
      },
      title: "JADWALIN AI CALENDER",
      status: "IN PROGRESS",
      description:
        "A smart AI-powered calendar platform that helps users manage schedules through natural language chat interaction with an AI assistant named Aijin. Features intelligent event creation, visual calendar with circular heatmap density indicators, and floating modal dialogs. Built with a modern Bauhaus Neo-Brutalist design approach for a unique user experience.",
      tags: ["React", "Vite", "Javascript", "HTML", "CSS", "Gemini Api"],
      links: {
        // TODO: add your repository URL
	      github: "https://github.com/IMurai/jadwalin.git",
        // TODO: add your live demo URL
        demo: { label: "LIVE DEMO", href: null },
      },
    },
    {
      id: "duitku",
      category: "MOBILE APP DEVELOPMENT",
      media: {
        type: "phone",
        url: "/projects/duitku.png",
        screenshot: null, // put a string path here once the file exists in /public
      },
      title: "DUITKU TRACKER",
      status: "IN PROGRESS",
      description:
        "A personal finance app for recording income and expenses by category, with monthly summaries and charts. Works fully offline with local storage, so data stays on the device.",
      tags: ["Flutter", "Dart", "SQLite", "FlChart"],
      links: {
        // TODO: add your repository URL
        github: null,
        // TODO: add your download link
        demo: { label: "DOWNLOAD APK", href: null },
      },
    },
  ],
};

export const marquee = {
  label: "TOOLS I WORK WITH",
  tools: [
    "Figma",
    "React",
    "Next.js",
    "Node.js",
    "MySql",
    "Linux",
    "Flutter",
    "PostgreSql",
    "Firebase",
    "Python",
    "Pandas",
    "Git",
    "Docker",
    "Vercel",
  ],
};

export const contact = {
  label: "CONTACT",
  heading: "Let's build something together.",
  // word inside `heading` that gets the blue gradient fill
  headingHighlight: "something",
  subtext: "Open for collaboration and learning.",
  // TODO: replace with your real e-mail address
  email: "raihaan.tech@proton.me",
  emailButton: "EMAIL ME",
  socials: [
    {
      name: "GitHub",
      handle: "/IMurai",
      // TODO: replace with your real GitHub profile URL
      href: "https://github.com/IMurai",
    },
    {
      name: "LinkedIn",
      handle: "/in/raihaan",
      // TODO: replace with your real LinkedIn profile URL
      href: "https://www.linkedin.com/in/TODO-raihaan",
    },
    {
      name: "Instagram",
      handle: "@im.murai",
      // TODO: replace with your real Instagram profile URL
      href: "https://instagram.com/im.murai",
    },
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const footer = {
  copyright: "© 2026 Raihaan, SMKN 6 Surakarta",
  builtWith: "Built with Next.js",
};

export const site = {
  title: "Raihaan — UI/UX Designer, Fullstack & Mobile Developer",
  description:
    "Portfolio of Raihaan, an XI RPL student at SMKN 6 Surakarta. UI/UX designer, fullstack and mobile developer, aspiring data scientist.",
  url: "https://portfolio-v2.vercel.app", // TODO: replace with your deployed URL
  twitter: "@TODO-raihaan", // TODO: replace with your real X / Twitter handle
};
