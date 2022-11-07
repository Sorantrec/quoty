import React, { useEffect, useState } from "react";
import { AppWrapper, Header, Main } from "./index.styled";

import getImages from "../utils/getImages";
import getQuotes from "../utils/getQuotes";
import Preloader from "../Preloader";

const Quote = React.lazy(() => import("../Quote"));

export default function App() {

  const [quote, setQuote] = useState({
    author: '',
    text: ''
  })

  const [imgUrl, setImgUrl] = useState<string | undefined>('');

  const [loaded, setLoaded] = useState<boolean>(false);

  const getNewQuote = () => {
    setLoaded(false);
    setQuote({
      author: '',
      text: ''
    });
    setImgUrl('');

    getQuotes().then(
      (quotes) => {
        const randomQuote = quotes[Math.floor(quotes.length * Math.random())];
        setQuote(randomQuote);
        return randomQuote;
      })
      .then(
        (quote) => {
          getImages(quote.author).then((url) => setImgUrl(url))
        }).then(() => setLoaded(true))
  }

  useEffect(() => {
    getNewQuote();
  }, [])

  return (
    <AppWrapper>
      {
        loaded ? <>
          <Header>
            <h1>Quoty?</h1>
          </Header>
          <Main>
            <Quote quote={quote} url={imgUrl} getNewQuote={getNewQuote} />
          </Main>
        </> : <Preloader fullViewport={true} />
      }
    </AppWrapper>
  );
}
