import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const { theme, setTheme } = useTheme("");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [myMenu, setMyMenu] = useState("");
  const [menuTab, setMenuTab] = useState(1);
  const [isBtc, setIsBtc] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleOpen = () => {
    setIsOpen(true);
    setMenuTab(1);
    setMyMenu("");
  };
  const handleBtc = () => {
    setIsBtc(!isBtc);
  };
  const changeMenuTab = (index) => {
    setMenuTab(index);
  };

  const dark = theme === "dark";

  return (
    <>
      <header class="h-[60px] z-10 fixed top-0 w-full bg-[#22396d]">
        <div className="flex px-1 justify-between space-x-2 h-full items-center">
          <div className="flex space-x-2 ">
            <svg
              onClick={handleOpen}
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 icon icon-tabler icon-tabler-menu-2 text-white"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
            <Link href="/" className="space-x-1 pt-1 text-xl font-bold">
              <span class="text-[#409AD6]">BET</span>
              <span class="text-[#E8B30F]">CHANNEL</span>
            </Link>
          </div>
          <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {dark ? (
              <button className="border-2 p-1">ライトモードにする</button>
            ) : (
              <button className="text-white border-2 p-1">
                ダークモードにする
              </button>
            )}
          </div>
        </div>
        <Sidebar
          setMyMenu={setMyMenu}
          myMenu={myMenu}
          menuTab={menuTab}
          setMenuTab={setMenuTab}
          changeMenuTab={changeMenuTab}
          theme={theme}
          setTheme={setTheme}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      </header>
    </>
  );
};

export default Header;
