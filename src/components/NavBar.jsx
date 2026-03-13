import { Link, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

const NavBar = () => {
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
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
        <Link className="drop-shadow-lg" to="/projects">
          Experience
        </Link>
      </div>
      <ContactForm />
    </nav>
  );
};

export default NavBar;
