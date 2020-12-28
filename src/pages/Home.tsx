import { IonPage } from "@ionic/react";
import React from "react";
import TrainButtons from "../components/TrainButtons";
import "./Home.css";
import Header from "../components/Header";
import { useState } from "react";
import Stations from "../components/Stations";

const Home: React.FC = () => {
  const [tScore, set_tScore] = useState(0);

  const countTrains = (score: any) => {
    set_tScore(score);
    console.log(`trains score`, tScore);
  };
  // console.log(`stations`, stations);
  return (
    <IonPage>
      <Header />

      <TrainButtons countTrains={countTrains} />
      <Stations />
    </IonPage>
  );
};

export default Home;
