import Image from "next/image";
import styles from "./HomeBillboard.module.css";

export default function HomeBillboard() {
  return (
    <>
      <div className={styles.billboardcontainer}></div>
      <div className={styles.billboardcontainer2}>
        <p>Second One</p>
      </div>
    </>
  );
}

//   {/* <Image
//         src="/graphicscardsfolder/GeForce RTX 4090.jpg"
//         alt="Billboard of Graphics Cards"
//         fill={true}
//       ></Image> */}
