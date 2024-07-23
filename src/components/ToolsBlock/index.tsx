import AddBlockForm from "../AddBlockForm";
import ShuffleButton from "../ShuffleButton";
import SortButton from "../SortButton";

import styles from "./index.module.css";

export default function Tools() {
  return (
    <div className={styles.tools}>
      <div className="wrapper">
        <div className={styles.inner}>
          <AddBlockForm />
          <div className={styles.btnsWrapper}>
            <ShuffleButton />
            <SortButton />
          </div>
        </div>
      </div>
    </div>
  );
}
