import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Nunito Sans';
    font-size: 72px;
    font-weight: 900;
  }

  height: 16vh;
`

export const Main = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Nunito+Sans:wght@400;700;900&display=swap');
  font-family: 'Didact Gothic';
  min-height: 78vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-family: 'Nunito Sans';
    font-weight: 900;
    letter-spacing: -0.9px;
    font-size: 42px;
    margin-bottom: 10px;
  }

  section {
    display: flex;
    align-items: center;
    width: 70vw;
    margin: 0 auto;

    div {
      width: 100%;
      padding: 10px 40px;
    }

    button {
      border: none;
      background-color: #00ffe7;
      color: #222;
      padding: 10px 20px;
      border-radius: 55px;
      font-weight: 700;
      margin-top: 30px;
      font-size: 16px;
      cursor: pointer;
      transition: box-shadow .2s ease-in-out;
      -webkit-box-shadow: 0px 5px 10px 0px rgba(66, 68, 90, 0.45);
      -moz-box-shadow: 0px 5px 10px 0px rgba(66, 68, 90, 0.45);
      box-shadow: 0px 5px 10px 0px rgba(66, 68, 90, 0.45);

      &:hover {
        box-shadow: none;
      }
    }
  }

  p {
    font-size: 24px;
  }

  img {
    max-width: 350px;
    min-width: 350px;
  }
`