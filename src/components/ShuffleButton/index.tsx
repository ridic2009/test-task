import shuffle from "lodash.shuffle";

import { useContext } from "react";
import { AppContext } from "../../App";

import { IBlock } from "../../types";

import styles from "./index.module.css";

export default function ShuffleButton() {
  const { items, setItems } = useContext(AppContext);

  return (
    <button
      className={styles.shuffleButton}
      disabled={items.length <= 1}
      onClick={() => setItems((prev: IBlock) => shuffle(prev))}
    >
      Перемешать
    </button>
  );
}
