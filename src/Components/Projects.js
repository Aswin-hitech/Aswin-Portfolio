import { useState } from "react";
import cartImg from "../assets/cart.png";
import AIRAImg from "../assets/chatbot.png";
import wasteImg from "../assets/waste.jpg";
import canteenImg from "../assets/canteen.png";
import budgetImg from "../assets/budget.png";
import "./styles.css";


function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

const projects = [
  {
    title: "AIRA - Your AI Railway Assistant",
    intro: "An ML based Real-time Railway Assistant",
    more:  `The AIRA – AI Railway Assistant project was designed to address real-time railway-related issues through intelligent problem
          segregation and automated response mechanisms. The system functions as an upgraded chatbot-based version of Rail Madad, capable of 
          providing instant assistance and delivering immediate notifications to users.The project leverages Natural Language Processing techniques, 
          specifically BERT transformer models, to perform urgency-based and medical-emergency classification of passenger complaints. 
          By analyzing user inputs in real time, AIRA efficiently prioritizes critical cases and routes them for faster resolution. 
          This solution aims to enhance passenger safety, improve response times, and modernize railway grievance 
          handling through AI-driven automation and intelligent decision-making.`,
    image: AIRAImg
  },
  {
    title: "Smart Waste Segregator",
    intro: "An IoT-based system for automatic waste segregation.",
    more: `The project focused on developing a Smart Segregator for dry and wet waste management. Although it achieved partial success,
          it provided valuable hands-on learning in the fundamentals of IoT, automation, and embedded systems. The primary objective was to
        efficiently segregate dry and wet waste to promote a healthier environment and reduce the accumulation of toxic substances in
        nature.This was a team-based project, which was successfully presented during a 36-hour hackathon. The system integrated motors, 
        sensors, and an Arduino microcontroller to enable seamless automation. Additionally, advanced features such as an automated zipping 
        mechanism and a rinsing mechanism were planned, with control facilitated through automation and mobile applications.
        The project also explored the development of a machine learning model to classify waste based on weight, laying the
         foundation for smarter and more scalable waste management solutions.`,
    image: wasteImg
  },
  {
    title: "College Canteen Management System",
    intro: " A Simple Python Project to showcase a python based application",
    more: `The College Canteen Management System was developed as a Python-based application to streamline and automate daily 
    canteen operations. The system manages key functionalities such as menu display, order placement, billing, and 
    basic inventory tracking, reducing manual effort and improving operational efficiency.The application follows a structured and 
    modular approach, enabling smooth data handling and logical workflow management. Through this project, practical experience was
     gained in Python programming, application logic design, and process automation, demonstrating the use of software solutions to 
     improve service management in an academic environment.`,
    image: canteenImg
  },
  {
    title: "PULSECART",
    intro: " A Java Based Shopping cart system",
    more: `The Java Swing Shopping Cart System was developed as a desktop-based application to demonstrate core object-oriented 
            programming concepts and GUI-based application development using Java Swing. The project provides essential e-commerce functionalities 
            such as product browsing, adding and removing items from the cart, quantity management, and real-time price calculation.
            The system emphasizes a structured and modular design, incorporating classes for products, customers, and cart management 
            to ensure scalability and maintainability. Through this project, practical experience was gained in event handling, user interface design,
            and data manipulation, reinforcing a strong foundation in Java-based application development and desktop software engineering.`,
    image: cartImg
  },
  {
    title: "AI BASED BUDGET CALCULATOR",
    intro: " A Simple Python Application to calculate Trips Budget ",
    more: `The AI Budget Calculator was developed as an intelligent decision-support system focused on trip planning and cost optimization.
     The application utilizes geospatial analysis through the Geopy module to calculate distances between locations and estimate 
     travel-related expenses accurately.By integrating intelligent decision-making algorithms, the system analyzes multiple factors 
     such as distance, travel mode, accommodation preferences, and budget constraints to provide optimized and personalized trip cost
      estimations. This project demonstrates the practical application of geospatial computing and AI-driven reasoning to support smarter
       financial planning and enhance user decision-making in travel scenarios.`,
    image: budgetImg
  }
];

  return (
    <div className="projects-page">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.intro}</p>

            {expandedCard === index && (
            <div className="project-expanded">
                <img
                src={project.image}
                alt={project.title}
                className="project-image"
                />
                <p className="project-more">{project.more}</p>
            </div>
            )}

            <button
              className="toggle-btn"
              onClick={() => toggleCard(index)}
            >
              {expandedCard === index ? "See Less" : "View More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
