import { render, screen } from '@testing-library/react';
import Preloader from '.';

test('loading the preloader', () => {
  render(<Preloader />)
  expect(screen.getByText('Loading')).toBeInTheDocument()
})