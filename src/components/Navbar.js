import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <Link to="/">
        <div
          className="logo"
          style={{
            left: 119,
            top: 30,
            width: 191,
            height: 38,
            color: "black",
            fontSize: 40,
            fontFamily: "Porter Sans Block",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          David Yu
        </div>
      </Link>

      <div className="nav_links">
        <Link to="/">
          <span
            className="home"
            style={{
              width: 0,
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "400",
              textTransform: "uppercase",
              wordWrap: "break-word",
            }}
          >
            Home
          </span>
        </Link>
        <Link to="/portfolio">
          <span
            className="projects"
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "400",
              textTransform: "uppercase",
              wordWrap: "break-word",
            }}
          >
            Projects
          </span>
        </Link>
        <Link to="/resume">
          <span
            className="resume"
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "Poppins",
              fontWeight: "400",
              textTransform: "uppercase",
              wordWrap: "break-word",
            }}
          >
            resume
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
