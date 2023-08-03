import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length === 0) return;

    // setCategories( (categories) => [ ...categories, inputValue ]) // Acá react permite el uso de un callback que en este caso lo uso como el valor ACTUAL del estado.

    setInputValue('')
    onNewCategory(inputValue.trim())
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
