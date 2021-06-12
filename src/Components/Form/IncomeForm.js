import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "../UI/Card";

function IncomeForm(props) {
  const [incomeName, setIncomeName] = useState("");

  function changeNameHandler(event) {
    setIncomeName(event.target.value);
  }

  const [incomeAmount, setIncomeAmount] = useState("");

  function changeAmountHandler(event) {
    setIncomeAmount(event.target.value);
  }

  const [date, setDate] = useState("");

  function changeDateHandler(event) {
    setDate(new Date(event.target.value));
  }

  function submitHandler(event) {
    event.preventDefault();
    const dataToBePassed = {
      name: incomeName,
      amount: incomeAmount,
      date: date,
      type: "Income",
      id:
        incomeName +
        incomeAmount +
        date+
        "Income",
    };
    props.takeData(dataToBePassed);
    props.closeForm();
  }

  return (
    <Card>
      <form
        className={styles.form + " " + styles["form-income"]}
        onSubmit={submitHandler}
      >
        <label>Name</label>
        <input type="text" onChange={changeNameHandler} required></input>
        <label>Amount</label>
        <input type="number" onChange={changeAmountHandler} required></input>
        <label>Date</label>
        <input type="date" onChange={changeDateHandler} required />
        <div className={styles["btn-container"]}>
          <button type="submit">Add Income</button>
          <button type="button" onClick={props.closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
}

export default IncomeForm;
