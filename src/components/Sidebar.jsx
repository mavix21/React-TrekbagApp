import { AddItemForm } from "./AddItemForm.jsx";
import { ButtonGroup } from "./ButtonGroup.jsx";
import { useItemsStore } from "../store/itemsStore.js";

export function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
