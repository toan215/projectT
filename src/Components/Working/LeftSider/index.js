import React from "react";

import { Layout } from "antd";
import HeadSider from "./Header";
import BodySider from "./Body";
import FooterSider from "./Footer";

const { Sider } = Layout;

const LeftSider = ({ collapsed }) => {
  return (
    <Sider
      trigger={null}
      collapsed={collapsed}
      theme="light"
      collapsedWidth={100}
      width={256}
      // style={{ overflow: "hidden" }}
    >
      <HeadSider collapsed={collapsed} />
      <BodySider collapsed={collapsed} />
      <FooterSider collapsed={collapsed} />
    </Sider>
  );
};

export default LeftSider;
