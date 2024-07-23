import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { ToolsBlock, BlockList } from "./components";
import { IBlock, ISort } from "./types";

import "./css/app.css";

export const AppContext = createContext<any>({});

const sorts = [
  { type: "unsorted", text: "Без сортировки", color: "#eee" },
  { type: "asc", text: "По возрастанию времени", color: "#0f8acb" },
  { type: "desc", text: "По убыванию времени", color: "#bd2f33" },
];

export default function App() {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }
    return hex;
  };

  const getRandomArray = () => {
    return [
      ...new Array(Math.floor(Math.random() * 999 + 1))
        .fill(null)
        .map((_) => ({ id: uuid(), bgColor: getRandomColor(), countdown: 20 })),
    ];
  };

  const [items, setItems] = useState<IBlock[]>(getRandomArray);
  const [value, setValue] = useState<string>("");
  const [sort, setSort] = useState<ISort>(sorts[0]);
  const [sortedItems, setSortedItems] = useState(items);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      setItems((prev) =>
        prev
          .map((item) => ({
            ...item,
            countdown: item.countdown > 0 ? item.countdown - 1 : 0,
          }))
          .filter((item) => item.countdown > 0)
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [sort, items]);

  useEffect(() => {
    const sorted = [...items];
    switch (sort.type) {
      case "asc":
        sorted.sort((a, b) => a.countdown - b.countdown);
        break;
      case "desc":
        sorted.sort((a, b) => b.countdown - a.countdown);
        break;
      default:
        break;
    }
    setSortedItems(sorted);
  }, [items, sort]);

  const addBlock = () => {
    const newArray = [...items];
    let randIdx = Math.floor(Math.random() * (newArray.length + 1));

    if (value.match(/^#[a-fA-F0-9]{6}$|^#[a-fA-F0-9]{3}$/gm)) {
      newArray.splice(randIdx, 0, {
        id: uuid(),
        bgColor: value,
        countdown: 20,
      });
      setItems(newArray);
      setValue("");
    } else {
      alert("Ошибка при добавлении блока");
    }
  };

  const changeSort = () => {
    const nextIndex =
      (sorts.findIndex((s) => s.type === sort.type) + 1) % sorts.length;
    setSort(sorts[nextIndex]);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        sortedItems,
        value,
        sort,
        setItems,
        setValue,
        setSort,
        changeSort,
        addBlock,
      }}
    >
      <section>
        <ToolsBlock />
        <BlockList />
      </section>
    </AppContext.Provider>
  );
}
