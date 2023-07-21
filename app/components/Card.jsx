import styles from "./Card.module.css";
import Image from "next/image";
import shoppingCart from "../../public/shoppingcart.png";
import graphicsCards from "@/public/database";

export default function Card() {
  const graphicCardsList = graphicsCards.map((graphicsCards) => {
    // console.log("this is working");
    return (
      <>
        <div className={styles.cardcontainer} key={graphicsCards.id}>
          <div className={styles.cardimage}>
            <Image
              src={graphicsCards.imagesrc}
              width={250}
              height={200}
              alt="Graphics Card Image"
            ></Image>
          </div>
          <div className={styles.cardtitle}>
            <p>
              {graphicsCards.manufacturer} {graphicsCards.graphicsCardName}
            </p>
          </div>
          <div className={styles.cardtools}>
            <p className="styles.price">{graphicsCards.price}</p>
            <Image
              className={styles.cardtools_shoppingcart}
              src={shoppingCart}
              alt="Shopping Cart Icon"
              width={50}
              height={50}
            ></Image>
          </div>
        </div>
      </>
    );
  });

  return <div className={styles.maincontainer}>{graphicCardsList}</div>;
}
