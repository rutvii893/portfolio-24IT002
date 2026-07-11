import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const skillsByCategory = {
    languages: ["C++", "Java", "JavaScript", "Python", "PHP"],
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
    backend: ["Node.js", "Express.js", "FastAPI", "Python"],
    database: ["MySQL"],
    ai: ["Google Gemini API", "LangChain", "FAISS", "OpenAI"],
    tools: ["Git & GitHub", "VS Code"],
  };

  return (
    <div id="top">
      <Navbar />
      <div className="page-shell">
        <Header name="Rutvi Arora" themeColor="#2563eb" />

        <main>
        <About />
        <Skills skillsByCategory={skillsByCategory} />
        <Projects />
      </main>

      <Footer email="arorarutvi32@email.com" />
      </div>
    </div>
  );
}

export default App;