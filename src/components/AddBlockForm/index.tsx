import { useContext } from "react";
import { AppContext } from "../../App";

import styles from './index.module.css'

export default function AddBlockForm() {
    
  const { value, setValue, addBlock } = useContext(AppContext);

  return (
    <form className={styles.addBlockForm} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="hex">Введите hex</label>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Например, #ffa900"
        id="hex"
      />
      <button onClick={addBlock} type="submit">
        Добавить блок в случайное место
      </button>
    </form>
  );
}
