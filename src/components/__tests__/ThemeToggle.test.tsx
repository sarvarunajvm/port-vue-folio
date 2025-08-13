import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeToggle } from '../ThemeToggle';
import { ThemeProvider } from '../../contexts/ThemeContext';

describe('ThemeToggle', () => {
  it('renders theme toggle switch', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const toggle = screen.getByRole('switch', { name: /toggle theme/i });
    expect(toggle).toBeInTheDocument();
  });

  it('toggles theme when clicked', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const toggle = screen.getByRole('switch', { name: /toggle theme/i });
    const initialTheme = document.documentElement.getAttribute('data-theme');
    
    fireEvent.click(toggle);
    
    const newTheme = document.documentElement.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);
  });

  it('persists theme to localStorage', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const toggle = screen.getByRole('switch', { name: /toggle theme/i });
    fireEvent.click(toggle);
    
    expect(setItemSpy).toHaveBeenCalledWith('theme', expect.any(String));
  });
});