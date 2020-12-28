import React from "react";
import { useState, useEffect } from "react";
import shortRoute from "../data/short";
import {
  IonLabel,
  IonListHeader,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonRadio,
  IonRadioGroup,
  IonItemDivider,
  IonIcon,
  IonCard,
  IonCol,
} from "@ionic/react";
import { close } from "ionicons/icons";

interface ContainerProps {
  getShortRoutesArray: Function;
}

const ShortRoutes: React.FC<ContainerProps> = ({ getShortRoutesArray }) => {
  const shortRouteSorted = shortRoute.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  const [shorts, set_Shorts] = useState([]);
  const [status, set_status] = useState("");
  const [finalArray, set_finalArray] = useState<any>([]);

  const getShortRoutes = (e: any, route: any) => {
    const oneRoute: any = shortRouteSorted.find((r) => {
      return r.name === route ? r : null;
    });
    if (finalArray.includes(oneRoute)) {
      const choosenRoute: any = finalArray.find((shortRoute: any) => {
        return shortRoute === oneRoute;
      });
      choosenRoute.status = e;
      return finalArray;
    } else {
      oneRoute.status = e;
      set_finalArray([...finalArray, oneRoute]);
      return finalArray;
    }
  };

  useEffect(() => {
    getShortRoutesArray(finalArray);
  }, [finalArray, getShortRoutesArray, status, shorts]);
  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Your short routes:</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonSelect
          multiple={true}
          okText="Okay"
          cancelText="Cancel"
          placeholder="What was your short routes?"
          onIonChange={(e) => {
            e.preventDefault();
            set_Shorts(e.detail.value);
          }}
        >
          {shortRouteSorted.map((route) => {
            return (
              <IonSelectOption value={route.name} key={route.name}>
                {route.name}
              </IonSelectOption>
            );
          })}
        </IonSelect>
      </IonItem>
      <IonItemDivider>Your Routes:</IonItemDivider>

      {shorts.length
        ? shorts.map((route, i) => {
            return (
              <IonCol key={i}>
                <IonCard>
                  <IonItem>
                    <IonLabel>{route}</IonLabel>
                    <IonIcon
                      onClick={() => {
                        const newArray = shorts.filter((r) => {
                          return r !== route;
                        });
                        set_Shorts(newArray);
                        console.log(newArray);
                      }}
                      icon={close}
                    />
                  </IonItem>
                  <IonRadioGroup
                    onIonChange={(e) => {
                      e.preventDefault();
                      set_status(e.detail.value);
                      getShortRoutes(e.detail.value, route);
                    }}
                  >
                    <IonItem>
                      <IonLabel>Done</IonLabel>
                      <IonRadio color="warning" slot="start" value="done" />
                    </IonItem>

                    <IonItem>
                      <IonLabel>Not done</IonLabel>
                      <IonRadio color="warning" slot="start" value="notdone" />
                    </IonItem>
                  </IonRadioGroup>
                </IonCard>
              </IonCol>
            );
          })
        : null}
    </IonList>
  );
};

export default ShortRoutes;
