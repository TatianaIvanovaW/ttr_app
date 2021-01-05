import React from "react";

import { IonButton, IonIcon, IonRow, IonCol } from "@ionic/react";
import "./trainbuttons.css";
import { useState, useEffect } from "react";
import { trainOutline, train } from "ionicons/icons";
import logo from "../icons/train.png";
import logoFilled from "../icons/trainFilled.png";

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

  const trainLeft =
    45 -
    (value1 + value2 * 2 + value3 * 3 + value4 * 4 + value6 * 6 + value8 * 8);

  useEffect(() => {
    countTrains(result);
  }, [result, countTrains]);

  return (
    <>
      <h4 style={{ textAlign: "center" }}>
        <IonIcon
          style={{ color: "#93110D" }}
          icon={!result ? trainOutline : train}
        ></IonIcon>{" "}
        <b style={{ fontSize: "20px" }}> Trains:</b>
      </h4>

      <div style={{ margin: "5px" }}>
        <IonRow>
          <IonCol size="6">
            <IonRow>
              <IonButton
                className="trainbutton"
                color="dark"
                fill="outline"
                onClick={(e) => {
                  e.preventDefault();
                  if (trainLeft > 0)
                    return value1 < 4 ? set_value1(value1 + 1) : null;
                }}
              >
                1
                <img
                  style={{
                    marginRight: "7px",
                    marginLeft: "7px",
                    width: "30px",
                    marginBottom: "10px",
                  }}
                  alt="train"
                  src={!value1 ? logo : logoFilled}
                ></img>
              </IonButton>
              <span className="trainValue"> {value1}</span>
              <IonButton
                style={{ margin: "5px" }}
                color="danger"
                fill="outline"
                onClick={() => {
                  return value1 > 0 ? set_value1(value1 - 1) : null;
                }}
              >
                -1
              </IonButton>{" "}
            </IonRow>
            <IonRow>
              <IonButton
                className="trainbutton"
                color="dark"
                fill="outline"
                onClick={() => {
                  if (trainLeft >= 2)
                    return value2 < 33 ? set_value2(value2 + 1) : null;
                }}
              >
                2{" "}
                <img
                  style={{
                    marginRight: "7px",
                    marginLeft: "7px",
                    width: "30px",
                    marginBottom: "10px",
                  }}
                  alt="train"
                  src={!value2 ? logo : logoFilled}
                ></img>{" "}
              </IonButton>
              <span className="trainValue"> {value2}</span>
              <IonButton
                style={{ margin: "5px" }}
                color="danger"
                fill="outline"
                onClick={() => {
                  return value2 > 0 ? set_value2(value2 - 1) : null;
                }}
              >
                -1
              </IonButton>{" "}
            </IonRow>{" "}
            <IonRow>
              <IonButton
                className="trainbutton"
                color="dark"
                fill="outline"
                onClick={() => {
                  if (trainLeft >= 3)
                    return value3 < 31 ? set_value3(value3 + 1) : null;
                }}
              >
                3{" "}
                <img
                  style={{
                    marginRight: "7px",
                    marginLeft: "7px",
                    width: "30px",
                    marginBottom: "10px",
                  }}
                  alt="train"
                  src={!value3 ? logo : logoFilled}
                ></img>{" "}
              </IonButton>
              <span className="trainValue"> {value3}</span>
              <IonButton
                style={{ margin: "5px" }}
                color="danger"
                fill="outline"
                onClick={() => {
                  return value3 > 0 ? set_value3(value3 - 1) : null;
                }}
              >
                -1
              </IonButton>
            </IonRow>
          </IonCol>
          <IonCol>
            <IonRow>
              <IonButton
                color="dark"
                fill="outline"
                className="trainbutton"
                onClick={() => {
                  if (trainLeft >= 4)
                    return value4 < 29 ? set_value4(value4 + 1) : null;
                }}
              >
                4{" "}
                <img
                  style={{
                    marginRight: "7px",
                    marginLeft: "7px",
                    width: "30px",
                    marginBottom: "10px",
                  }}
                  alt="train"
                  src={!value4 ? logo : logoFilled}
                ></img>{" "}
              </IonButton>
              <span className="trainValue"> {value4}</span>
              <IonButton
                style={{ margin: "5px" }}
                color="danger"
                fill="outline"
                onClick={() => {
                  return value4 > 0 ? set_value4(value4 - 1) : null;
                }}
              >
                -1
              </IonButton>
            </IonRow>
            <IonRow>
              <IonButton
                color="dark"
                fill="outline"
                className="trainbutton"
                onClick={() => {
                  if (trainLeft >= 6)
                    return value6 < 2 ? set_value6(value6 + 1) : null;
                }}
              >
                6{" "}
                <img
                  style={{
                    marginRight: "7px",
                    marginLeft: "7px",
                    width: "30px",
                    marginBottom: "10px",
                  }}
                  alt="train"
                  src={!value6 ? logo : logoFilled}
                ></img>{" "}
              </IonButton>
              <span className="trainValue"> {value6}</span>
              <IonButton
                style={{ margin: "5px" }}
                color="danger"
                fill="outline"
                onClick={() => {
                  return value6 > 0 ? set_value6(value6 - 1) : null;
                }}
              >
                -1
              </IonButton>
            </IonRow>

            <IonRow>
              <IonButton
                color="dark"
                fill="outline"
                className="trainbutton"
                onClick={() => {
                  return value8 < 1 ? set_value8(value8 + 1) : null;
                }}
              >
                8{" "}
                <img
                  style={{
                    marginRight: "7px",
                    marginLeft: "7px",
                    width: "30px",
                    marginBottom: "10px",
                  }}
                  alt="train"
                  src={!value8 ? logo : logoFilled}
                ></img>{" "}
              </IonButton>
              <span className="trainValue"> {value8}</span>
              <IonButton
                style={{ margin: "5px" }}
                color="danger"
                fill="outline"
                onClick={() => {
                  if (trainLeft >= 8)
                    return value8 > 0 ? set_value8(value8 - 1) : null;
                }}
              >
                -1
              </IonButton>
            </IonRow>
          </IonCol>
        </IonRow>
        <p className="list">
          trains left: <span className="number">{trainLeft}</span>
        </p>
      </div>
    </>
  );
};

export default TrainButtons;
