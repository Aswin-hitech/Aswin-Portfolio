import { useState } from "react";
import "./styles.css";

import medicuranceImg from "../assets/medicurance.png";
import smartStudyImg from "../assets/smartstudy.png";
import AIRAImg from "../assets/chatbot.png";
import cartImg from "../assets/cart.png";
import wasteImg from "../assets/waste.jpg";

function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const projects = [
    {
      title: "Medicurance – AI Powered Medical Claim Validation System",
      intro:
        "An intelligent healthcare claim validation platform powered by RAG, LLMs, OCR, and fraud detection.",
      more: `Medicurance is an AI-powered healthcare claim validation platform developed to automate the medical reimbursement process for pensioners. The application combines Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), OCR, and intelligent document analysis to verify submitted claims with greater accuracy and efficiency.

The system extracts information from medical bills, prescriptions, laboratory reports, and discharge summaries using OCR and image preprocessing techniques. The extracted data is validated against government healthcare scheme guidelines using a RAG pipeline, enabling AI-assisted decision making with explainable outputs.

Additional features include duplicate claim detection, fraud analysis, confidence scoring, AI-generated validation reports, and officer review support. Built using Flask, MongoDB, PostgreSQL, Supabase Storage, and modern AI technologies, Medicurance demonstrates the practical application of Generative AI in healthcare automation while significantly reducing manual verification efforts.`,
      image: medicuranceImg,
      github: "https://github.com/Aswin-hitech/Medicurance",
    },

    {
      title: "SmartStudy – AI Exam Preparation Assistant",
      intro:
        "An AI-powered learning assistant that personalizes exam preparation using OCR and Large Language Models.",
      more: `SmartStudy is an intelligent academic assistant designed to improve students' learning experience through personalized study recommendations and AI-assisted guidance. The platform analyzes study materials, evaluates preparation levels, and generates customized learning plans based on individual performance.

The application utilizes OCR to extract information from handwritten notes, textbooks, and question papers, while Large Language Models provide topic explanations, summaries, revision strategies, and doubt clarification. Students receive adaptive recommendations to improve weak areas and monitor their academic progress.

By integrating Artificial Intelligence, Machine Learning, and educational analytics, SmartStudy aims to make exam preparation more efficient, interactive, and data-driven while encouraging consistent learning habits.`,
      image: smartStudyImg,
      github: "https://github.com/Aswin-hitech/SmartStudy-Assist",
    },

    {
      title: "AIRA – AI Railway Assistant",
      intro:
        "An AI-powered railway complaint management system with NLP-based issue classification and urgency detection.",
      more: `AIRA (AI Railway Assistant) was developed as an intelligent enhancement to the existing Rail Madad complaint system. It enables passengers to submit complaints naturally while automatically classifying issues and prioritizing emergency situations using Natural Language Processing.

The project leverages BERT transformer models to perform urgency detection, medical emergency identification, and complaint categorization. By intelligently routing complaints to the appropriate departments, AIRA helps improve response time, passenger safety, and service efficiency.

The system demonstrates the practical application of Machine Learning and NLP in public transportation by automating complaint analysis and supporting faster decision-making.`,
      image: AIRAImg,
      github: "",
    },

    {
      title: "PulseCart – Java Shopping Cart System",
      intro:
        "A desktop-based e-commerce application built using Java Swing and Object-Oriented Programming.",
      more: `PulseCart is a Java Swing-based shopping cart application developed to demonstrate Object-Oriented Programming concepts and GUI application development. The system provides essential e-commerce functionalities such as product browsing, cart management, quantity updates, billing, and real-time price calculation.

The project follows a modular architecture with separate classes for products, customers, orders, and cart management, ensuring scalability and maintainability. It strengthened my understanding of Java, event handling, user interface development, and software design principles.`,
      image: cartImg,
      github: "https://github.com/Aswin-hitech/PULSECART",
    },
    {
      title: "Smart Waste Segregator",
      intro:
        "An IoT-based smart waste management system for automated dry and wet waste segregation.",
      more: `Smart Waste Segregator was developed during a 36-hour hackathon as a team project focused on promoting sustainable waste management. The system uses Arduino, sensors, motors, and automation techniques to identify and separate dry and wet waste.

Additional planned features included automated zipping mechanisms, rinsing systems, and mobile application integration. The project also explored machine learning-based waste classification techniques, providing valuable exposure to IoT, embedded systems, and intelligent automation.`,
      image: wasteImg,
    }

  ];

  return (
    <div className="projects-page">
      <h2 className="projects-title">Projects</h2>

      <p className="projects-subtitle">
        A collection of AI, Machine Learning, Full Stack, and software
        engineering projects that reflect my passion for building practical,
        intelligent, and scalable solutions.
      </p>

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

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    View GitHub Repository →
                  </a>
                )}
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