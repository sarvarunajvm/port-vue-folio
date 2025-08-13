import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Projects } from '../Projects';

describe('Projects', () => {
  it('renders projects section', () => {
    render(<Projects />);
    
    const heading = screen.getByText('Open Source Projects');
    expect(heading).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    
    // Check for project titles
    expect(screen.getByText('Utils-Commons')).toBeInTheDocument();
    expect(screen.getByText('Port-Advancer')).toBeInTheDocument();
    expect(screen.getByText('vue-embed-gist')).toBeInTheDocument();
  });

  it('renders project links with correct hrefs', () => {
    render(<Projects />);
    
    const githubLinks = screen.getAllByText('View on GitHub');
    expect(githubLinks).toHaveLength(3);
    
    // Check first project link
    const firstLink = githubLinks[0].closest('a');
    expect(firstLink).toHaveAttribute('href', 'https://github.com/sarvarunajvm/utils-commons');
    expect(firstLink).toHaveAttribute('target', '_blank');
    expect(firstLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('uses soft UI classes for styling', () => {
    const { container } = render(<Projects />);
    
    const softSurfaces = container.querySelectorAll('.soft-surface');
    expect(softSurfaces.length).toBeGreaterThan(0);
    
    const softHovers = container.querySelectorAll('.soft-hover');
    expect(softHovers.length).toBeGreaterThan(0);
  });
});