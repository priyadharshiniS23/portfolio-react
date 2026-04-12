export default function Education() {
  return (
    <div className="section" id="edu">

      <h1 className="section-title">Education & Experiences</h1>

      <div className="edu-container">

        {/* Education */}
        <div>
          <h2 className="sub-title">Education</h2>

          <div className="card spaced">
            <li>RMK College of Engineering and Technology<br/><br/>
            2023 – 2027</li>
          </div>

          <div className="card spaced">
           <li> Government Girls Higher Secondary School, Cheyyar<br/><br/>
            6th – 12th</li>
          </div>

          <div className="card spaced">
            <li>Indo American School, Cheyyar<br/><br/>
            LKG – 5th</li>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="sub-title">Experience</h2>

          <div className="card spaced">
           <li>Full Stack Web Development Intern, <b>Codtech IT Solutions Pvt. Ltd</b>.<br/><br/>
            Worked on API integration, chatbot features, real-time collaboration.</li>
          </div>

          <div className="card spaced">
            <li>Full Stack Development Intern at <b>Future Intern</b> (Current)<br/><br/>
            Working on mini CRM and business website.</li>
          </div>
        </div>

      </div>
    </div>
  );
}