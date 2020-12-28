import React from "react";
import {
  IonList,
  IonItem,
  IonSelect,
  IonLabel,
  IonSelectOption,
  IonListHeader,
} from "@ionic/react";
import { useState } from "react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [stations, set_stations] = useState(0);
  console.log(`stations`, stations);
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Options</IonLabel>
      </IonListHeader>

      <IonItem>
        <IonSelect
          value={stations}
          placeholder="Select One"
          onIonChange={(e) => {
            e.preventDefault();
            set_stations(e.detail.value);
          }}
        >
          <IonSelectOption value="0">0</IonSelectOption>
          <IonSelectOption value="1">1</IonSelectOption>
          <IonSelectOption value="2">2</IonSelectOption>
          <IonSelectOption value="3">3</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>Stations Used: {stations ?? "(none selected)"}</IonItem>
    </IonList>
  );
};

export default ExploreContainer;
