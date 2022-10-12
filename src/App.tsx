import React from "react";
import { Header, Main } from "./App.styled";

const RandomQuote = React.lazy(() => import("./RandomQuote"));

export default function App() {
  return (
    <div className="App">
      <Header>
        <h1>Quoty?</h1>
      </Header>
      <Main>
        <RandomQuote />
      </Main>
    </div>
  );
}
