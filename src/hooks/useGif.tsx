import { useState } from "react";
import { ApiGifUrl } from "../api/routes";
import { useRequest } from "../api/useRequest";
import { GhiphyApiKey } from "../constants/APIKeys";
import { Gif, Img } from "../interfaces/GifInterface";

export const useGif = () => {
  const { getRequest } = useRequest();
  const [gifs, setgifs] = useState<Img[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const getGifs = async (category: string) =>
    await getRequest<Gif>(ApiGifUrl, {
      api_key: GhiphyApiKey,
      q: category,
      limit: 10,
    })
      .then(({ data }) =>
        setgifs(
          data.map(
            (
              {
                id,
                title,
                images: {
                  downsized_medium: { url },
                },
              },
              _
            ) => ({
              id,
              title,
              url,
            })
          )
        )
      )
      .finally(() => setisLoading(false));

  return { getGifs, gifs, isLoading };
};
