import { render, screen } from '@testing-library/react';
import Photo from './Photo';

describe('Photo', () => {
  it('renders an image with alt text', () => {
    render(<Photo />);
    const img = screen.getByAltText('Kurt Von Schaeffer - Software Developer');
    expect(img).toBeInTheDocument();
  });

  it('renders the correct image source', () => {
    render(<Photo />);
    const img = screen.getByAltText('Kurt Von Schaeffer - Software Developer');
    expect(img).toHaveAttribute('src');
    // Next.js Image component transforms the URL, so we check if it contains the original path
    expect(img.src).toContain('kd.png');
  });
}); 