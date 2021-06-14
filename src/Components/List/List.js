import React from "react";
import Card from "../UI/Card";
import ListItem from "./ListItem";
import Filter from './Filter';

function List(props) {
  return (
    <Card>
      <Filter/>
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
