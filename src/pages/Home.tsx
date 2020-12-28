import { IonPage } from "@ionic/react";
import React from "react";
import TrainButtons from "../components/TrainButtons";
import "./Home.css";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />

      <TrainButtons />
    </IonPage>
  );
};

export default Home;
