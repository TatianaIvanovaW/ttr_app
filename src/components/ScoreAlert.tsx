import React from "react";

import { IonAlert } from "@ionic/react";
import { useState } from "react";

interface ContainerProps {}

const ScoreAlert: React.FC<ContainerProps> = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  return (
    <IonAlert
      isOpen={showAlert1}
      onDidDismiss={() => setShowAlert1(false)}
      cssClass="my-custom-class"
      header={"Extra points!"}
      subHeader={"Subtitle"}
      message={` The player with the longest continuous path of routes receives this
          special bonus card and can add 10points to his score (in case
          of a tie, both players receive the points).The continuous
          path may include loops and pass through the same city several times,
          but a given plastic train may never be used twice.`}
      buttons={["OK"]}
    />
  );
};

export default ScoreAlert;
