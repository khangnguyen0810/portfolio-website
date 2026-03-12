import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Container from "./Container/Container";
import Background from "./components/Background";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <Background>
        <Container>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                </>
              }
            />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </Container>
      </Background>
    </Router>
  );
}

export default App;
