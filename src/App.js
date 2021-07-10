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

  // -------------------------------------------------------------Filter

  const [filterActive, setFilterActive] = useState(false);
  const [filteredData, setFilteredData] = useState(formData);
  const [filteredYear, setFilteredYear] = useState("none");

  function addFilter(filterOptions) {
    let currentData = formData;

    if (
      filterOptions.year === "none" &&
      filterOptions.month === "none" &&
      filterOptions.showIncome &&
      filterOptions.showExpense
    ) {
      return;
    }

    setFilterActive(true);

    if (filterOptions.year !== "none") {
      currentData = currentData.filter(
        (listItem) =>
          listItem.date.getFullYear().toString() === filterOptions.year
      );
    }

    if (filterOptions.month !== "none") {
      currentData = currentData.filter(
        (listItem) =>
          listItem.date.toLocaleString("default", { month: "long" }) ===
          filterOptions.month
      );
    }

    if (!filterOptions.showIncome && !filterOptions.showExpense) {
      currentData = [];
    } else if (filterOptions.showExpense && !filterOptions.showIncome) {
      currentData = currentData.filter(
        (listItem) => listItem.type === "Expense"
      );
    } else if (filterOptions.showIncome && !filterOptions.showExpense) {
      currentData = currentData.filter(
        (listItem) => listItem.type === "Income"
      );
    }

    setFilteredData(currentData);
    setFilteredYear(filterOptions.year)
  }

  function removeFilter() {
    setFilterActive(false);
  }
  // -------------------------------------------------------------Delete item

  function deleteItem(id) {
    let currentFormData = [...formData];
    const index = currentFormData.findIndex((element) => element.id === id);
    currentFormData.splice(index, 1);
    setFormData(currentFormData);
    if (filterActive === true) {
      let currentFilteredData = [...filteredData];
      const index = currentFilteredData.findIndex(
        (element) => element.id === id
      );
      currentFilteredData.splice(index, 1);
      setFilteredData(currentFilteredData);
    }
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
      <List
        data={filterActive === true ? filteredData : formData}
        notFilteredData={formData}
        deleteItem={deleteItem}
        addFilter={addFilter}
        removeFilter={removeFilter}
        filterActive={filterActive}
        filteredYear={filteredYear}
      />
    </Fragment>
  );
}

export default App;
