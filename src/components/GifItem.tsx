import { Img } from "../interfaces/GifInterface";

interface Props {
  img: Img;
}
export const GifItem = ({ img: { url, title } }: Props) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
