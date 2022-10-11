import { useEffect, useState } from "react";
import getImages from "./getImages.js";

export default function App() {
  const [quotes, setQuotes] = useState<any>([]);
  const [randomQuote, setRandomQuote] = useState({ author: "", text: "" });
  const [imgUrl, setImgUrl] = useState("");

  async function getQuotes() {
    const result = await fetch("https://type.fit/api/quotes");
    const jsonResult = await result.json();
    setQuotes(jsonResult);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(quotes.length * Math.random())]);
  }, [quotes.length]);

  const RenderRandomQuote = () => {
    if (!randomQuote) return <></>;

    const { text, author } = randomQuote;
    getImages(author).then((url) => {
      if (url) setImgUrl(url);
    });
    return (
      <>
        <p>{text ?? ""}</p>
        <p>{author ?? "No author"}</p>
        <img src={imgUrl} alt="" />
      </>
    );
  };

  return (
    <div className="App">
      <RenderRandomQuote />
    </div>
  );
}
