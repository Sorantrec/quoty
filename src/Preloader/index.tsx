import { PreloaderIcon, PreloaderWrapper } from './../App/index.styled';

export default function Preloader({ fullViewport = false }) {
  return (
    <PreloaderWrapper fullViewport={fullViewport}>
      <div>
        <PreloaderIcon />
        <p>Loading</p>
      </div>
    </PreloaderWrapper>
  )
}