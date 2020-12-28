import { IonPage } from "@ionic/react";
import React from "react";
import TrainButtons from "../components/TrainButtons";
import "./Home.css";
import Header from "../components/Header";
import { useState } from "react";

const Home: React.FC = () => {
  const [tScore, set_tScore] = useState(0);
  const countTrains = (score: any) => {
    set_tScore(score);
  };
  console.log(`homepage result`, tScore);
  return (
    <IonPage>
      <Header />

      <TrainButtons countTrains={countTrains} />
    </IonPage>
  );
};

export default Home;
