import { AddItemForm } from "./AddItemForm.jsx";
import { ButtonGroup } from "./ButtonGroup.jsx";
import { useItemsContext } from "../hooks/useItemsContext.js";

export function Sidebar() {
  const { handleAddItem } = useItemsContext();

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
