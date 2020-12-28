import React from "react";
import { IonFooter, IonToolbar } from "@ionic/react";

interface ContainerProps {}

const Footer: React.FC<ContainerProps> = () => {
  return (
    <IonFooter>
      <IonToolbar></IonToolbar>
    </IonFooter>
  );
};

export default Footer;
