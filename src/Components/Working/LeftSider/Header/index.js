import React from "react";
import logo from "../../../../Assets/Icon/logo2.svg";
import { Image, Typography, Flex } from "antd";

const { Title } = Typography;

const Header = ({ collapsed }) => {
  return (
    <React.Fragment>
      <Flex
        align="center"
        justify="center"
        gap={"small"}
        style={{ margin: "0 24px" }}
      >
        <Image src={logo} preview={false} width={"5vmax"} />
        {!collapsed && <Title level={3}>Paper Translation</Title>}
      </Flex>
      {/* <Flex justify="center" style={{ margin: "24px 0" }}>
        {!collapsed && <UploadButton />}
      </Flex> */}
    </React.Fragment>
  );
};

export default Header;
