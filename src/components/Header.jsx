import { Box, Drawer } from "@mui/material";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import Home from "/src/pages/Home";
import Projects from "/src/pages/Projects";
import About from "/src/pages/About";
import Resume from "/src/pages/Resume";
import Contact from "/src/pages/Contact";
import Project from "/src/pages/Project";
import Impact from "/src/pages/Impact";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const navList = (
    <Box
      sx={{
        width: "260px",
        height: "100%",
        padding: "4rem 0 2rem 2rem ",
      }}
    >
      <ul className="navList">
        <li className="navListItem">
          <NavLink
            to="/projects"
            className="navLinkItem"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">code</span>
            Projects
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            to="/impact"
            className="navLinkItem"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">trending_up</span>
            Impact
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            to="/resume"
            className="navLinkItem"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">description</span>
            Resume
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            to="/contact"
            className="navLinkItem"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">mail</span>
            Contact
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            to="/about"
            className="navLinkItem"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">person</span>
            About
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            to="/"
            className="navLinkItem"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">home</span>
            Home
          </NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <HashRouter>
      <div className="Header container">
        <nav>
          <ul>
            <li className="NameText">
              <NavLink to="/" end>
                ./mark
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <span
                className="material-symbols-outlined menuIcon"
                onClick={toggleDrawer(true)}
              >
                {isOpen ? "menu_open" : "menu"}
              </span>
            </li>
          </ul>
        </nav>
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: "var(--background-color)",
              color: "var(--color)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
            },
          }}
          transitionDuration={600}
          SlideProps={{
            easing: {
              enter: "cubic-bezier(0.4, 0, 0.2, 1)",
              exit: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
          }}
        >
          {navList}
        </Drawer>
        <Routes>
          <Route exact strict path="/" element={<Home />} end />
          <Route exact strict path="/projects" element={<Projects />} end />
          <Route path="/projects/:projectId" element={<Project />} end />
          <Route exact strict path="/about" element={<About />} end />
          <Route exact strict path="/impact" element={<Impact />} end />
          <Route exact strict path="/resume" element={<Resume />} end />
          <Route exact strict path="/contact" element={<Contact />} end />
        </Routes>
      </div>
    </HashRouter>
  );
}
