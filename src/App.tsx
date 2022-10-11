import { useEffect, useState } from "react";
import getImages from "./getImages.js";
import { Header, Main } from './App.styled';

export default function App() {
  const [quotes, setQuotes] = useState<any>([]);
  const [randomQuote, setRandomQuote] = useState({ author: "", text: "" });
  const [imgUrl, setImgUrl] = useState("");

  async function getQuotes() {
    const result = await fetch("https://type.fit/api/quotes");
    const jsonResult = await result.json();
    setQuotes(jsonResult);
  }

  const getNewQuote = () => {
    setRandomQuote(quotes[Math.floor(quotes.length * Math.random())]);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    getNewQuote()
  }, [quotes.length]);

  const RenderRandomQuote = () => {
    if (!randomQuote) return <></>;

    const { text, author } = randomQuote;
    getImages(author).then((url) => {
      if (url) setImgUrl(url);
    });
    return (
      <section>
        <div>
          <h3>{text ?? ""}</h3>
          <p>{author ?? "No author"}</p>
          <button onClick={() => getNewQuote()}>Get new quote</button>
        </div>
        {imgUrl.includes('undefined') ? null : <img src={imgUrl} alt="" />}
      </section>
    );
  };

  return (
    <div className="App">
      <Header>
        <h1>Quoty?</h1>
      </Header>
      <Main>
        <RenderRandomQuote />
      </Main>
    </div>
  );
}
