import profile from "../assets/aswin.JPG";
import resume from "../assets/Aswin_Resume.pdf";

function Home() {
const handleResume = () => {
  window.open(resume, "_blank");
};

  return (
    <div className="page">
      <div className="home">
        <img
          id="profile-pic"
          src={profile}
          alt="Aswin Profile"
        />

        <div className="intro">
          <h1>Hi, This is Aswin</h1>

          <b>
            AI & ML Student | LLM & GenAI Enthusiast | Full Stack Developer
          </b>
          <br></br>
          <br></br>
          <p>
            I am passionate about building intelligent and scalable solutions
            using modern technologies. My interests lie in Artificial Intelligence,
            Machine Learning, and Full Stack Development.
          </p>

          <p>
            I continuously learn, experiment, and grow through hands-on projects,
            real-world problem solving, and exploring emerging technologies.
          </p>
        </div>
      </div>

      <div className="home-extra">

        <div className="extra-card">
          <h3>Location</h3>
          <p>
            Residing in Coimbatore , Tamil Nadu, India. <br />
            Actively open to remote learning, internships, and tech opportunities.
          </p>
        </div>

        <div className="extra-card">
          <h3>Interests</h3>
          <p>
            Artificial Intelligence, Machine Learning, and Generative AI. <br />
            Interested in solving real-world problems using technology.
          </p>
        </div>

        <div className="extra-card">
          <h3>Favourites</h3>
          <p>
            Building projects, exploring new frameworks, and coding challenges. <br />
            Enjoys learning through experimentation and practical implementation.
          </p>
        </div>

        <div className="extra-card">
          <h3>Aim</h3>
          <p>
            To become a skilled AI/ML Engineer with strong development expertise. <br />
            Focused on creating impactful and meaningful technological solutions.
          </p>
        </div>
      </div>
      <div className = "home">
        <h3> Current/ OnGoing Projects</h3>
        <ul className="list-container">
          <li>
            <strong>SMINI</strong> – Smart Meter Tracking System
          </li>
          <li>
            <strong>StudyPrep</strong> – A College Internal Community App
          </li>
        </ul>
      </div>
      <div className="home">
        <label>Click to View Your Resume</label>
        <button className="btn" onClick={handleResume}>
          Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
