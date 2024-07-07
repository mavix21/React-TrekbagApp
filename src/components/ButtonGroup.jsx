import { Button } from "./Button.jsx";
import { useItemsContext } from "../hooks/useItemsContext.js";

export function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();

  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAllAsComplete}>
        Mark all as completed
      </Button>

      <Button buttonType="secondary" onClick={handleMarkAllAsIncomplete}>
        Mark all as incomplete
      </Button>

      <Button buttonType="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>

      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
