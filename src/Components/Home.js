import profile from "../assets/aswin.jpeg";
import resume from "../assets/Aswin_Resume.pdf";

function Home() {
  const handleResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="home">
        <img
          id="profile-pic"
          src={profile}
          alt="Aswin Profile"
        />

        <div className="intro">
          <h1>Hi, I'm Aswin 👋</h1>

          <b>
            AI Engineer | Generative AI | Full Stack Developer
          </b>

          <br />
          <br />

          <p>
            I'm a <strong>Third-Year B.Tech student</strong> specializing in
            <strong> Artificial Intelligence and Machine Learning</strong> at
            Kalaignar Karunanidhi Institute of Technology, Coimbatore.
            Passionate about designing intelligent software that bridges AI
            research with real-world applications.
          </p>

          <p>
            My interests span <strong>Generative AI</strong>,
            <strong> Large Language Models (LLMs)</strong>,
            <strong> Retrieval-Augmented Generation (RAG)</strong>,
            <strong> Agentic AI</strong>, and
            <strong> Full Stack Development</strong>. I enjoy building
            production-oriented applications that combine scalable backend
            systems with modern AI technologies.
          </p>

          <p>
            I continuously challenge myself through projects, internships,
            hackathons, and research while expanding my expertise in software
            engineering and applied artificial intelligence.
          </p>
        </div>
      </div>

      {/* Information Cards */}
      <div className="home-extra">

        <div className="extra-card">
          <h3>Current Status</h3>

          <p>
            📍 Coimbatore, Tamil Nadu
            <br />
            🎓 Third-Year AIML Student
            <br />
            💼 Open to Internships & Full-Time Opportunities
          </p>
        </div>

        <div className="extra-card">
          <h3>Technical Expertise</h3>

          <p>
            Python • Java • C • SQL
            <br />
            Flask • React • Node.js • Express.js
            <br />
            LLMs • RAG • LangChain • BERT
            <br />
            OpenCV • OCR • Machine Learning
            <br />
            PostgreSQL • MongoDB • REST APIs
          </p>
        </div>

        <div className="extra-card">
          <h3>Areas of Interest</h3>

          <p>
            Agentic AI • LLMs • RAG
            <br />
            AI Agents • Backend Development
            <br />
            Full Stack Development
            <br />
            Cloud Computing
            <br />
            Data Engineering
            <br />
            Open Source
            <br />
            Competitive Programming
          </p>
        </div>

        <div className="extra-card">
          <h3>Career Vision</h3>

          <p>
            Aspiring to become an
            <strong> Applied AI Engineer</strong> specializing in
            <strong> Generative AI</strong>,
            <strong> AI/ML</strong>, and
            <strong> intelligent autonomous systems</strong> that solve
            real-world challenges through scalable and impactful technology.
          </p>
        </div>

      </div>

      {/* Featured Projects */}
      <div className="home">
        <h2>Featured Projects</h2>

        <ul className="list-container">
          <li>
            <strong>Medicurance</strong> – AI-powered medical claim validation
            platform using RAG, LLMs, OCR, and fraud detection.
          </li>

          <li>
            <strong>AIRA</strong> – Intelligent railway complaint management
            system with NLP-based issue classification and priority detection.
          </li>

          <li>
            <strong>Taskser</strong> – Smart productivity platform integrating
            AI-assisted scheduling, roadmap tracking, and career planning.
          </li>

          <li>
            <strong>SmartStudy</strong> – AI-driven student performance analysis
            platform that evaluates learning progress and study effectiveness.
          </li>
        </ul>
      </div>

      {/* Current Project */}
      <div className="home">
        <h2>Currently Building</h2>

        <p>
          <strong>BookParkSmart</strong> — An Edge AI-powered smart parking
          management system leveraging Computer Vision and intelligent vehicle
          detection to optimize parking utilization and enable real-time parking
          monitoring.
        </p>
      </div>

      {/* Resume */}
      <div className="home">
        <h2>Let's Connect</h2>

        <p>
          Interested in my work? Explore my experience, projects, technical
          skills, and achievements by viewing my resume.
        </p>

        <button className="btn" onClick={handleResume}>
          View Resume
        </button>
      </div>
    </div>
  );
}

export default Home;