import { render, screen } from "@testing-library/react";

import Quote from './index';

test('render Quote component', () => {
  const quote = {
    text: 'Mock quote text',
    author: 'Mark Twain'
  };
  const url = 'google.com';
  const getNewQuote = () => null;

  render(<Quote quote={quote} url={url} getNewQuote={getNewQuote} />)

  expect(screen.getByText(quote.author)).toBeInTheDocument()
  expect(screen.getByTestId('image-background-id')).toBeInTheDocument()
})