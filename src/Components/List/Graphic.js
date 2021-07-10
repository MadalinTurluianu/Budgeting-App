import React from "react";
import styles from "./Graphic.module.css";
import GraphicItem from "./GraphicItem";

function Graphic(props) {
  const values = props.notFilteredData.map((object) => +object.amount);

  let maxValue = Math.max(...values);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className={styles.graphic}>
      {months.map(month => <GraphicItem
      month={month}
      maxValue={maxValue}
      notFilteredData={props.notFilteredData}
      filteredYear={props.filteredYear}
      key={month}
      />)}
    </div>
  );
}

export default Graphic;
