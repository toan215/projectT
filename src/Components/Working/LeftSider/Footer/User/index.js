import React from "react";
import { Avatar, Button, Flex } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const UserButton = ({ collapsed }) => {
  return (
    <Flex style={{ position: "relative" }}>
      <Button
        size="large"
        icon={<Avatar style={{ padding: collapsed ? "20px" : "8px" }} />}
        shape={collapsed ? "circle" : "round"}
        style={{ width: collapsed ? "0px" : "230px", borderRadius: "30px" }}
      >
        <Flex
          justify="flex-start"
          align="center"
          gap={"small"}
          style={{ width: "100%", fontWeight: "bold" }}
        >
          {!collapsed && <label>User</label>}
        </Flex>
      </Button>
      {!collapsed && (
        <Button
          type="ghost"
          shape="circle"
          icon={
            <LoginOutlined
              style={{
                backgroundColor: "#AEA7FF",
                borderRadius: "50%",
                padding: "8px",
                color: "white",
              }}
            />
          }
          style={{
            position: "absolute",
            right: "8px",
            bottom: "4px",
          }}
        ></Button>
      )}
    </Flex>
  );
};

export default UserButton;
