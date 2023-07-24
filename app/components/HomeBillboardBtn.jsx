"use client";
import styles from "./HomeBillboard.module.css";
export default function HomeBillboardBtn({
  currentSlide,
  setCurrentSlide,
  direction,
}) {
  function handleClick() {
    if (direction === "Next") {
      setCurrentSlide(currentSlide + 1);
    }
    if (direction === "Previous") {
      ((currentSlide) => 0)
        ? setCurrentSlide(currentSlide + 1)
        : setCurrentSlide(11);
    }
  }

  return (
    <button onClick={handleClick} className={styles.btn}>
      {direction}
    </button>
  );
}
