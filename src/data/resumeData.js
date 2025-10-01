// src/data/resumeData.js
// Centralized resume / profile data (edit here to update site)
// Source: uploaded resume PDF. :contentReference[oaicite:4]{index=4}

const resumeData = {
  personal: {
    name: "Mejbaul Mubin",
    title: "Full-Stack Developer",
    location: "Dhaka, Bangladesh",
    email: "mejbaulmubin@gmail.com",
    phone: "+880-1XXXXXXXXX", // replace with your phone
    linkedin: "https://www.linkedin.com/in/your-username",
    github: "https://github.com/your-username",
    website: "https://your-portfolio.example.com",
    summary:
      "Passionate Full-Stack Developer focused on building performant and accessible web applications using React, Node.js and modern databases. Strong interest in algorithmic problem solving and clean engineering.",
  },

  education: [
    {
      institution: "Higher Secondary Certificate (HSC)",
      board: "Your College/Board Name", // replace
      year: "2007",
      details: "Group / Major — e.g., Science (replace if needed)",
    },
    {
      institution: "Secondary School Certificate (SSC)",
      board: "Your School Name",
      year: "2005",
      details: "Group / Major — e.g., Science (replace if needed)",
    },
    // Add higher education if present in your resume
  ],

  experience: [
    // If your resume lists specific companies & roles, replace these entries
    {
      company: "Company / Organisation Name",
      role: "Frontend Developer",
      period: "Month YYYY - Present",
      bullets: [
        "Built responsive user interfaces using React and Tailwind CSS.",
        "Collaborated with backend teams to design RESTful APIs.",
      ],
    },
    // Add additional experiences from your resume
  ],

  skills: {
    languages: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    frameworks: ["React", "Node.js", "Express", "Next.js"],
    tools: ["Git", "Docker", "Postman"],
    databases: ["MongoDB", "Redis", "MySQL"],
    others: ["Tailwind CSS", "Figma", "Linux / WSL"],
  },

  projects: [
    {
      title: "Blogging Platform",
      description:
        "A full-stack blogging platform built with Next.js, offering SSR, markdown editor, and user authentication.",
      link: "#",
      repo: "#",
      tags: ["Next.js", "MongoDB", "Tailwind"],
    },
    {
      title: "YouTube Clone",
      description:
        "Video streaming UI clone with search, playlists and responsive design built using React.",
      link: "#",
      repo: "#",
      tags: ["React", "YouTube API", "Tailwind"],
    },
    // Add real project entries from your resume (replace placeholders)
  ],

  certifications: [
    // Add relevant certs from PDF if present
    // { title: "Certificate name", issuer: "Issuer", year: "2023" }
  ],
};

export default resumeData;
