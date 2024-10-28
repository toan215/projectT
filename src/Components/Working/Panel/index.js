import React from "react";
import { theme, Flex } from "antd";
import NavBar from "./NavBar";

const Panel = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <React.Fragment>
      <div
        style={{
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          width: "56vw",
        }}
      >
        <Flex justify="center" style={{ marginTop: "8px" }}>
          <NavBar />
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default Panel;
