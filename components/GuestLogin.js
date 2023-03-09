import { useState } from "react";
import RegisterForm from "./RegisterForm";
import SelectTimeZone from "./SelectTimeZone";

const GuestLogin = ({ isLogin, theme, handleClose, handleLogin, setTheme }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* 会員名 閉じるボタン ダークモード */}
      <div className="flex w-[90%] mb-4 mt-2 mx-auto justify-between">
        {/* ゲストor会員 */}
        <div className="space-x-1 whitespace-nowrap items-end px-2 flex w-[50%]">
          {isLogin ? (
            <span className="text-green-600 font-bold text-xl">
              ユーザーネーム
            </span>
          ) : (
            <span className="text-red-600 font-bold text-xl">ゲスト</span>
          )}
          <span className="text-gray-400 text-[0.9rem] pb-[2px] font-bold">
            様
          </span>
        </div>
        {/* <!--ダークモード 閉じるボタン --> */}
        <div class="mx-auto z-20 flex flex-grow items-center justify-end px-3">
          <div class="flex items-center space-x-3">
            {theme === "light" ? (
              <svg
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 rounded-md bg-white p-1 text-black"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
              </svg>
            ) : (
              <svg
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7 rounded-md bg-gray-600 p-1 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clip-rule="evenodd"
                />
              </svg>
            )}
            {/* 閉じるボタン */}
            <svg
              onClick={() => {
                handleClose();
                setShow(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class={`h-7 w-7 rounded-md  ${
                theme === "dark" ? "bg-gray-600" : "bg-white"
              }`}
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* タイムゾーン */}
      <SelectTimeZone show={show} />
      {/* <!-- 登録・ログインボタン --> */}
      {!isLogin && (
        <div class="mx-auto w-[90%] space-y-2 relative text-center">
          <div
            onClick={() => setShow(!show)}
            className={`rounded-lg animate-bounce  bg-[#009944] py-1 text-white`}
          >
            <button>15秒で登録</button>
          </div>
          <div
            onClick={handleLogin}
            id="box"
            class="rounded-lg text-black bg-[#E2F049] py-1"
          >
            ログイン
          </div>
          <div
            className={`absolute dark:bg-slate-600 w-full  top-17 rounded-lg -left-0 dark:border-none ${
              show ? " z-10 bg-gray-100 border" : "hidden"
            }  px-10 py-5`}
          >
            <RegisterForm show={show} setShow={setShow} />
          </div>
        </div>
      )}
    </>
  );
};

export default GuestLogin;
