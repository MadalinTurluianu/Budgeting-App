import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "../UI/Card";

function ExpenseForm(props) {
    return (
        <Card>
            <form>
                <label>Name</label>
                <input type="text"></input>
                <label>Amount</label>
                <input type="number"></input>
                <div>
                <label>Necessary</label>
                <input type="radio" name="" required></input>
                <label>Unnecessary</label>
                <input type="radio" required></input>
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </Card>
    );
}

export default ExpenseForm;