import React from "react"; // it is a component not a page
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>®2023 Edisonprise. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/4.jpg"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
