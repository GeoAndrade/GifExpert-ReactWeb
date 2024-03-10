import { useEffect } from "react";
import { useGif } from "../hooks/useGif";
import { GifItem } from "./GifItem";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { getGifs, gifs, isLoading } = useGif();
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="card-grid">
          {gifs.map((img, index) => (
            <GifItem key={index} img={img} />
          ))}
        </div>
      )}
    </>
  );
};
