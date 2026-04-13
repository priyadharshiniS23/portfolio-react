export default function About() {
  return (
    <div className="section" id="about">

      <h1 className="section-title">About Me</h1>

      <div className="about-container">

        <img 
          src="/avatar.png"
          alt="avatar"
          className="avatar-large"
          onClick={() => alert("Hi 👋, I’m the account holder 👤. Glad to have you here 😊—thank you for visiting my portfolio 💼.")}
        />

        <div className="about-content">
          <p>
            I am a third-year Computer Science Engineering student at RMK College of Engineering and Technology with a strong academic record (CGPA: 8.49). 
            I am a passionate full-stack developer with a keen interest in cloud computing and continuously expanding my expertise in cloud technologies. 
            I also possess a solid foundation in SQL and database management. 
            I am eager to gain practical industry experience and contribute to innovative, real-world projects.
          </p>

          <div className="socials">
            <a href="https://www.linkedin.com/in/priyadharshini-shanmugam-6566602b6" target="_blank" rel="noreferrer">
              <img src="/linkedin.png" alt="linkedin"/>
            </a>

            <a href="http://www.skillrack.com/profile/438790/f2fed89c86f9dae28d652842672a7a55a0c222c7" target="_blank" rel="noreferrer">
              <img src="/skillrack.png" alt="skillrack"/>
            </a>

            <a href="https://github.com/priyadharshiniS23" target="_blank" rel="noreferrer">
              <img src="/github.png" alt="github"/>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
