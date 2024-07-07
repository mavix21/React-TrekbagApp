import { useItemsContext } from "../hooks/useItemsContext.js";

export function Counter() {
  const { numberOfItemsPacked, totalNumberOfItems } = useItemsContext();

  return (
    <p>
      <b>{numberOfItemsPacked}</b> of {totalNumberOfItems} items packed
    </p>
  );
}
