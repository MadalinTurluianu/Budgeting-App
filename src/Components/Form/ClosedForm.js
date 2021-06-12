import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "../UI/Card";

function ClosedForm(props) {
  return (
    <Card>
      <div className={styles["btn-container"]}>
        <button
          className={styles["form-button"] + " " + styles["income-btn"]}
          onClick={props.openIncomeForm}
        >
          New income
        </button>
        <button
          className={styles["form-button"] + " " + styles["expense-btn"]}
          onClick={props.openExpenseForm}
        >
          New expense
        </button>
      </div>
    </Card>
  );
}

export default ClosedForm;
