import { create } from "zustand";
import { initialItems } from "../lib/constants.js";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsPacked: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: true })),
        }));
      },
      markAllAsUnpacked: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: false })),
        }));
      },
      addItem: (newItem) =>
        set((state) => ({
          items: [...state.items, newItem],
        })),
      deleteItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      toggleItem: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item,
          ),
        })),
    }),
    {
      name: "items",
    },
  ),
);
