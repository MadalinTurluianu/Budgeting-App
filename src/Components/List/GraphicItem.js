import React from "react";
import styles from "./GraphicItem.module.css";

function GraphicItem(props) {

  let maxValue = props.maxValue;

  let incomeArray = props.notFilteredData
    .filter(
      (object) =>
        object.date.toLocaleString("default", { month: "short" }) ===
          props.month &&
        object.type === "Income" &&
        object.date.getFullYear().toString() === props.filteredYear
    )
    .map((object) => +object.amount);

  let income = 0;

  for (let n of incomeArray) {
    income += n;
  }

  let expensesArray = props.notFilteredData
    .filter(
      (object) =>
        object.date.toLocaleString("default", { month: "short" }) ===
          props.month &&
        object.type === "Expense" &&
        object.date.getFullYear().toString() === props.filteredYear
    )
    .map((object) => +object.amount);

  let expenses = 0;

  for (let n of expensesArray) {
    expenses += n;
  }

  let incomePercentage = (income / maxValue) * 100;

  let expensesPercentage = (expenses / maxValue) * 100;

  return (
    <div className={styles["graphic-item"]}>
      <div className={styles["graphic-container"]}>
        <div className={styles.vessel + " " + styles.income}>
          <div
            style={{ transform: `translateY(${100 - incomePercentage}%)` }}
            className={styles.content}
          ></div>
        </div>
        <div className={styles.vessel + " " + styles.expenses}>
          <div
            style={{ transform: `translateY(${100 - expensesPercentage}%)` }}
            className={styles.content}
          ></div>
        </div>
      </div>

      <p>{props.month}</p>
    </div>
  );
}

export default GraphicItem;
