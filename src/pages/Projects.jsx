function Projects() {
  const projects = [
    {
      title: "Smart Energy Optimizer",
      desc: "Java OOP-based system to optimize electricity usage and reduce cost.",
    },
    {
      title: "JavaScript Audio Player",
      desc: "Interactive music player with play, pause and playlist features.",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive portfolio built using React and modern CSS.",
    },
  ];

  return (
    <div className="section">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <button className="btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
