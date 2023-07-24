"use client";

import Image from "next/image";
import styles from "./HomeBillboard.module.css";
import graphicsCards from "@/public/database";
import HomeBillboardBtn from "./HomeBillboardBtn";
import { useState } from "react";
export default function HomeBillboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <div className={styles.billboardcontainer}>
        <HomeBillboardBtn
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          direction="Next"
        ></HomeBillboardBtn>
        <Image
          src={graphicsCards[currentSlide].imagesrc}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="Graphics Card Image"
        ></Image>

        <HomeBillboardBtn
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          direction="Previous"
        ></HomeBillboardBtn>
      </div>
    </>
  );
}

//   {/* <Image
//         src="/graphicscardsfolder/GeForce RTX 4090.jpg"
//         alt="Billboard of Graphics Cards"
//         fill={true}
//       ></Image> */}
