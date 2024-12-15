import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Space, Button, theme, Grid } from "antd";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../../../Assets/Pdf/pdf_open_parameters.pdf";

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
        {/* display PDF file */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "90vh",
            }}
          >
            <Viewer fileUrl={pdf} />
          </div>
        </Worker>
      </Space>
    </React.Fragment>
  );
};

export default Display;
