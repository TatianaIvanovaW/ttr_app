import React from "react";
import {
  IonLabel,
  IonContent,
  IonListHeader,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import longRoutes from "../data/long";

interface ContainerProps {}

const LongRoutes: React.FC<ContainerProps> = () => {
  const [longRouteId, set_longRouteId] = useState(0);
  console.log(`route id`, longRouteId);

  return (
    <IonContent>
      <IonList>
        <IonListHeader>
          <IonLabel>
            <b>Your long route:</b>
          </IonLabel>
        </IonListHeader>
        <IonItem>
          <IonSelect
            okText="Okay"
            cancelText="Cancel"
            placeholder="What was your long route?"
            onIonChange={(e) => {
              e.preventDefault();
              set_longRouteId(parseInt(e.detail.value));
            }}
          >
            {longRoutes.map((route) => {
              return (
                <IonSelectOption key={route.id} value={route.id}>
                  {route.name}
                </IonSelectOption>
              );
            })}
          </IonSelect>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default LongRoutes;
