import React from "react";
import styles from "./List.module.css";
import Card from "../UI/Card";
import ListItem from "./ListItem";

function List(props) {
  return (
    <Card>
      {props.data.map((object) => (
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
