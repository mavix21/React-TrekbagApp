import { EmptyView } from "./EmptyView.jsx";
import Select from "react-select";
import { useMemo, useState } from "react";
import { useItemsStore } from "../store/itemsStore.js";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return 0;
      }),
    [items, sortBy],
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}

      {sortedItems.map((item) => (
        <Item
          item={item}
          key={item.name}
          onRemoveItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onRemoveItem: deleteItem, onToggleItem: toggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleItem(item.id)}
        />{" "}
        {item.name}
      </label>
      <button type="button" onClick={() => deleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
