
import Navbar from './components/Navbar';
import Home from './components/Home';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';




function App() {
  return (
    <>
      <Navbar />
      
      <Home />
      <AboutPage />
      <Projects />
      <SkillsPage />
     <ContactPage />
     <Footer />
    </>
  );
}
export default App