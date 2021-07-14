import React from "react";
import styles from "./ListItem.module.css";
import binImg from "../../Images/bin.png";

function ListItem(props) {

  function deleteItemHandler() {
    props.deleteItem(props.id);
  }

  return (
    <div className={styles["list-item"]}>
      <div
        className={
          props.type === "Income"
            ? styles.income + " " + styles.container
            : styles.expense + " " + styles.container
        }
      >
        <div className={styles.date}>
          <p>{props.date.getDate()} {props.date.toLocaleString("default", { month: "short" })}</p>
          <p>{props.date.getFullYear()}</p>
        </div>
        <p>{props.name}</p>
        <p>{props.amount + " $"}</p>
      </div>
      <button className={styles["delete-btn"]} onClick={deleteItemHandler}>
        <img src={binImg} alt="X" />
      </button>
    </div>
  );
}

export default ListItem;
