import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "../UI/Card";

function IncomeForm(props) {
    return (
        <Card>
            <form>
                <label>Name</label>
                <input type="text"></input>
                <label>Amount</label>
                <input type="number"></input>
                <button type="submit">Add Income</button>
            </form>
        </Card>
    );
}

export default IncomeForm;