import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);

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

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="relative flex items-center justify-between">
      <img src="logo.png" className="w-[80px]" />

      {/* Desktop links */}
      <div className="hidden space-x-[66px] font-mono text-[24px] text-white md:flex">
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
          Projects
        </Link>
      </div>

      <div className="hidden md:block">
        <ContactForm />
      </div>

      {/* Hamburger button */}
      <button
        className="z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-[2px] w-7 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-[2px] w-7 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-[2px] w-7 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile dropdown */}
      <div
        className={`absolute top-full left-0 z-40 flex w-screen flex-col items-center gap-6 bg-black/90 py-8 font-mono text-[22px] text-white backdrop-blur-sm transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <Link className="drop-shadow-lg" to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <a className="drop-shadow-lg" href="#about" onClick={handleAboutClick}>
          About
        </a>
        <Link
          className="drop-shadow-lg"
          to="/experience"
          onClick={handleLinkClick}
        >
          Experience
        </Link>
        <Link
          className="drop-shadow-lg"
          to="/projects"
          onClick={handleLinkClick}
        >
          Projects
        </Link>
        <ContactForm />
      </div>
    </nav>
  );
};

export default NavBar;
