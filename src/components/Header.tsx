import React from "react";

import { IonHeader, IonToolbar } from "@ionic/react";

interface ContainerProps {}

const Header: React.FC<ContainerProps> = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <h3>
          <span
            style={{
              fontFamily: "'Cinzel Decorative', cursive",
              fontSize: "30px",
              padding: "15px",
            }}
          >
            ttr calculator
          </span>
          <span
            style={{
              fontFamily: "'Nova Cut', cursive",
              textAlign: "center",
              fontSize: "20px",
              color: "#93110D",
            }}
          >
            {" "}
            Europe
          </span>
        </h3>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
