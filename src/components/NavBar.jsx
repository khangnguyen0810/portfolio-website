import { Link, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

const NavBar = () => {
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();

    // If not on home page, navigate there first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      // Already on home page, just scroll
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="flex items-center justify-between">
      <img src="logo.png" className="w-[80px]" />

      <div className="flex space-x-[66px] font-mono text-[24px] text-white">
        <Link className="drop-shadow-lg" to="/">
          Home
        </Link>
        <a className="drop-shadow-lg" href="#about" onClick={handleAboutClick}>
          About
        </a>
        <Link className="drop-shadow-lg" to="/experience">
          Experience
        </Link>
        <a className="drop-shadow-lg" href="/projects">
          Projects
        </a>
      </div>
      <ContactForm />
    </nav>
  );
};

export default NavBar;
