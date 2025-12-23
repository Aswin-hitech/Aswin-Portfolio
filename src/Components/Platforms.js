
function Platform() {
  return (
    <div className="page platforms-page">
      <h2>Platforms</h2>

      <div className="card">
        <h3>GitHub</h3>
        <p>
          <img class ="platform-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1CLK7ijKDV1QiPsBsAKkaSkKx0QWAec8Tg&s" alt="github"></img>
          <br></br>
          <b>ID:</b> Aswin-Hitech <br />
          I use GitHub to manage my projects, track progress, and collaborate.
          Most of my academic and personal projects are hosted here.
        </p>
        <a
          href="https://github.com/Aswin-Hitech"
          target="_blank"
          rel="noreferrer"
        >
          Visit Aswin's GitHub →
        </a>
      </div>

      <div className="card">
        <h3>LinkedIn</h3>
        <p>
         <img class ="platform-logo" src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="github"></img>
            <br></br>
          I share my learning journey, certifications, and professional updates
          on LinkedIn. You can contact me directly through LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/aswin-n-62502b287"
          target="_blank"
          rel="noreferrer"
        >
          Visit Aswin's LinkedIn →
        </a>
      </div>

      <h2 style={{ marginTop: "40px" }}>Coding Platforms</h2>

      <div className="platforms-container">

        <div className="platform-card">
          <img class ="platform-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdQ4CXvCSHFgNrLpu2lKVzj2eyL9j-HZXVw&s" alt="github"></img>
          <div className="platform-info">
            <h3>CodeChef</h3>
            <p><b>Rating: 1416</b></p>
            <p><b>Div: 3 </b></p>
            <p><b>Contest Participated: 43</b></p>
            <a
              href= "https://www.codechef.com/users/kit28aiml009"
              target="_blank"
              rel="noreferrer"
            >
              Visit Aswin's CodeChef →
            </a>
          </div>
        </div>

        {/* LeetCode */}
        <div className="platform-card">
         <img class ="platform-logo" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="github"></img>
          <div className="platform-info">
            <h3>LeetCode</h3>
            <p><b>Rating: 1440 </b></p>
            <p><b>Level:</b> Beginner</p>
            <a
              href="https://leetcode.com/u/Aswin_codekit"
              target="_blank"
              rel="noreferrer"
            >
              Visit Aswin's LeetCode →
            </a>
          </div>
        </div>

        {/* Codeforces */}
        <div className="platform-card">
          <img class ="platform-logo" src="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcer3l19eex0wy900b101.jpg" alt="github"></img>
          <div className="platform-info">
            <h3>Codeforces</h3>
            <p><b>Rating: 850</b></p>
            <a
              href="https://codeforces.com/profile/kit28.24bam009"
              target="_blank"
              rel="noreferrer"
            >
              Visit Aswin's Codeforces →
            </a>
          </div>
        </div>

        {/* Codolio */}
        <div className="platform-card">
          <img class ="platform-logo" src="https://codolio-pt.vercel.app/codolio_assets/gif-owl-transparent.GIF" alt="github"></img>
          <div className="platform-info">
            <h3>Codolio</h3>
            <p><b>Status:</b> Active</p>
            <p><b>Focus:</b> DSA Tracking</p>
            <a
              href="https://https://codolio.com/profile/Aswin_aiml009"
              target="_blank"
              rel="noreferrer"
            >
              Visit Aswin's Codolio →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
