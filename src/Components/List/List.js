import React, { useState } from "react";
import Card from "../UI/Card";
import ListItem from "./ListItem";
import Filter from "./Filter";


// BUG WHEN FILTER WITH INCOMES / EXPENSES

let filterApplied = false;

function List(props) {
  const [filteredData, setFilteredData] = useState(props.data);

  function addFilter(filterOptions) {
    if (filterOptions.year !== "none") {
      filterApplied = true;
      setFilteredData(
        props.data.filter(
          (listItem) =>
            listItem.date.getFullYear().toString() === filterOptions.year
        )
      );
    }

    if (filterOptions.month !== "none") {
      filterApplied = true;
      setFilteredData((prevFilteredData) =>
        prevFilteredData.filter(
          (listItem) =>
            listItem.date.toLocaleString("default", { month: "long" }) ===
            filterOptions.month
        )
      );
    }

    if (filterOptions.showIncome && filterOptions.showExpense) {
      return;
    } else if (filterOptions.showIncome) {
      filterApplied = true;
      setFilteredData((prevFilteredData) =>
        prevFilteredData.filter((listItem) => listItem.type === "Income")
      );
    } else if (filterOptions.showExpense) {
      filterApplied = true;
      setFilteredData((prevFilteredData) =>
        prevFilteredData.filter((listItem) => listItem.type === "Expense")
      );
    } else {
      filterApplied = true;
      setFilteredData([]);
    }
  }

  function removeFilter() {
    setFilteredData(props.data);
  }

  return (
    <Card>
      <Filter addFilter={addFilter} removeFilter={removeFilter} />

      {filterApplied
        ? filteredData.map((object) => (
            <ListItem
              name={object.name}
              amount={object.amount}
              date={object.date}
              type={object.type}
              key={object.id}
            />
          ))
        : props.data.map((object) => (
            <ListItem
              name={object.name}
              amount={object.amount}
              date={object.date}
              type={object.type}
              key={object.id}
            />
          ))}
    </Card>
  );
}

export default List;
