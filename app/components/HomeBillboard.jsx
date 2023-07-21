import Image from "next/image";
import styles from "./HomeBillboard.module.css";
import graphicsCards from "@/public/database";
import HomeBillboardBtn from "./HomeBillboardBtn";
export default function HomeBillboard() {
  return (
    <>
      <div className={styles.billboardcontainer}>
        <HomeBillboardBtn direction="Next"></HomeBillboardBtn>
        <Image
          src={graphicsCards[0].imagesrc}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        ></Image>

        <HomeBillboardBtn direction="Previous"></HomeBillboardBtn>
      </div>
    </>
  );
}

//   {/* <Image
//         src="/graphicscardsfolder/GeForce RTX 4090.jpg"
//         alt="Billboard of Graphics Cards"
//         fill={true}
//       ></Image> */}
