"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
          direction="Previous"
        ></HomeBillboardBtn>
        <div className={styles.imagecontainer}>
          <Image
            src={graphicsCards[currentSlide].imagesrc}
            alt="Graphics Card Image"
            height={600}
            width={1000}
          ></Image>
        </div>

        <HomeBillboardBtn
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          direction="Next"
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
