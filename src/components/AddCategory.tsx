import { useState } from "react";

interface Props {
  getValue(value: string): void;
}

export const AddCategory = ({ getValue }: Props) => {
  const [value, setvalue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value.trim().length > 1) getValue(value);
      }}
    >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={value}
        onChange={({ target: { value } }) => setvalue(value)}
      />
    </form>
  );
};
