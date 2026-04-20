import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <SkillsPage />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;