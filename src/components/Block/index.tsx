import styles from "./index.module.css";

export default function Block({
  bgColor,
  countdown,
  onReset,
}: {
  id: string;
  bgColor: string;
  countdown: number;
  onReset: () => void;
}) {
  return (
    <div
      className={styles.block}
      style={{ backgroundColor: bgColor }}
      onClick={onReset}
    >
      {countdown}
    </div>
  );
}
