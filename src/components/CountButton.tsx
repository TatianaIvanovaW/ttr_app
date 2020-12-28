import React from "react";
import { IonButton } from "@ionic/react";

interface ContainerProps {
  tScore: Number;
  stationsScore: Number;
  longRouteScore: Number;
  shorts: any;
  result: Function;
}

const CountButton: React.FC<ContainerProps> = ({
  tScore,
  stationsScore,
  longRouteScore,
  shorts,
  result,
}) => {
  const scroll = (e: any) => {
    e.preventDefault();
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };

  const countScore = (e: any) => {
    e.preventDefault();
    let data = [];
    data.push(tScore, stationsScore, longRouteScore);

    // console.log(shorts);
    if (shorts.length)
      data.push(
        shorts
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
    result(score);

    scroll(e);
  };

  return (
    <IonButton color="warning" onClick={countScore} type="submit">
      count score ✓
    </IonButton>
  );
};

export default CountButton;
