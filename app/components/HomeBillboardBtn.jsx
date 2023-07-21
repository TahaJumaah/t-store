"use client";
import styles from "./HomeBillboard.module.css";
export default function HomeBillboardBtn({ direction }) {
  function handleClick() {
    console.log({ direction, currentIndex } + "Pressed");
  }

  return (
    <button onClick={handleClick} className={styles.btn}>
      {direction}
    </button>
  );
}
