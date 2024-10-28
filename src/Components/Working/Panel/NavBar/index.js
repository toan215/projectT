import React from "react";
import "./style.css";
import { Menu } from "antd";
import Translate from "./Translate";
import ChatBox from "./ChatBox";
import Definite from "./Definite";


const NavBar = () => {
  return (
    <React.Fragment>
      <Menu
        style={{ width: "75%" }}
        mode="horizontal"
        items={[
          { key: "1", label: <Translate /> },
          { key: "2", label: <ChatBox /> },
          { key: "3", label: <Definite /> },
        ]}
      />
    </React.Fragment>
  );
};

export default NavBar;
