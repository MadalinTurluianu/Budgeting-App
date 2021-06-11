import React, { useState } from "react";
import styles from "./App.module.css";
import ClosedForm from "./Components/Form/ClosedForm";
import IncomeForm from "./Components/Form/IncomeForm";
import ExpenseForm from "./Components/Form/ExpenseForm";
// import Chart from "./Components/Chart/Chart";
// import Expenses from "./Components/Expenses/Expenses";

function App() {
  const [formType, setFormType] = useState("ClosedForm");
  return (
    <div>
      {formType === "ClosedForm" ? <ClosedForm/> : formType === "IncomeForm" ? <IncomeForm/> : <ExpenseForm/>}
      {/* Chart */}
      {/* Expenses */}
    </div>
  );
}

export default App;
