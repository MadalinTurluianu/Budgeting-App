import React from "react";
import Card from "../UI/Card";
import ListItem from "./ListItem";
import Filter from "./Filter";

function List(props) {
  function deleteItem(id) {
    props.deleteItem(id);
  }

  return (
    <Card>
      <Filter
        filterActive={props.filterActive}
        addFilter={props.addFilter}
        removeFilter={props.removeFilter}
      />

      {props.data.map((object) => (
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
