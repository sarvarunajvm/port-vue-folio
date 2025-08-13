import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <HeroUIProvider>
      <ThemeProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HeroUIProvider>
  );
}

export default App;
