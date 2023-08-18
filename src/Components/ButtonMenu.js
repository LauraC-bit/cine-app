import React, { useState } from "react";
import Navigation from "./Navigation";

const ButtonMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [blackBackground, setBlackBackground] = useState(false);

  const HandleClick = () => {
    if (openMenu === false) {
      setOpenMenu(true);
      setBlackBackground(true);
    } else {
      setOpenMenu(false);
      setBlackBackground(false);
    }
  };

  const HandleMenu = (e) => {
    if (openMenu === true) {
      setBlackBackground(false);
      setOpenMenu(false);
    }
  };

  return (
    <div
      className={blackBackground ? "blackBackground" : ""}
      onClick={(e) => HandleMenu(e)}
    >
      <div className="relative">
        <div className="placement_btn">
          <div
            className={openMenu ? " btn1 open" : " btn1"}
            data-menu="1"
            onClick={() => HandleClick()}
          >
            <div className="icon-left"></div>
            <div className="icon-right"></div>
          </div>
        </div>
        <div className={openMenu ? "menu" : "displayMenu"}>
          <Navigation openMenu={openMenu} />
        </div>
      </div>
    </div>
  );
};

export default ButtonMenu;