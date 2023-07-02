import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>The Best Pizza In Town</h2>
      <div className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ullam
        autem reiciendis qui dignissimos velit veniam neque illum laboriosam? In
        libero inventore quae dolore ratione recusandae rerum molestiae
        blanditiis doloremque!
      </div>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
