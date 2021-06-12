import React from "react";
import styles from "./ListItem.module.css";

function ListItem(props) {
  return (
    <div
      className={
        props.type === "Income"
          ? styles.income + " " + styles.container
          : styles.expense + " " + styles.container
      }
    >
      <div className={styles.date}>
        <p>{props.date.getDate()}</p>
        <p>{props.date.toLocaleString("default", { month: "long" })}</p>
        <p>{props.date.getFullYear()}</p>
      </div>
      <p>{props.name}</p>
      <p>{props.amount + " Ron"}</p>
    </div>
  );
}

export default ListItem;
