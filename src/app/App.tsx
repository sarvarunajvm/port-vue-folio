import { useEffect, useState } from 'react';

import { Home } from '../pages/Home';
import { FloatingThemeToggle } from '../shared/components/theme/FloatingThemeToggle';
import { NeomorphicLoader } from '../shared/components/ui';
import '../styles/globals.css';
import { AppProviders } from './providers';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <NeomorphicLoader onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <AppProviders>
      <>
        <Home />
        <FloatingThemeToggle />
      </>
    </AppProviders>
  );
}

export default App;
