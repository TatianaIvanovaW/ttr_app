import React from "react";
import {
  IonList,
  IonItem,
  IonSelect,
  IonLabel,
  IonSelectOption,
  IonListHeader,
} from "@ionic/react";
import { useState, useEffect } from "react";

interface StationsProps {
  countStations: Function;
}

const Stations: React.FC<StationsProps> = ({ countStations }) => {
  const [stationsScore, set_stationsScore] = useState(12);
  //   console.log(`stations`, stationsScore);

  useEffect(() => {
    countStations(stationsScore);
  }, [stationsScore, countStations]);

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Stations Used</IonLabel>
      </IonListHeader>

      <IonItem>
        <IonSelect
          value={stationsScore}
          okText="Okay"
          cancelText="Cancel"
          placeholder="How many stations did you use?"
          onIonChange={(e) => {
            e.preventDefault();
            set_stationsScore(parseInt(e.detail.value));
          }}
        >
          <IonSelectOption value="12">0</IonSelectOption>
          <IonSelectOption value="8">1</IonSelectOption>
          <IonSelectOption value="4">2</IonSelectOption>
          <IonSelectOption value="0">3</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
};

export default Stations;
