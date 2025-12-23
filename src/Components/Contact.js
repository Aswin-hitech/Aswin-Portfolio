import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "kit28.24bam009@email.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // reset text after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact">
      <h1>Let's Connect</h1>

      <p className="intro">
        Open to collaborations, discussions, and meaningful tech conversations.
      </p>

      <div className="card">
        <div className="row">
          <span className="label">Email</span>
          <div className="value">
            <span>{email}</span>
            <button onClick={handleCopy}>
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
        </div>

        <div className="row">
          <span className="label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/aswin-n-62502b287"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aswin's LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
