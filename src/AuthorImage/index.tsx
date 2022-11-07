import { ImageBackground } from '../App/index.styled';
import IAuthorImage from './IAuthorImage';

export default function AuthorImage({ url }: IAuthorImage) {
  return (<ImageBackground data-testid='image-background-id' style={{ backgroundImage: `url('${url}')` }} />)
}