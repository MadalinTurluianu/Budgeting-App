import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";

function Filter(props) {
  const [incomeChecked, setIncomeChecked] = useState(true);
  function incomeCheckboxHandler(event) {
    setIncomeChecked(event.target.checked);
  }

  const [expenseChecked, setExpenseChecked] = useState(true);
  function expenseCheckboxHandler(event) {
    setExpenseChecked(event.target.checked);
  }

  const [chosenYear, setChosenYear] = useState("none");
  function yearHandler(event) {
    setChosenYear(event.target.value);
  }

  const [chosenMonth, setChosenMonth] = useState("none");
  function monthHandler(event) {
    setChosenMonth(event.target.value);
  }

  function filterBtnHandler() {
    const filterOptions = {
      year: chosenYear,
      month: chosenMonth,
      showIncome: incomeChecked,
      showExpense: expenseChecked,
    };

    props.addFilter(filterOptions);
  }

  function removeFilterBtnHandler() {
    props.removeFilter();
  }

  const [droppedDown, setDroppedDown] = useState(false);

  function toggleFilter(event) {
    if (droppedDown === false) {
      event.target.classList.add(styles["dropdown-button__active"]);
      setDroppedDown(true)
    } else {
      event.target.classList.remove(styles["dropdown-button__active"]);
      setDroppedDown(false)
    } 
  }

  return (
    <div className={styles.filter}>
      {props.filterActive ? (
        <div className={styles.title}>
          <h2>Filter</h2>
          <p>(The filter is active)</p>
          <button onClick={toggleFilter}>V</button>
        </div>
      ) : (
        <div className={styles.title}>
          <h2>Filter</h2>
          <button onClick={toggleFilter}>V</button>
        </div>
      )}
      <div className={droppedDown === true ? (styles["filter-container"]) : (styles["filter-container__inactive"])}>
        <div className={styles.year}>
          <label>Year</label>
          <input
            type="number"
            min="2000"
            max={new Date().getFullYear()}
            onChange={yearHandler}
          />
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
        <div className={styles["checkbox-container"]}>
          <label>Incomes</label>
          <input
            type="checkbox"
            onChange={incomeCheckboxHandler}
            checked={incomeChecked}
          />
          <label>Expenses</label>
          <input
            type="checkbox"
            onChange={expenseCheckboxHandler}
            checked={expenseChecked}
          />
        </div>
        <div className={styles["buttons-container"]}>
          <button onClick={filterBtnHandler}>Filter</button>
          <button onClick={removeFilterBtnHandler}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
