import { useEffect, useRef, useState } from "react";
import Faq from "./Faq";
import GuestLogin from "./GuestLogin";
import Language from "./Language";
import Logout from "./Logout";
import MainMenu from "./MainMenu";
import Searchbar from "./Searchbar";
import Sns from "./Sns";
import Tab from "./Tab";

const Sidebar = ({
  renderThemeChanger,
  theme,
  setTheme,
  isOpen,
  setIsOpen,
  isLogin,
  setIsLogin,
  menuTab,
  setMenuTab,
  changeMenuTab,
  myMenu,
  setMyMenu,
}) => {
  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <>
      <nav
        className={`space-y-2  w-screen h-screen px-4 absolute py-4 top-0 transform overflow-auto transition-transform duration-1000 ${
          isOpen ? "translate-y-0" : "-translate-x-full"
        } ${
          theme === "dark" ? "bg-[#0F172A] text-[#FEFEFE]" : "bg-[#e7e7ea] "
        }`}
      >
        <GuestLogin
          renderThemeChanger={renderThemeChanger}
          theme={theme}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setTheme={setTheme}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleLogin={handleLogin}
          handleClose={handleClose}
        />

        <Tab
          theme={theme}
          menuTab={menuTab}
          setMenuTab={setMenuTab}
          changeMenuTab={changeMenuTab}
        />
        <MainMenu
          theme={theme}
          menuTab={menuTab}
          myMenu={myMenu}
          setMyMenu={setMyMenu}
          handleClose={handleClose}
        />
        <Searchbar theme={theme} />
        <Faq theme={theme} handleClose={handleClose} />
        <Language theme={theme} />
        <Sns theme={theme} />
        <Logout
          handleLogin={handleLogin}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      </nav>
    </>
  );
};

export default Sidebar;
