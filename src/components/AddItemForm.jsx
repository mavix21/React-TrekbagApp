import { Button } from "./Button.jsx";
import { useRef, useState } from "react";

export function AddItemForm({ onAddItem: handleAddItem }) {
  const [itemText, setItemText] = useState('');
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemText || itemText.trim() === '') {
      alert('Please enter an item name.');
      inputRef.current.focus();

      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false
    };

    handleAddItem(newItem);
    setItemText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new item..."
        value={itemText}
        onChange={(event) => setItemText(event.target.value)}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
