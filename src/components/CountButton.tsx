import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { checkmarkDone } from "ionicons/icons";

interface ContainerProps {
  tScore: Number;
  stationsScore: Number;
  longRouteScore: Number;
  shorts: any;
  result: Function;
  setAlert: Function;
}

const CountButton: React.FC<ContainerProps> = () => {
  const scroll = (e: any) => {
    e.preventDefault();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  const countScore = (e: any, props: ContainerProps) => {
    e.preventDefault();
    let data = [];
    data.push(props.tScore, props.stationsScore, props.longRouteScore);

    // console.log(shorts);
    if (props.shorts.length)
      data.push(
        props.shorts
          .map((route: any) => {
            return route.status === "done"
              ? route.score
              : route.status === "notdone"
              ? -route.score
              : null;
          })
          .reduce((sum: any, num: any) => {
            return sum + num;
          })
      );
    console.log(`data`, data);
    const score = data.reduce((sum, num) => {
      return sum + num;
    });
    console.log(`final score`, score);
    props.result(score);
    props.setAlert(true);
    scroll(e);
  };
  // module.exports = countScore;
  return (
    <IonButton
      style={{
        margin: "10px",
        marginLeft: "30px",
        marginRight: "30px",
      }}
      color="dark"
      fill="outline"
      onClick={() => countScore}
      type="submit"
    >
      <IonIcon
        style={{ margin: "5px", color: "#93110D" }}
        icon={checkmarkDone}
      ></IonIcon>
    </IonButton>
  );
};

export default CountButton;
