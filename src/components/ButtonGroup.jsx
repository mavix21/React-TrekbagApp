import { Button } from "./Button.jsx";
import { useItemsStore } from "../store/itemsStore.js";

export function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsPacked);
  const markAllAsIncomplete = useItemsStore((state) => state.markAllAsUnpacked);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllAsComplete}>
        Mark all as completed
      </Button>

      <Button buttonType="secondary" onClick={markAllAsIncomplete}>
        Mark all as incomplete
      </Button>

      <Button buttonType="secondary" onClick={resetToInitial}>
        Reset to initial
      </Button>

      <Button buttonType="secondary" onClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
