import Link from "next/link";

const MainMenu = ({ theme, handleClose, menuTab, myMenu, setMyMenu }) => {
  const handleMenu = (menu) => {
    if (myMenu === menu) {
      setMyMenu("");
    } else {
      setMyMenu(menu);
    }
  };

  const dark = theme === "dark";
  return (
    <>
      {/* <!-- メインメニュー --> */}
      <div
        class={`mx-auto w-[90%] space-y-2 rounded-lg p-2 ${
          dark ? "bg-[#1E293B]" : "bg-white "
        }`}
      >
        {/* 上の3つ */}
        <div class="flex justify-between space-x-2 text-center font-bold whitespace-nowrap">
          <div
            href="/Pickup"
            onClick={handleClose}
            class={`w-[33%] p-1 rounded-lg ${
              dark ? "bg-red-700" : "bg-red-200"
            }`}
          >
            注目の試合
          </div>
          <Link
            href="/Board"
            onClick={handleClose}
            class={`w-[33%] rounded-lg p-1 ${
              dark ? "bg-green-700" : "bg-green-200"
            }`}
          >
            LIVE掲示板
          </Link>
          <div
            href="/Support"
            onClick={handleClose}
            class={`w-[33%] rounded-lg p-1 ${
              dark ? "bg-blue-700" : "bg-blue-200"
            }`}
          >
            サポート
          </div>
        </div>
        {/* 「メニュー」選択時メニュー */}
        {menuTab === 1 && (
          <ul class="text-lg font-bold">
            {/* マイページ */}
            <li>
              <div
                onClick={() => handleMenu("myPage")}
                class="flex justify-between border-t-2 p-2 "
              >
                <div class="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-7 w-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className={`${dark ? "text-white" : ""}`}>
                    マイページ
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 icon icon-tabler logoRotate icon-tabler-chevron-down ${
                    myMenu === "myPage" ? "rotate-180 " : ""
                  } ${theme === "dark" ? "text-[#FEFEFE]" : ""}`}
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              {myMenu === "myPage" ? (
                <div class="mx-auto pb-2 w-[70%]">
                  <ul
                    className={`text-[1rem] ${
                      dark ? "text-white" : "text-gray-600"
                    }`}
                  >
                    <li>アカウント情報</li>
                    <li>本人確認</li>
                    <li>入出金履歴</li>
                    <li>ベット履歴</li>
                    <li>ボーナス履歴</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
            {/* 入金・出金 */}
            <li>
              <div
                onClick={() => handleMenu("money")}
                class="flex justify-between border-t-2 p-2"
              >
                <div class="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-7 w-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>入金・出金</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 icon icon-tabler logoRotate icon-tabler-chevron-down ${
                    myMenu === "money" ? "rotate-180 " : ""
                  } ${theme === "dark" ? "text-[#FEFEFE]" : ""}`}
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              {myMenu === "money" ? (
                <div class="mx-auto pb-2 w-[70%]">
                  <ul
                    className={`text-[1rem] ${
                      dark ? "text-white" : "text-gray-600"
                    }`}
                  >
                    <li>入金一覧</li>
                    <li>出金一覧</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
            {/* 履歴情報 */}
            <li>
              <div
                onClick={() => handleMenu("history")}
                class="flex justify-between border-t-2 p-2"
              >
                <div class="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-7 w-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <div>履歴情報</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 icon icon-tabler logoRotate icon-tabler-chevron-down ${
                    myMenu === "history" ? "rotate-180 " : ""
                  } ${theme === "dark" ? "text-[#FEFEFE]" : ""}`}
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              {myMenu === "history" ? (
                <div class="mx-auto pb-2 w-[70%]">
                  <ul
                    className={`text-[1rem] ${
                      dark ? "text-white" : "text-gray-600"
                    }`}
                  >
                    <li>入出金履歴</li>
                    <li>ベット履歴</li>
                    <li>ボーナス履歴</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
            {/* 設定・変更 */}
            <li>
              <div
                onClick={() => handleMenu("setting")}
                class="flex justify-between border-t-2 p-2"
              >
                <div class="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-7 w-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>設定・変更</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 icon icon-tabler logoRotate icon-tabler-chevron-down ${
                    myMenu === "setting" ? "rotate-180 " : ""
                  } ${theme === "dark" ? "text-[#FEFEFE]" : ""}`}
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              {myMenu === "setting" ? (
                <div class="mx-auto pb-2 w-[70%]">
                  <ul
                    className={`text-[1rem] ${
                      dark ? "text-white" : "text-gray-600"
                    }`}
                  >
                    <li>メールアドレス変更</li>
                    <li>パスワード変更</li>
                    <li>メール配信設定</li>
                    <li>退会手続き</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
            {/* 規約 */}
            <li>
              <div
                onClick={() => handleMenu("terms")}
                class="flex justify-between border-t-2 p-2"
              >
                <div class="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-7 w-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                  <div>規約</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 icon icon-tabler logoRotate icon-tabler-chevron-down ${
                    myMenu === "terms" ? "rotate-180 " : ""
                  } ${theme === "dark" ? "text-[#FEFEFE]" : ""}`}
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              {myMenu === "terms" ? (
                <div class="mx-auto pb-2 w-[70%]">
                  <ul
                    className={`text-[1rem] ${
                      dark ? "text-white" : "text-gray-600"
                    }`}
                  >
                    <li>利用規約</li>
                    <li>ビットコイン利用規約</li>
                    <li>ボーナス規約</li>
                    <li>プライバシーポリシー</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
            {/* 責任あるギャンブル*/}
            <li class="flex justify-between border-t-2 p-2">
              <div class="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                <div>責任あるギャンブル</div>
              </div>
            </li>
          </ul>
        )}
        {/* 「遊ぶ」選択時メニュー */}
        {menuTab === 2 && (
          <div class="mx-auto mt-4">
            <div class="grid grid-cols-2 gap-1 p-1 whitespace-nowrap">
              {/* スポーツベット */}
              <div
                onClick={handleClose}
                href="/SportsBet"
                class={`flex flex-col items-center justify-center space-y-1 p-4 rounded-tl-lg ${
                  dark ? "bg-gray-500" : "bg-[#e7e7ea]"
                }`}
              >
                <img
                  src="https://www.svgrepo.com/show/475063/baseball.svg"
                  class="w-10"
                  alt=""
                />
                <div class={`font-bold ${dark ? "text-white" : "text-black"}`}>
                  スポーツベット
                </div>
              </div>
              {/* オンラインカジノ */}
              <div
                href="/OnlineCasino"
                onClick={handleClose}
                class={`flex flex-col items-center justify-center space-y-1 p-4 rounded-tr-lg ${
                  dark ? "bg-gray-500" : "bg-[#e7e7ea]"
                }`}
              >
                <img
                  src="https://www.svgrepo.com/show/484466/casino-coin-part-2.svg"
                  class="w-10"
                  alt=""
                />
                <div class={`font-bold ${dark ? "text-white" : "text-black"}`}>
                  オンラインカジノ
                </div>
              </div>
              {/* バーチャルスポーツ */}
              <div
                href="/VirtualSports"
                onClick={handleClose}
                class={`flex flex-col items-center justify-center space-y-1 p-4 rounded-bl-lg ${
                  dark ? "bg-gray-500" : "bg-[#e7e7ea]"
                }`}
              >
                <img
                  src="https://www.svgrepo.com/show/448273/azure-vms.svg"
                  class="w-10"
                  alt=""
                />
                <div
                  class={`font-bold text-[0.9rem] ${
                    dark ? "text-white" : "text-black"
                  }`}
                >
                  バーチャルスポーツ
                </div>
              </div>
              {/* 無料カジノ */}
              <div
                href="FreeCasino"
                onClick={handleClose}
                class={`flex flex-col items-center justify-center space-y-1 p-4 rounded-br-lg ${
                  dark ? "bg-gray-500" : "bg-[#e7e7ea]"
                }`}
              >
                <img
                  src="https://www.svgrepo.com/show/402695/slot-machine.svg"
                  class="w-10"
                  alt=""
                />
                <div class={`font-bold ${dark ? "text-white" : "text-black"}`}>
                  無料カジノ
                </div>
              </div>
            </div>
          </div>
        )}
        {/* お知らせ選択時メニュー */}
        {menuTab === 3 && <div>お知らせ</div>}
      </div>
    </>
  );
};

export default MainMenu;
