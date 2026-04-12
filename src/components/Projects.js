export default function Projects() {
  return (
    <div className="section" id="projects">

      <h1 className="section-title">My Projects</h1>

      <div className="project-container">

        <div className="card">
          <img src="/weather.png" alt="Weather App"/>
          <h3>Weather App</h3>

          <a 
            href="https://github.com/priyadharshiniS23/API-INTEGRATION.git" 
            target="_blank" 
            rel="noreferrer"
            className="project-link"
          >
            <img src="/github.png" alt="github"/>
          </a>
        </div>

        <div className="card">
          <img src="/crm.png" alt="Mini CRM"/>
          <h3>Mini CRM</h3>

          <a 
            href="https://github.com/priyadharshiniS23/mini-crm.git" 
            target="_blank" 
            rel="noreferrer"
            className="project-link"
          >
            <img src="/github.png" alt="github"/>
          </a>
        </div>

      </div>

    </div>
  );
}