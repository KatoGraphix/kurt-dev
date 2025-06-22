import { render, screen } from '@testing-library/react';
import Photo from './Photo';

describe('Photo', () => {
  it('renders an image with alt text', () => {
    render(<Photo src="/test.jpg" alt="Test Image" />);
    const img = screen.getByAltText('Test Image');
    expect(img).toBeInTheDocument();
  });
}); 