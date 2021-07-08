import React from "react";
import styles from "./GraphicItem.module.css";

function GraphicItem(props) {
  return (
    <div className={styles["graphic-item"]}>
      <div className={styles["graphic-container"]}>
        <div className={styles.vessel + " " + styles.income}>
          <div className={styles.content}></div>
        </div>
        <div className={styles.vessel + " " + styles.expenses}>
          <div className={styles.content}></div>
        </div>
      </div>

      <p>{props.month}</p>
    </div>
  );
}

export default GraphicItem;
