import React from "react";
import {
  IonLabel,
  IonListHeader,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonRadio,
  IonRadioGroup,
  IonIcon,
} from "@ionic/react";
import { useState, useEffect } from "react";
import longRoutes from "../data/long";
import { trailSignOutline, trailSign } from "ionicons/icons";

interface ContainerProps {
  countLongRoute: Function;
}

const LongRoutes: React.FC<ContainerProps> = ({ countLongRoute }) => {
  const [longRouteId, set_longRouteId] = useState(0);

  const [lrStatus, set_lrStatus] = useState("");

  const long = longRoutes.find((route) => {
    return route.id === longRouteId;
  });

  const longScore = long
    ? lrStatus === "done"
      ? long.score
      : lrStatus === "notdone"
      ? -long.score
      : 0
    : null;

  useEffect(() => {
    countLongRoute(longScore);
  }, [longScore, countLongRoute]);

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>
          <IonIcon
            style={{ color: "#93110D" }}
            icon={!longRouteId ? trailSignOutline : trailSign}
          ></IonIcon>{" "}
          Your long route:
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
      <IonRadioGroup
        onIonChange={(e) => {
          e.preventDefault();
          set_lrStatus(e.detail.value);
        }}
      >
        <IonItem>
          <IonLabel>Done</IonLabel>
          <IonRadio color="danger" slot="start" value="done" />
        </IonItem>

        <IonItem>
          <IonLabel>Not done</IonLabel>
          <IonRadio color="danger" slot="start" value="notdone" />
        </IonItem>
      </IonRadioGroup>
    </IonList>
  );
};

export default LongRoutes;
