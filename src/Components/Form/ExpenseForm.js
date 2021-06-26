import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "../UI/Card";

function ExpenseForm(props) {
  const [expenseName, setExpenseName] = useState("");

  function changeNameHandler(event) {
    if (event.target.value.trim() === ""){
      event.target.value = "";
    } else {
      setExpenseName(event.target.value);
    }
  }

  const [expenseAmount, setExpenseAmount] = useState("");

  function changeValueHandler(event) {
    if (event.target.value < 0) {
      event.target.value = "";
    } else {
      setExpenseAmount(event.target.value);
    }
  }

  const [date, setDate] = useState("");

  function changeDateHandler(event) {
    setDate(new Date(event.target.value));
  }

  function submitHandler(event) {
    event.preventDefault();
    const dataToBePassed = {
      name: expenseName,
      amount: expenseAmount,
      date: date,
      type: "Expense",
      id:
        expenseName +
        expenseAmount +
        date+
        "Expense",
    };
    props.takeData(dataToBePassed);
    props.closeForm();
  }

  return (
    <Card>
      <form
        className={styles.form + " " + styles["form-expense"]}
        onSubmit={submitHandler}
      >
        <label>Name</label>
        <input type="text" onChange={changeNameHandler} required></input>
        <label>Amount</label>
        <input type="number" onChange={changeValueHandler} required></input>
        <label>Date</label>
        <input type="date" onChange={changeDateHandler} required />
        {/* <div>
          <label>Necessary</label>
          <input
            type="radio"
            name="necessity"
            value="necessary"
            required
          ></input>
          <label className={styles.unnecessary}>Unnecessary</label>
          <input
            type="radio"
            name="necessity"
            value="unnecessary"
            required
          ></input>
        </div> */}
        <div className={styles["btn-container"]}>
          <button type="submit">Add Expense</button>
          <button type="button" onClick={props.closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
}

export default ExpenseForm;
