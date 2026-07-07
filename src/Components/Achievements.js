import webinarImg from "../assets/uitm 1.jpeg";
import webinarImg1 from "../assets/uitm 2.jpeg";
import buddyBytesImg from "../assets/thinkml.jpeg";
import buddyBytesImg1 from "../assets/thinkml2.jpeg";
import conferenceImg from "../assets/conference.jpeg";

function Achievements() {
  const achievements = [
    {
      title: "International Webinar Speaker – UiTM Malaysia",
      subtitle: "Technical Webinar",
      description:
        "Delivered an international technical webinar organized by Universiti Teknologi MARA (UiTM), Malaysia. The session focused on emerging Artificial Intelligence technologies, practical applications, and career opportunities in AI, providing participants with industry-oriented insights and interactive discussions.",
      image: webinarImg,
    },
    {
      title: "Buddy Bytes Mentor Session",
      subtitle: "Technical Mentoring",
      description:
        "Conducted a Buddy Bytes technical session for junior students, introducing fundamental programming concepts, software development practices, and effective problem-solving approaches. The session encouraged collaborative learning and helped juniors strengthen their technical foundations.",
      image: buddyBytesImg,
    },
    {
      title: "Research Paper Presentation - ICON REACT 4K",
      subtitle: "International Conference",
      description:
        "Presented the research paper titled 'SmartStudy - AI Exam Preparation Assistant' at the ICON REACT 4K International Conference hosted by Sri Shakthi Institute of Engineering and Technology, Coimbatore. The work showcased the application of Artificial Intelligence, OCR, and Large Language Models to create an intelligent academic assistant for personalized exam preparation.",
      image: conferenceImg,
    },
  ];

  return (
    <div className="page achievements-page">
      <h2>Achievements & Recognition</h2>

      <p className="achievement-intro">
        My academic journey has been enriched through technical talks,
        mentoring, research presentations, and continuous participation in
        knowledge-sharing initiatives.
      </p>

      {achievements.map((item, index) => (
        <div className="achievement-card" key={index}>
          <div className="achievement-image">
            <img src={item.image} alt={item.title} />
          </div>

          <div className="achievement-content">
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}

      <h2 style={{ marginTop: "60px" }}>Gallery</h2>

      <div className="achievement-gallery">
        <img src={webinarImg1} alt="Webinar" />
        <img src={buddyBytesImg1} alt="Buddy Bytes" />
        <img src={conferenceImg} alt="Conference" />
      </div>
    </div>
  );
}

export default Achievements;