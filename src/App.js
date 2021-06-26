import React, { useState, Fragment } from "react";
import ClosedForm from "./Components/Form/ClosedForm";
import IncomeForm from "./Components/Form/IncomeForm";
import ExpenseForm from "./Components/Form/ExpenseForm";
import List from "./Components/List/List";

// import Chart from "./Components/Chart/Chart";
// import Expenses from "./Components/Expenses/Expenses";

function App() {
  // -------------------------------------------------------------Selecting which form to show
  const [formType, setFormType] = useState("ClosedForm");

  function openIncomeForm() {
    setFormType("IncomeForm");
  }

  function openExpenseForm() {
    setFormType("ExpenseForm");
  }

  function closeForm() {
    setFormType("ClosedForm");
  }

  // -------------------------------------------------------------Data from the forms
  const [formData, setFormData] = useState([]);

  function takeData(data) {
    setFormData((prevFormData) => [data, ...prevFormData]);
  }

  // -------------------------------------------------------------Delete item

  function deleteItem(id) {
    let currentFormData = [...formData];
    const index = currentFormData.findIndex((element) => element.id === id);
    currentFormData.splice(index, 1);
    setFormData(currentFormData);
  }

  // -------------------------------------------------------------The returned page
  return (
    <Fragment>
            {formType === "ClosedForm" ? (
        <ClosedForm
          openIncomeForm={openIncomeForm}
          openExpenseForm={openExpenseForm}
        />
      ) : formType === "IncomeForm" ? (
        <IncomeForm closeForm={closeForm} takeData={takeData} />
      ) : (
        <ExpenseForm closeForm={closeForm} takeData={takeData} />
      )}

      {/* Chart */}
      <List data={formData} deleteItem={deleteItem} />
    </Fragment>
  );
}

export default App;
