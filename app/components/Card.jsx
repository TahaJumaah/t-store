import styles from "./Card.module.css";
import Image from "next/image";
import shoppingCart from "../../public/shoppingcart.png";
export default function Card() {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.cardimage}></div>
      <div className={styles.cardtitle}>
        <p>Title Here</p>
      </div>
      <div className={styles.cardtools}>
        <Image
          className={styles.cardtools_shoppingcart}
          src={shoppingCart}
        ></Image>
      </div>
    </div>
  );
}
