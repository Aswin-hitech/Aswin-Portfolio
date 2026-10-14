import { useState, useEffect } from "react";
import profile from "../assets/aswin.jpeg";
import resume from "../assets/Aswin_Resume.pdf";

function Home() {
  const [introText, setIntroText] = useState("ASWIN");
  const [introAnimate, setIntroAnimate] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  const [introUnmounted, setIntroUnmounted] = useState(false);

  const handleResume = () => {
    window.open(resume, "_blank");
  };

  const skipIntro = () => {
    setIntroFinished(true);
    document.body.classList.remove("intro-active");
    setTimeout(() => {
      setIntroUnmounted(true);
    }, 1200);
  };

  // Dedicated Cinematic Intro: ASWIN morphs into PORTFOLIO (matching reference)
  useEffect(() => {
    document.body.classList.add("intro-active");
    document.body.classList.add("on-home-page");

    // 1. Massive typography scales & shines in
    const startTimer = setTimeout(() => {
      setIntroAnimate(true);
    }, 150);

    // 2. Morph ASWIN into PORTFOLIO letter-by-letter
    const morphTimer = setTimeout(() => {
      const targetWord = "PORTFOLIO";
      const startWord = "ASWIN";
      let step = 0;

      const typeInterval = setInterval(() => {
        step++;
        if (step <= targetWord.length) {
          const morphed =
            targetWord.substring(0, step) +
            (startWord.substring(step) || "");
          setIntroText(morphed);
        } else {
          clearInterval(typeInterval);
        }
      }, 115);
    }, 1200);

    // 3. Dissolve intro overlay into page (video-like transition)
    const finishTimer = setTimeout(() => {
      setIntroFinished(true);
      document.body.classList.remove("intro-active");
    }, 3200);

    // 4. Safely unmount overlay from DOM
    const unmountTimer = setTimeout(() => {
      setIntroUnmounted(true);
    }, 4500);

    return () => {
      document.body.classList.remove("intro-active");
      document.body.classList.remove("on-home-page");
      clearTimeout(startTimer);
      clearTimeout(morphTimer);
      clearTimeout(finishTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  // Scroll reveal observer matching the reference website's behavior
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-up").forEach((el) => {
        el.classList.add("active");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".reveal-up");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Reference-inspired subtle pointer-driven 3D depth on desktop
  useEffect(() => {
    const isFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const cards = document.querySelectorAll(
      ".home-page .home, .home-page .extra-card"
    );
    const cleanups = [];

    cards.forEach((card) => {
      const handlePointerMove = (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        const rotateY = px * 5.5;
        const rotateX = -py * 5.5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
          2
        )}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      };

      const handlePointerLeave = () => {
        card.style.transform = "";
      };

      card.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      card.addEventListener("pointerleave", handlePointerLeave, {
        passive: true,
      });

      cleanups.push(() => {
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className={`page home-page ${introFinished ? "intro-revealed" : "intro-waiting"}`}>
      {/* Dedicated Cinematic Intro Cover Page (Nancy Reference) */}
      {!introUnmounted && (
        <div
          id="intro-overlay"
          className={`intro-overlay ${introFinished ? "finished" : ""}`}
          onClick={skipIntro}
          title="Click to skip intro"
        >
          <div className="intro-massive-wrap">
            <h1 className={`intro-massive-name ${introAnimate ? "animate-in" : ""}`}>
              {introText}
            </h1>
            <span className="intro-skip-hint">Click anywhere to skip</span>
          </div>
        </div>
      )}

      {/* Background — Bluish White to Black Uniform Grid Network & Ambient Motion */}
      <div className="home-bg-network" aria-hidden="true">
        <div className="home-bg-gradient" />
        <div className="home-bg-ambient-orb home-bg-ambient-1" />
        <div className="home-bg-ambient-orb home-bg-ambient-2" />
        <div className="home-bg-grid" />
        <div className="home-bg-grid-dots" />
        <div className="home-bg-light-sweep" />
      </div>

      {/* Hero Section */}
      <div className="home hero-section-card">
        <div className="hero-photo-container">
          <img
            id="profile-pic"
            className="hero-profile-reveal"
            src={profile}
            alt="Aswin Profile"
          />
          <div className="hero-photo-glow" />
        </div>

        <div className="intro">
          <h1 className="hero-heading-reveal">
            Hi, I'm Aswin 👋
          </h1>

          <b className="hero-role-reveal">
            AI Engineer | Generative AI | Full Stack Developer
          </b>
          <span className="hero-rule" />

          <br />

          <p className="hero-p-reveal hero-p-1">
            I'm a <strong>Third-Year B.Tech student</strong> specializing in
            <strong> Artificial Intelligence and Machine Learning</strong> at
            Kalaignar Karunanidhi Institute of Technology, Coimbatore.
            Passionate about designing intelligent software that bridges AI
            research with real-world applications.
          </p>

          <p className="hero-p-reveal hero-p-2">
            My interests span <strong>Generative AI</strong>,
            <strong> Large Language Models (LLMs)</strong>,
            <strong> Retrieval-Augmented Generation (RAG)</strong>,
            <strong> Agentic AI</strong>, and
            <strong> Full Stack Development</strong>. I enjoy building
            production-oriented applications that combine scalable backend
            systems with modern AI technologies.
          </p>

          <p className="hero-p-reveal hero-p-3">
            I continuously challenge myself through projects, internships,
            hackathons, and research while expanding my expertise in software
            engineering and applied artificial intelligence.
          </p>
        </div>
      </div>

      {/* Information Cards */}
      <div className="home-extra reveal-up">

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
      <div className="home reveal-up">
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
      <div className="home reveal-up">
        <h2>Currently Building</h2>

        <p>
          <strong>BookParkSmart</strong> — An Edge AI-powered smart parking
          management system leveraging Computer Vision and intelligent vehicle
          detection to optimize parking utilization and enable real-time parking
          monitoring.
        </p>
      </div>

      {/* Resume */}
      <div className="home reveal-up">
        <h2>Let's Connect</h2>

        <p>
          Interested in my work? Explore my experience, projects, technical
          skills, and achievements by viewing my resume.
        </p>

        <button className="btn hero-btn-reveal" onClick={handleResume}>
          View Resume
        </button>
      </div>
    </div>
  );
}

export default Home;