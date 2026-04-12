import { useState } from "react";

export default function Skills() {

  const data = {
    programming: ["Java", "JavaScript"],
    development: [
      "HTML, CSS, JS",
      "Node.js & Express.js",
      "MySQL",
      "React.js"
    ],
    tools: ["Git & GitHub", "VS Code", "MySQL Workbench"]
  };

  const [selected, setSelected] = useState(null);

  return (
    <div className="section" id="skills">

      <h1 className="section-title">Technical Skills</h1>

      <div className="skill-boxes">

        <div className="card clickable" onClick={() => setSelected("programming")}>
          Programming
        </div>

        <div className="card clickable" onClick={() => setSelected("development")}>
          Development
        </div>

        <div className="card clickable" onClick={() => setSelected("tools")}>
          Tools
        </div>

      </div>

      {selected && (
        <div className="skill-list">
          <h2 className="sub-title">{selected}</h2>

          <ul>
            {data[selected].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}