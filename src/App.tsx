import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

function App() {
  const [categories, setcategories] = useState(["Digimon"]);

  const addCategory = (value: string) =>
    setcategories((prevCategories) =>
      prevCategories.includes(value)
        ? [...prevCategories]
        : [...prevCategories, value]
    );
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory getValue={addCategory} />
      {categories.map((item, index) => (
        <GifGrid key={index} category={item} />
      ))}
    </>
  );
}

export default App;
