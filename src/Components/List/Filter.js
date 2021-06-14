import React from "react";
import styles from "./Filter.module.css";

function Filter() {
  let incomeChecked = false;
  function incomeCheckboxHandler(event) {
    incomeChecked = event.target.checked;
  }

  let expenseChecked = false;
  function expenseCheckboxHandler(event) {
    expenseChecked = event.target.checked;
  }

  let chosenYear = "none";
  function yearHandler(event) {
    chosenYear = event.target.value;
  }

  let chosenMonth = "none";
  function monthHandler(event) {
    console.log(event.target.value);
  }

  return (
    <div className={styles.filter}>
      <h2>Filter</h2>
      <div className={styles["filter-container"]}>
        <div className={styles.year}>
          <label>Year</label>
          <input type="number" min="2000" max={new Date().getFullYear()} onChange={yearHandler}/>
        </div>
        <div className={styles.month}>
          <label>Month</label>
          <select onChange={monthHandler}>
            <option value="none"></option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className={styles["checkbox-btn__container"]}>
          <div className={styles["checkbox-container"]}>
            <label>Incomes</label>
            <input type="checkbox" onChange={incomeCheckboxHandler} />
            <label>Expenses</label>
            <input type="checkbox" onChange={expenseCheckboxHandler} />
          </div>
          <button>Filter</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
