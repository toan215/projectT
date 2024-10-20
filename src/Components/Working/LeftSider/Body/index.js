import React from "react";
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import UploadButton from "./UpLoad";
import { Flex, Menu, message, Input } from "antd";

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

  const [editingKey, setEditingKey] = React.useState(null);
  const [newLabel, setNewLabel] = React.useState("");

  const handleFileUpload = (fileName) => {
    const newItem = {
      key: `${items.length + 1}`,
      label: fileName,
      icon: <CommentOutlined />,
    };
    setItems([...items, newItem]);
  };

  const handleRename = (key) => {
    setEditingKey(key);
  };

  const handleDelete = (key) => {
    setItems(items.filter((item) => item.key !== key));
    message.success("Item deleted successfully");
  };

  const handleRenameSubmit = (key) => {
    setItems(
      items.map((item) =>
        item.key === key ? { ...item, label: newLabel } : item
      )
    );
    setEditingKey(null);
    setNewLabel("");
    message.success("Item renamed successfully");
  };

  return (
    <React.Fragment>
      <Flex justify="center" style={{ margin: "24px 0" }}>
        {!collapsed && <UploadButton onFileUpload={handleFileUpload} />}
      </Flex>
      <Menu mode="inline" style={{ height: collapsed ? "77vh" : "64vh" }}>
        {items.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {editingKey === item.key ? (
              // Nếu đang trong chế độ chỉnh sửa, hiển thị input
              <Input
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                onPressEnter={() => handleRenameSubmit(item.key)}
                onBlur={() => handleRenameSubmit(item.key)}
                autoFocus
              />
            ) : (
              <>
                {item.label}
                {!collapsed && (
                  <Flex
                    justify="flex-end"
                    align="center"
                    gap={8}
                    style={{
                      position: "absolute",
                      right: 0,
                      top: 3,
                      backgroundColor: "#77B5FF",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <EditOutlined
                      style={{ cursor: "pointer", color: "white" }}
                      onClick={() => handleRename(item.key)}
                    />
                    <DeleteOutlined
                      style={{ cursor: "pointer", color: "white" }}
                      onClick={() => handleDelete(item.key)}
                    />
                  </Flex>
                )}
              </>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default Body;
