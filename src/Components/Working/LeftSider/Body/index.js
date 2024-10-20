import React from "react";
import { CommentOutlined } from "@ant-design/icons";
import UploadButton from "../Header/UpLoad";
import { Flex, Layout, Menu } from "antd";

const { Sider } = Layout;

const Body = ({ collapsed }) => {
  const [items, setItems] = React.useState([
    {
      key: "1",
      icon: <CommentOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <CommentOutlined />,
      label: "nav 2",
    },
  ]);
  const handleFileUpload = (fileName) => {
    const newItem = {
      key: `${items.length + 1}`,
      label: fileName,
      icon: <CommentOutlined />,
    };
    setItems([...items, newItem]);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        collapsedWidth={128}
        width={256}
      >
        <Flex justify="center">
          {!collapsed && <UploadButton onFileUpload={handleFileUpload} />}
        </Flex>
        <Menu
          theme="light"
          mode="inline"
          items={items.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: item.label,
          }))}
        />
      </Sider>
    </Layout>
  );
};

export default Body;
