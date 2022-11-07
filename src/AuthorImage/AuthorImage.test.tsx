import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthorImage from '.';

test('Load image correctly', () => {
  render(<AuthorImage url='' />)
  const img = screen.getByTestId('image-background-id');
  expect(img).toBeInTheDocument()
})