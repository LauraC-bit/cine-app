import React, { useState } from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ButtonMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [blackBackground, setBlackBackground] = useState(false);

  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);
  const [iconDarkMode, setIconDarkMode] = useState("");

  useEffect(() => {
    if (isDarkModeOn === false) {
      setIconDarkMode("");
    } else {
      setIconDarkMode("white");
    }
  }, []);

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
            <div
              className={isDarkModeOn ? "icon-left_white" : "icon-left_black"}
            ></div>
            <div
              className={isDarkModeOn ? "icon-right_white" : "icon-right_black"}
            ></div>
          </div>
        </div>
        <div
          className={
            openMenu && isDarkModeOn
              ? "menu darkMode"
              : openMenu
              ? "menu"
              : "displayMenu"
          }
        >
          <Navigation openMenu={openMenu} />
        </div>
      </div>
    </div>
  );
};

export default ButtonMenu;
