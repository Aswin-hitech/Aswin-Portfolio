function Platform() {
  return (
    <div className="page platforms-page">
      <h2>Platforms</h2>

      {/* GitHub */}
      <div className="card">
        <h3>GitHub</h3>
        <p>
          <img
            className="platform-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1CLK7ijKDV1QiPsBsAKkaSkKx0QWAec8Tg&s"
            alt="GitHub"
          />
          <br />
          <b>Username:</b> Aswin-Hitech
          <br />
          GitHub serves as my primary platform for showcasing AI, Full Stack,
          and software engineering projects. I actively use it for version
          control, collaboration, and maintaining production-ready codebases.
        </p>

        <a
          href="https://github.com/Aswin-Hitech"
          target="_blank"
          rel="noreferrer"
        >
          Visit My GitHub →
        </a>
      </div>

      {/* LinkedIn */}
      <div className="card">
        <h3>LinkedIn</h3>

        <p>
          <img
            className="platform-logo"
            src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png"
            alt="LinkedIn"
          />
          <br />
          I regularly share my technical journey, AI projects, certifications,
          internships, workshops, and professional milestones. Feel free to
          connect for networking and collaboration opportunities.
        </p>

        <a
          href="https://www.linkedin.com/in/aswin-n-62502b287"
          target="_blank"
          rel="noreferrer"
        >
          Visit My LinkedIn →
        </a>
      </div>

      <h2 style={{ marginTop: "40px" }}>Competitive Programming</h2>

      <div className="platforms-container">
        
      <div className="card">
        <h3>Problem Solving Highlights</h3>

        <ul>
          <li>
            <strong>1,190+ DSA Problems</strong> solved across LeetCode and
            CodeChef.
          </li>
          <li>
            Participated in <strong>86 Coding Contests</strong>.
          </li>
          <li>
            Maintained a <strong>233-day problem-solving streak</strong>.
          </li>
          <li>
            Consistently improving algorithmic thinking, data structures, and
            competitive programming skills.
          </li>
        </ul>
      </div>

        {/* CodeChef */}
        <div className="platform-card">
          <img
            className="platform-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdQ4CXvCSHFgNrLpu2lKVzj2eyL9j-HZXVw&s"
            alt="CodeChef"
          />

          <div className="platform-info">
            <h3>CodeChef</h3>

            <p><b>Current Rating:</b> 1601</p>
            <p><b>Highest Rating:</b> 1601</p>
            <p><b>Badge:</b> ⭐⭐⭐ 3-Star Coder</p>
            <p><b>Problems Solved:</b> 590+</p>
            <p><b>Global Rank:</b> 16,460</p>

            <a
              href="https://www.codechef.com/users/kit28aiml009"
              target="_blank"
              rel="noreferrer"
            >
              Visit My CodeChef →
            </a>
          </div>
        </div>

        {/* LeetCode */}
        <div className="platform-card">
          <img
            className="platform-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            alt="LeetCode"
          />

          <div className="platform-info">
            <h3>LeetCode</h3>

            <p><b>Current Rating:</b> 1531</p>
            <p><b>Highest Rating:</b> 1567</p>
            <p><b>Problems Solved:</b> 620+</p>
            <p><b>Global Ranking:</b> Top 36.3%</p>

            <a
              href="https://leetcode.com/u/Aswin_codekit"
              target="_blank"
              rel="noreferrer"
            >
              Visit My LeetCode →
            </a>
          </div>
        </div>

        {/* Codeforces */}
        <div className="platform-card">
          <img
            className="platform-logo"
            src="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcer3l19eex0wy900b101.jpg"
            alt="Codeforces"
          />

          <div className="platform-info">
            <h3>Codeforces</h3>

            <p><b>Current Rating:</b> 974</p>
            <p><b>Highest Rating:</b> 974</p>
            <p><b>Rank:</b> Newbie</p>

            <a
              href="https://codeforces.com/profile/kit28.24bam009"
              target="_blank"
              rel="noreferrer"
            >
              Visit My Codeforces →
            </a>
          </div>
        </div>

        {/* Codolio */}
        <div className="platform-card">
          <img
            className="platform-logo"
            src="https://codolio-pt.vercel.app/codolio_assets/gif-owl-transparent.GIF"
            alt="Codolio"
          />

          <div className="platform-info">
            <h3>Codolio</h3>

            <p><b>Status:</b> Active</p>
            <p><b>Purpose:</b> DSA Progress Tracking</p>
            <p><b>Focus:</b> Competitive Programming Portfolio</p>

            <a
              href="https://codolio.com/profile/Aswin_aiml009"
              target="_blank"
              rel="noreferrer"
            >
              Visit My Codolio →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Platform;