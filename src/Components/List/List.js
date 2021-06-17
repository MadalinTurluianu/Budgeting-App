import React, { useState } from "react";
import Card from "../UI/Card";
import ListItem from "./ListItem";
import Filter from "./Filter";

function List(props) {
  const [filterActive, setFilterActive] = useState(false);
  const [filteredData, setFilteredData] = useState(props.data);

  function addFilter(filterOptions) {
    let currentData = props.data;

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
      currentData = currentData.filter((listItem) => listItem.type === "Expense");

    } else if (filterOptions.showIncome && !filterOptions.showExpense) {
      currentData = currentData.filter((listItem) => listItem.type === "Income");
    }

    setFilteredData(currentData);
  }

  function removeFilter() {
    setFilterActive(false);
  }

  function deleteItem(id) {
    props.deleteItem(id);
  }

  return (
    <Card>
      <Filter filterActive={filterActive} addFilter={addFilter} removeFilter={removeFilter} />

      {filterActive === true
        ? filteredData.map((object) => (
            <ListItem
              name={object.name}
              amount={object.amount}
              date={object.date}
              type={object.type}
              id={object.id}
              key={object.id}
              deleteItem={deleteItem}
            />
          ))
        : props.data.map((object) => (
            <ListItem
              name={object.name}
              amount={object.amount}
              date={object.date}
              type={object.type}
              id={object.id}
              key={object.id}
              deleteItem={deleteItem}
            />
          ))}
    </Card>
  );
}

export default List;
