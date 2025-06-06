import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ExperiencePage from "./pages/Experience";
import ProjectsPage from "./pages/Projects";
import SkillsPage from "./pages/Skills";
import ContactPage from "./pages/Contact";

function App() {
  // User information from resume
  const userInfo = {
    name: "Adama Sorho",
    email: "adamasorho36@gmail.com",
    phone: "641-233-9473",
    linkedinUrl: "https://www.linkedin.com/in/adamasorho/",
    location: "Austin, Texas",
    avatarUrl: "images/adama.png", // Optional
  };

  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header
          name={userInfo.name}
          avatarUrl={userInfo.avatarUrl}
          email={userInfo.email}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer
          name={userInfo.name}
          email={userInfo.email}
          phone={userInfo.phone}
          linkedinUrl={userInfo.linkedinUrl}
          location={userInfo.location}
        />
      </div>
    </Router>
  );
}

export default App;
