import React from "react";
import { Flex } from "antd";
import SettingsButton from "./Setting";
import UserButton from "./User";

const Footer = ({ collapsed }) => {
  return (
    <React.Fragment>
      <Flex
        justify="center"
        vertical
        align="center"
        gap={"small"}
        style={{ margin: "24px 0" }}
      >
        <SettingsButton collapsed={collapsed} />
        <UserButton collapsed={collapsed} />
      </Flex>
    </React.Fragment>
  );
};

export default Footer;
