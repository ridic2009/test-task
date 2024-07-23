import { useContext } from "react";
import { AppContext } from "../../App";
import { IBlock } from "../../types";

import Block from "../Block";

export default function BlockList() {
  const { sortedItems, setItems } = useContext(AppContext);

  const resetCountdown = (id: string) => {
    setItems((prev: IBlock[]) =>
      prev.map((item) => (item.id === id ? { ...item, countdown: 20 } : item))
    );
  };

  return (
    <ul
      className='wrapper'
    >
      {sortedItems.length ? (
        sortedItems.map((item: IBlock) => (
          <Block
            key={item.id}
            id={item.id}
            bgColor={item.bgColor}
            countdown={item.countdown}
            onReset={() => resetCountdown(item.id)}
          />
        ))
      ) : (
        <h1>Нету блоков</h1>
      )}
    </ul>
  );
}
