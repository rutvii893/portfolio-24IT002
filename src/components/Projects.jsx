function Projects() {
  const projects = [
    {
      title: "NeuroVault",
      description:
        "An AI-powered second brain app that helps users organize knowledge, semantically search documents, and chat with their personal content using RAG and modern LLM tools.",
      stack: ["React", "FastAPI", "LangChain", "FAISS", "OpenAI"],
      link: "https://github.com/rutvii893/NeuroVault.git",
    },
    {
      title: "AmulNutriAI",
      description:
        "An AI nutrition and product recommendation system for Amul that offers personalized meal planning, nutrition analysis, recipe suggestions, and PDF report generation.",
      stack: ["React", "Node.js", "Express", "MySQL", "Gemini API"],
      link: "https://github.com/rutvii893/AmulNutriAi",
    },
    {
      title: "AI Gurukul",
      description:
        "A GenAI education platform inspired by Indian Knowledge Systems, offering personalized guidance through AI personas and RAG-driven learning experiences.",
      stack: ["React", "Python", "FastAPI", "Gemini", "Tailwind"],
      link: "https://github.com/rutvii893/AiGurukul",
    },
    {
      title: "ArtPortfolio",
      description:
        "A responsive art showcase platform with gallery browsing, profile management, and a clean UI for displaying creative work.",
      stack: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
      link: "https://github.com/rutvii893/Artportfolio",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-label">Projects</span>
        <h2>Selected work</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;