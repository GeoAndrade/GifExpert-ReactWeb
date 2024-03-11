import React from "react";
import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";
describe("Teste <GifItem/>", () => {
  const url =
    "ttps://media4.giphy.com/media/VcXd8gybC08KwAsKh6/giphy.gif?cid=b95cdbb6tzy6x5mspi8rz983pwyf6hsg5c4f0epmhyv0v2ls&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  const title = "test";
  test("debe mostrar la imagen con el url y el alt indicado", () => {
    render(<GifItem img={{ id: "1", url, title }} />);
    // screen.debug();
    const { src, alt } = screen.getByRole<HTMLImageElement>("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test("debe mostrar el titulo en el componente ", () => {
    render(<GifItem img={{ id: "1", url, title }} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
