import { renderHook, waitFor } from "@testing-library/react";
import { useGif } from "../../src/hooks/useGif";
describe("Pruebas de getGifs", () => {
  test("debe retornar un arreglo de gifs", async () => {
    const {
      result: {
        current: { getGifs, gifs, isLoading },
      },
    } = renderHook(() => useGif());
    await getGifs("Digimon");
    await waitFor(() => renderHook(() => expect(gifs).toBeGreaterThan(0)), {
      timeout: 5000,
    }).finally(() => {});
  });
});
