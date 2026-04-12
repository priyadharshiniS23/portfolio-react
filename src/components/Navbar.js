export default function Navbar() {

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="navbar">

      <div className="nav-item" onClick={() => go("home")}>🏠<p>Home</p></div>
      <div className="nav-item" onClick={() => go("about")}>👤<p>About</p></div>
      <div className="nav-item" onClick={() => go("skills")}>📘<p>Skills</p></div>
      <div className="nav-item" onClick={() => go("edu")}>🎓<p>Education</p></div>
      <div className="nav-item" onClick={() => go("projects")}>📁<p>Projects</p></div>
      <div className="nav-item" onClick={() => go("contact")}>📞<p>Contact</p></div>

    </div>
  );
}