import React, { useState } from "react";
import styles from "./Form.module.css";
import Card from "../UI/Card";

function ClosedForm(props) {

    function openIncomeForm(){

    }
    function openExpenseForm(){
        
    }
    return (
        <Card>
            <button className={styles["form-button"]} onClick={openIncomeForm}>New income</button>
            <button className={styles["form-button"]} onClick={openExpenseForm}>New expense</button>
        </Card>
    );
}

export default ClosedForm;