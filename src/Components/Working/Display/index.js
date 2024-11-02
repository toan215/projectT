import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Space, Button, theme, Grid } from "antd";

const Display = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const ButtonSize = screens.xxl ? "46px" : "32px";

  return (
    <React.Fragment>
      <Space direction="vertical">
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            width: "56vw",
            height: "5vh",
            marginTop: "8px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: ButtonSize,
              height: ButtonSize,
            }}
          />
        </div>
      </Space>
    </React.Fragment>
  );
};

export default Display;
