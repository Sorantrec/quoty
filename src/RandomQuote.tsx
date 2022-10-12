import { Suspense, useCallback, useEffect, useState } from "react";
import getImages from "./getImages.js";

interface IQuote {
  author: string;
  text: string;
}

const RandomQuote = () => {
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [randomQuote, setRandomQuote] = useState<IQuote>({
    author: "",
    text: "",
  });
  const [imgUrl, setImgUrl] = useState<string>("");

  async function getQuotes() {
    const result = await fetch("https://type.fit/api/quotes");
    const jsonResult = await result.json();
    console.log({ jsonResult });
    setQuotes(jsonResult);
  }

  const getNewQuote = useCallback(() => {
    setRandomQuote(quotes[Math.floor(quotes.length * Math.random())]);
  }, [quotes]);

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    getNewQuote();
  }, [quotes.length]);

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
      <Suspense fallback={<>Loading image</>}>
        {imgUrl.includes("undefined") ? null : <img src={imgUrl} alt="" />}
      </Suspense>
    </section>
  );
};

export default RandomQuote;
