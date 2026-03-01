function Projects() {
  const projects = [
    {
      title: "Smart Energy Optimizer",
      desc: "Java OOP based energy cost optimization system.",
    },
    {
      title: "JavaScript Audio Player",
      desc: "Interactive music player built using JS.",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="card">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
