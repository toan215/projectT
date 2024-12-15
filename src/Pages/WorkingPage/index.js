import React, { useState } from "react";
import { Layout } from "antd";
import LeftSider from "../../Components/Working/LeftSider";
import Panel from "../../Components/Working/Panel";
import Display from "../../Components/Working/Display";

function WorkingPage() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <React.Fragment>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <LeftSider collapsed={collapsed} />
        <Display collapsed={collapsed} setCollapsed={setCollapsed} />
        <Panel />
      </Layout>
    </React.Fragment>
  );
}

export default WorkingPage;
