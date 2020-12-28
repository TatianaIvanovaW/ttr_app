import { IonPage } from "@ionic/react";
import React from "react";
import TrainButtons from "../components/TrainButtons";
import "./Home.css";
import Header from "../components/Header";
import { useState } from "react";
import Stations from "../components/Stations";
import LongRoutes from "../components/LongRoutes";

const Home: React.FC = () => {
  const [tScore, set_tScore] = useState(0);
  const [stationsScore, set_stationsScore] = useState(0);
  const [longRouteScore, set_longRouteScore] = useState(0);

  const countTrains = (score: any) => {
    set_tScore(score);
    console.log(`trains score`, tScore);
  };
  const countStations = (score: any) => {
    set_stationsScore(score);
    console.log(`stations score`, stationsScore);
  };

  const countLongRoute = (score: any) => {
    set_longRouteScore(score);
    console.log(`long route score in a parent component`, longRouteScore);
  };

  return (
    <IonPage>
      <Header />

      <TrainButtons countTrains={countTrains} />
      <Stations countStations={countStations} />
      <LongRoutes countLongRoute={countLongRoute} />
      {/* <IonButton onClick={counter}>x</IonButton> */}
    </IonPage>
  );
};

export default Home;
