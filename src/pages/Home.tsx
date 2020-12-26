import {
  // IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
// import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle
            style={{
              fontFamily: "'Cinzel Decorative', cursive",
              fontSize: "30px",
            }}
          >
            Ticket To Ride
          </IonTitle>
          <IonTitle style={{ fontFamily: "'Nova Cut', cursive" }}>
            Europe
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Home;
