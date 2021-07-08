import React from "react";
import styles from "./Graphic.module.css";
import GraphicItem from "./GraphicItem";

function Graphic(props) {
    return(
        <div className={styles.graphic}>
            <GraphicItem month={"Jan"}></GraphicItem>
            <GraphicItem month={"Feb"}></GraphicItem>
            <GraphicItem month={"Mar"}></GraphicItem>
            <GraphicItem month={"Apr"}></GraphicItem>
            <GraphicItem month={"May"}></GraphicItem>
            <GraphicItem month={"Jun"}></GraphicItem>
            <GraphicItem month={"Jul"}></GraphicItem>
            <GraphicItem month={"Aug"}></GraphicItem>
            <GraphicItem month={"Sep"}></GraphicItem>
            <GraphicItem month={"Oct"}></GraphicItem>
            <GraphicItem month={"Nov"}></GraphicItem>
            <GraphicItem month={"Dec"}></GraphicItem>
        </div>
    )
}

export default Graphic;