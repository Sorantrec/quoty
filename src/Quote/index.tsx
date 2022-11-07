import AuthorImage from "../AuthorImage";
import ErrorAuthorImage from "../AuthorImage/ErrorAuthorImage";
import Preloader from "../Preloader";

interface IQuote {
  quote: {
    author: string,
    text: string
  },
  url: string | undefined,
  getNewQuote: () => void
}


const Quote = ({ quote, url, getNewQuote }: IQuote) => {

  const { author, text } = quote;

  return (
    <section>
      {url?.length === 0 ? <Preloader fullViewport={false} /> : url ? <AuthorImage url={url} /> : <ErrorAuthorImage />}
      <div>
        <h3>{text ?? ""}</h3>
        <p>{author ?? "No author"}</p>
        <button onClick={() => getNewQuote()}>Get new quote</button>
      </div>
    </section>
  );
};

export default Quote;
