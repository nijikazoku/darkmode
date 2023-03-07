import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [myMenu, setMyMenu] = useState("");
  const [menuTab, setMenuTab] = useState(1);
  const [isBtc, setIsBtc] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => setMounted(true), []);
  const renderThemeChanger = () => {
    return (
      <button
        className="border p-2  text-white dark:text-white border-white dark:border-gray-400 dark:bg-slate-800 text-center"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        切り替える
      </button>
    );
  };
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

  return (
    <>
      <header class="h-[60px] fixed top-0 w-full bg-[#22396d]">
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

          {/* BTCとUSD */}
          {/* {isBtc ? (
            <div className="flex-grow flex text-center">
              <div
                className="w-[20%] flex items-center justify-end"
                onClick={handleBtc}
              >
                <img
                  className="w-6"
                  src="https://www.pngall.com/wp-content/uploads/12/USD-PNG-Background.png"
                  alt=""
                />
              </div>
              <div className="text-sm flex-grow  font-bold">
                <div className="text-center">〇〇〇〇〇様</div>
                <div>
                  <span className="text-[#2ab4f4] text-[1rem] font-bold">
                    0.19303205
                  </span>
                  <span className="text-thin text-[#2ab4f4] text-[0.8rem]">
                    BTC
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex text-center">
              <div
                className="w-[20%] flex items-center justify-end"
                onClick={handleBtc}
              >
                <img
                  className="w-6"
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                  alt=""
                />
              </div>
              <div className="text-sm flex-grow font-bold">
                <div className="text-center">〇〇〇〇〇様</div>
                <div>
                  <span className="text-[#2ab4f4] text-[1rem] font-bold">
                    3482
                  </span>
                  <span className="text-thin text-[#2ab4f4] text-[0.8rem]">
                    USD
                  </span>
                </div>
              </div>
            </div>
          )} */}
          <div>{renderThemeChanger()}</div>
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
