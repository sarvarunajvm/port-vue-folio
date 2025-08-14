import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Home } from './components/Home';
import { FloatingThemeToggle } from './components/FloatingThemeToggle';
import './styles/globals.css';

function App() {
  return (
    <HeroUIProvider>
      <ThemeProvider>
        <div className="h-screen w-screen overflow-hidden">
          <Home />
          <FloatingThemeToggle />
        </div>
      </ThemeProvider>
    </HeroUIProvider>
  );
}

export default App;
