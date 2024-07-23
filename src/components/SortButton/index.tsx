import { useContext } from "react";
import { AppContext } from "../../App";

export default function SortButton() {
  const { sort, changeSort } = useContext(AppContext);
  return (
    <button onClick={changeSort} style={{ backgroundColor: sort.color }}>
      {sort.text}
    </button>
  );
}
