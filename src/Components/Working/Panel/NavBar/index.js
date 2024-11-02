import React, { useState } from "react";
import "./style.css";
import Translate from "./Translate";
import ChatBox from "./ChatBox";
import Definite from "./Definite";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <React.Fragment>
      <nav>
        <a
          href
          onClick={() => handleItemClick(1)}
          className={activeIndex === 1 ? "active" : ""}
        >
          <Translate />
        </a>
        <a
          href
          onClick={() => handleItemClick(2)}
          className={activeIndex === 2 ? "active" : ""}
        >
          <Definite />
        </a>
        <a
          href
          onClick={() => handleItemClick(3)}
          className={activeIndex === 3 ? "active" : ""}
        >
          <ChatBox />
        </a>
        {activeIndex !== null && <span className={`index-${activeIndex}`} />}
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
