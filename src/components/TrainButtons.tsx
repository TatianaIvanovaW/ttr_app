import React from "react";

import { IonButton } from "@ionic/react";
import { img } from "../icons/img";
import { useState, useEffect } from "react";

interface ButtonsProps {
  countTrains: Function;
}

const TrainButtons: React.FC<ButtonsProps> = ({ countTrains }) => {
  const [value1, set_value1] = useState(0);
  const [value2, set_value2] = useState(0);
  const [value3, set_value3] = useState(0);
  const [value4, set_value4] = useState(0);
  const [value6, set_value6] = useState(0);
  const [value8, set_value8] = useState(0);

  const result =
    value1 + value2 * 2 + value3 * 4 + value4 * 7 + value6 * 15 + value8 * 21;

  useEffect(() => {
    countTrains(result);
  }, [result, countTrains]);

  return (
    <>
      <h4 style={{ textAlign: "center" }}>
        <b style={{ fontSize: "20px" }}>Trains:</b>
      </h4>

      <div style={{ margin: "10px" }}>
        <IonButton
          style={{ margin: "5px", width: "125px" }}
          color="medium"
          onClick={(e) => {
            e.preventDefault();

            return value1 < 4 ? set_value1(value1 + 1) : null;
          }}
        >
          1<img style={{ margin: "7px" }} alt="train" src={img}></img>trains:{" "}
          {value1}
        </IonButton>
        <IonButton
          style={{ margin: "5px" }}
          color="danger"
          onClick={() => {
            return value1 > 0 ? set_value1(value1 - 1) : null;
          }}
        >
          -1
        </IonButton>
        <IonButton
          style={{ margin: "5px", width: "125px" }}
          color="medium"
          onClick={() => {
            return value2 < 33 ? set_value2(value2 + 1) : null;
          }}
        >
          2 <img alt="train" style={{ margin: "7px" }} src={img}></img> trains:{" "}
          {value2}
        </IonButton>
        <IonButton
          style={{ margin: "5px" }}
          color="danger"
          onClick={() => {
            return value2 > 0 ? set_value2(value2 - 1) : null;
          }}
        >
          -1
        </IonButton>
        <IonButton
          style={{ margin: "5px", width: "125px" }}
          color="medium"
          onClick={() => {
            return value3 < 31 ? set_value3(value3 + 1) : null;
          }}
        >
          3 <img alt="train" style={{ margin: "7px" }} src={img}></img> trains:{" "}
          {value3}
        </IonButton>
        <IonButton
          style={{ margin: "5px" }}
          color="danger"
          onClick={() => {
            return value3 > 0 ? set_value3(value3 - 1) : null;
          }}
        >
          -1
        </IonButton>
        <IonButton
          color="medium"
          style={{ margin: "5px", width: "125px" }}
          onClick={() => {
            return value4 < 29 ? set_value4(value4 + 1) : null;
          }}
        >
          4 <img alt="train" style={{ margin: "7px" }} src={img}></img> trains:{" "}
          {value4}
        </IonButton>
        <IonButton
          style={{ margin: "5px" }}
          color="danger"
          onClick={() => {
            return value4 > 0 ? set_value4(value4 - 1) : null;
          }}
        >
          -1
        </IonButton>
        <IonButton
          color="medium"
          style={{ margin: "5px", width: "125px" }}
          onClick={() => {
            return value6 < 2 ? set_value6(value6 + 1) : null;
          }}
        >
          6 <img alt="train" style={{ margin: "7px" }} src={img}></img> trains:{" "}
          {value6}
        </IonButton>
        <IonButton
          style={{ margin: "5px" }}
          color="danger"
          onClick={() => {
            return value6 > 0 ? set_value6(value6 - 1) : null;
          }}
        >
          -1
        </IonButton>
        <IonButton
          color="medium"
          style={{ margin: "5px", width: "125px" }}
          onClick={() => {
            return value8 < 1 ? set_value8(value8 + 1) : null;
          }}
        >
          8 <img alt="train" style={{ margin: "7px" }} src={img}></img> trains:{" "}
          {value8}
        </IonButton>
        <IonButton
          style={{ margin: "5px" }}
          color="danger"
          onClick={() => {
            return value8 > 0 ? set_value8(value8 - 1) : null;
          }}
        >
          -1
        </IonButton>
      </div>
    </>
  );
};

export default TrainButtons;
