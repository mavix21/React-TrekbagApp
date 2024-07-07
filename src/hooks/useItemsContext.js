import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider.jsx";

export const useItemsContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider",
    );
  }

  return context;
};
