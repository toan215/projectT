import React, { useState } from "react";
import { theme, Flex } from "antd";
import NavBar from "./NavBar";
import Translate from "./NavBar/Translate";
import Definite from "./NavBar/Definite";
import ChatBox from "./NavBar/ChatBox";

const Panel = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const renderFeatureBox = () => {
    switch (activeFeature) {
      case 1:
        return <Translate />;
      case 2:
        return <Definite />;
      case 3:
        return <ChatBox />;
      default:
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              fontSize: "24px",
              padding: "0 16px 0 16px",
            }}
          >
            Hello! Nice to see you here! By pressing the "Translate" button to Start.
          </div>
        );
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          width: "56vw",
        }}
      >
        <Flex
          justify="center"
          align="center"
          style={{ marginTop: "8px" }}
          vertical
          gap={"large"}
        >
          <NavBar onFeatureSelect={setActiveFeature} />

          {/* Display box */}
          <div
            style={{
              width: "90%",
              height: "80vh",
              backgroundColor: "#EBF4FF",
              borderRadius: "8px",
            }}
          >
            {renderFeatureBox()}
          </div>
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default Panel;
