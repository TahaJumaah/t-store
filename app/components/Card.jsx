import styles from "./Card.module.css";
import Image from "next/image";
import shoppingCart from "../../public/shoppingcart.png";
import things from "@/public/database";

export default function Card() {
  const myThings = things.map((thing) => {
    return (
      <>
        <div className={styles.cardcontainer} key={thing.id}>
          <div className={styles.cardimage}></div>
          <div className={styles.cardtitle}>
            <p>
              {thing.title} | {thing.price}
            </p>
          </div>
          <div className={styles.cardtools}>
            <Image
              className={styles.cardtools_shoppingcart}
              src={shoppingCart}
            ></Image>
          </div>
        </div>
      </>
    );
  });

  return <div className={styles.maincontainer}>{myThings}</div>;
}
