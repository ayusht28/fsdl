import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Hello, I'm Ayush Thakare</h1>
      <p>BTech Student | Web Developer | AI Enthusiast</p>

      <div className="hero-buttons">
        <Link to="/projects" className="btn">
          View Projects
        </Link>

        <Link to="/contact" className="btn secondary-btn">
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Home;
