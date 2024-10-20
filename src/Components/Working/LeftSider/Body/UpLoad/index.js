import React from "react";
import { Upload, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./style.css";

const UploadButton = ({ onFileUpload }) => {
  const beforeUpload = (file) => {
    const isPDF = file.type === "application/pdf";
    if (!isPDF) {
      message.error("You can only upload PDF file!");
    }
    return isPDF || Upload.LIST_IGNORE;
  };

  const customRequest = ({ onSuccess }) => {
    // Giả lập việc tải lên sau 1 giây
    setTimeout(() => {
      onSuccess("ok");
    }, 1000);
  };

  const handleChange = (info) => {
    if (info.file.status === "done") {
      onFileUpload(info.file.name);
    }
  };

  return (
    <React.Fragment>
      <Upload
        beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={customRequest}
        showUploadList={false}
      >
        <Button
          className="gradient_button"
          icon={<PlusOutlined />}
          size="large"
          style={{ width: "210px", borderRadius: "30px" }}
        >
          Upload
        </Button>
      </Upload>
    </React.Fragment>
  );
};

export default UploadButton;
