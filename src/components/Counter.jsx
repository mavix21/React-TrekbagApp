import { useItemsStore } from "../store/itemsStore.js";

export function Counter() {
  const totalNumberOfItems = useItemsStore((state) => state.items.length);
  const numberOfItemsPacked = useItemsStore(
    (state) => state.items.filter((item) => item.packed).length,
  );

  return (
    <p>
      <b>{numberOfItemsPacked}</b> of {totalNumberOfItems} items packed
    </p>
  );
}
