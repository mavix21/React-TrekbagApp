import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants.js";

export const ItemsContext = createContext({});

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems,
  );
  const totalNumberOfItems = items.length;
  const numberOfItemsPacked = items.filter((item) => item.packed).length;

  const handleAddItem = (newItem) => setItems((prev) => [...prev, newItem]);

  const handleToggleItem = (id) =>
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );

  const handleRemoveAllItems = () => setItems([]);

  const handleResetToInitial = () => setItems(initialItems);

  const handleMarkAllAsComplete = () =>
    setItems((prev) => {
      console.log(prev);
      return prev.map((item) => ({ ...item, packed: true }));
    });

  const handleMarkAllAsIncomplete = () =>
    setItems((prev) => {
      console.log(prev);
      return prev.map((item) => ({ ...item, packed: false }));
    });

  const handleRemoveItem = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        totalNumberOfItems,
        numberOfItemsPacked,
        handleAddItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleRemoveItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
