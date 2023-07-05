import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            voluptatum sapiente laudantium voluptatem officia soluta saepe
            repellendus? Quaerat repudiandae reiciendis in aperiam repellendus
            earum, animi quasi hic assumenda tempore quam?
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dicta veniam dignissimos itaque dolore! Adipisci nemo esse
            recusandae iste. Quibusdam cum possimus assumenda error a. Fugiat
            error cum temporibus voluptatibus?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            possimus distinctio sit ducimus minus tempora molestiae dolor
            similique architecto quod fugiat quasi. Sit ex ducimus officia.
            Voluptatum aspernatur libero repellat. Creative Illustrations
            <br />
            <br /> -Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
