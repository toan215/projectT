import React from "react";
import { Button, Flex } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const SettingsButton = ({ collapsed }) => {
  return (
    <Button
      style={{
        width: collapsed ? "0px" : "230px",
        borderRadius: "30px",
        fontWeight: "bold",
      }}
      shape={collapsed ? "circle" : "round"}
      size="large"
      icon={
        <SettingOutlined
          style={{
            backgroundColor: "#D1E6FF",
            borderRadius: "50%",
            padding: collapsed ? "12px" : "5px",
            color: "#51A1FF",
          }}
        />
      }
    >
      <Flex align="flex-start" gap={"small"} style={{ width: "100%" }}>
        {!collapsed && "Settings"}
      </Flex>
    </Button>
  );
};

export default SettingsButton;
