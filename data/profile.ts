export type NavItem = {
  id: string;
  label: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  tech: string[];
};

export type CertificationEntry = {
  name: string;
  issuer: string;
  period: string;
  summary: string;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  summary: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Oliver Ye",
  headline: "Senior Software Engineer",
  location: "Sydney, Australia 🇦🇺",
  summary:
    "I build resilient backend platforms and product-facing tools, with a focus on performance, developer experience, and measurable business impact.",
  links: [
    { label: "Email", href: "mailto:oliverye9606@gmail.com" },
    { label: "GitHub", href: "https://github.com/oOhyeahh" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/qiming-oliver-ye-7a6a46121/",
    },
  ],
};

export const navItems: NavItem[] = [
  { id: "about", label: "About " },
  { id: "experience", label: "Experience" },
  { id: "certification", label: "Certifications & Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const aboutParagraphs: string[] = [
  "I am a software engineer with production experience across backend systems, internal tooling, and user-facing web applications. My work blends platform reliability with practical product delivery.",
  "At CoverGenius, I have led initiatives spanning real-time experimentation, AI-assisted operations, and CI/CD acceleration. I enjoy partnering with product, data, and engineering peers to turn ideas into scalable services.",
  "Outside of work, I enjoy technical meetups, table tennis, and multiplayer gaming.",
];

export const experiences: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    company: "CoverGenius",
    period: "Mar 2022 - Present",
    highlights: [
      "Led development of an in-house pricing A/B testing framework using Django and Celery-backed event tracking to improve homepage-to-booking conversion outcomes.",
      "Built a React analytics interface for stakeholders to monitor real-time experiment performance and interpret results quickly.",
      "Delivered a Vertex AI Gemini solution for claims assessment workflows, improving operational efficiency and reducing manual effort.",
      "Automated CI/CD workflows with GitLab CI pipelines to increase release speed and consistency.",
    ],
    tech: ["Python", "Django", "Celery", "React", "GitLab CI", "Vertex AI"],
  },
  {
    role: "Backend Engineer",
    company: "Q-CTRL",
    period: "Jan 2020 - Feb 2022",
    highlights: [
      "Designed and implemented backend microservices and GraphQL APIs that supported products including Quantum Education Platform and SSO services.",
      "Improved stability and performance of Python client packages, raising reliability for external users and internal teams.",
      "Implemented GitHub Actions CI/CD pipelines with automated end-to-end testing for faster, safer deployments.",
    ],
    tech: ["Python", "GraphQL", "GitHub Actions", "Microservices"],
  },
];

export const certifications: CertificationEntry[] = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    period: "Mar 2021",
    summary:
      "Validated cloud development capability across AWS application lifecycle management and deployment strategy.",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Commerce and Computer Science (Double Degree)",
    institution: "The University of New South Wales (UNSW)",
    period: "Mar 2016 - Dec 2019",
    summary:
      "Completed a double degree with focus areas in data service engineering, object-oriented programming, and software service design.",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    items: ["Django", "FastAPI", "React"],
  },
  {
    title: "DevOps",
    items: ["Terraform", "Kubernetes", "Docker", "GitLab CI"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "Jira",
      "Google Workspace",
      "Slack",
      "Claude Code",
      "Windsurf",
    ],
  },
];
