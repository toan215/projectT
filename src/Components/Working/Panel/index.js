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
              color: "white",
              fontSize: "24px",
              padding: "0 16px 0 16px",
            }}
          >
            Hello! Nice to see you here! By pressing the "Translate" button you
            agree to have your personal data processed as described in our
            Privacy Policy
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
              width: "32vw",
              height: "60vh",
              backgroundColor: "gray",
              borderRadius: "8px",
              overflow: "hidden",
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
