import styled from 'styled-components';

const font = 'Nunito Sans';
const minHeight = `
  max-height: 300px;
  min-height: 300px;
`
const flexCentered = `
  display: flex;
  justify-content: center;
  align-items: center;
`
const colors = {
  white: '#f9f9f9',
  accent: '#00ffe7',
  dark: '#222',
  red: '#ff0000b8'
}

export const AppWrapper = styled.div`
  height: 100vh;
`

export const Header = styled.header`
  ${flexCentered}

  h1 {
    font-family: ${font};
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
  ${flexCentered}
  align-items: flex-start;

  h3 {
    font-family: ${font};
    font-weight: 900;
    letter-spacing: -0.9px;
    font-size: 42px;
    margin: 10px 0;
  }

  section {
    width: 70vw;
    margin: 0 auto;

    div {
      padding: 10px 40px;
    }

    button {
      border: none;
      background-color: ${colors.accent};
      color: ${colors.dark};
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
`

export const PreloaderWrapper = styled.div`
${props => props.fullViewport ?
    `
    ${flexCentered}
    height: 100vh;
    left: 50%;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
  `: `
    ${flexCentered}
    ${minHeight}
    position: relative;
  `
  }

  &::after {
    content: '';
    display: block;
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  p {
    font-size: 24px;
    font-family: ${font};
    position: relative;
    z-index: 1;
    margin-top: 10px;
  }
`;

export const PreloaderIcon = styled.span`
  position: relative;
  overflow: hidden;
  display: inline-block;
  z-index: 1;

  @keyframes animateIcon {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  
  animation: animateIcon 1s ease-in-out infinite;

  &::before {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    border: 10px solid #00ffe7;
    border-radius: 50px;
  }

  &::after {
    content:'';
    display: block;
    width: 100px;
    height: 60px;
    background-color: ${colors.white};
    position: absolute;
    top: -30px;
    left: 50%;
  }
`

export const Error = styled.div`
  ${minHeight}
  ${flexCentered}

  h5 {
    font-size: 52px;
  }
  
  p {
    font-family: ${font};
    color: ${colors.red};
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
  }
`

export const ImageBackground = styled.div`
  ${minHeight}
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
`