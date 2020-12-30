import {
  IonPage,
  IonLabel,
  IonContent,
  IonAlert,
  IonButton,
  IonIcon,
  IonRow,
} from "@ionic/react";
import React from "react";
import TrainButtons from "../components/TrainButtons";
import "./Home.css";
import Header from "../components/Header";
import { useState } from "react";
import Stations from "../components/Stations";
import LongRoutes from "../components/LongRoutes";
import ShortRoutes from "../components/ShortRoutes";
import Footer from "../components/Footer";
import CountButton from "../components/CountButton";
import { refreshOutline } from "ionicons/icons";

const Home: React.FC = () => {
  const [tScore, set_tScore] = useState(0);
  const [stationsScore, set_stationsScore] = useState(0);
  const [longRouteScore, set_longRouteScore] = useState(0);
  const [shorts, set_shorts] = useState<any>([]);
  const [finalScore, set_finalScore] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  function doRefresh() {
    window.location.reload(false);
  }

  const result = (score: any) => {
    set_finalScore(score);
  };

  console.log(`final score`, finalScore);

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

  const getShortRoutesArray = (score: any) => {
    set_shorts(score);
    console.log(`short routes in a parent component`, shorts);
  };

  const setAlert = (score: boolean) => {
    setShowAlert(score);
  };

  return (
    <IonPage>
      <Header />
      <IonRow style={{ justifyContent: "center" }}>
        <IonLabel
          style={{ textAlign: "center", marginTop: "20px", fontSize: "23px" }}
        >
          Score : <b style={{ color: "#93110D" }}>{finalScore}</b>
        </IonLabel>
        <IonButton
          style={{
            margin: "10px",
            marginLeft: "30px",
            marginRight: "30px",
          }}
          color="dark"
          fill="outline"
          onClick={doRefresh}
        >
          <IonIcon
            style={{ margin: "5px", color: "#93110D" }}
            icon={refreshOutline}
          ></IonIcon>
        </IonButton>
      </IonRow>
      <IonContent>
        <TrainButtons countTrains={countTrains} />
        <Stations countStations={countStations} />
        <LongRoutes countLongRoute={countLongRoute} />
        <ShortRoutes getShortRoutesArray={getShortRoutesArray} />
      </IonContent>
      <CountButton
        tScore={tScore}
        stationsScore={stationsScore}
        longRouteScore={longRouteScore}
        shorts={shorts}
        result={result}
        setAlert={setAlert}
      />
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={"Extra points!"}
        message={` The player with the longest continuous path of routes receives this
          special bonus card and can add 10points to his score (in case
          of a tie, both players receive the points).The continuous
          path may include loops and pass through the same city several times,
          but a given plastic train may never be used twice.`}
        buttons={["OK"]}
      />
      <Footer />
    </IonPage>
  );
};

export default Home;
