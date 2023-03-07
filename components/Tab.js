const Tab = ({ menuTab, setMenuTab, theme, changeMenuTab }) => {
  const dark = theme === "dark";
  return (
    <>
      <div
        className={`mx-auto flex w-[90%] justify-between rounded-lg  py-1 px-2 text-center ${
          dark ? "bg-[#1E293B]" : "bg-white"
        }`}
      >
        <div
          onClick={() => changeMenuTab(1)}
          className={`w-[31%] rounded-md py-1 font-bold 
  ${menuTab === 1 && dark ? "bg-gray-500 text-white" : ""} 
  ${menuTab === 1 && !dark ? "bg-[#3469fb] text-white" : ""}
  ${!menuTab === 1 && dark ? "text-white" : ""}

  ${!menuTab === 1 && !dark ? "text-black" : ""}
  `}
        >
          メニュー
        </div>
        <div
          onClick={() => changeMenuTab(2)}
          className={`w-[31%] rounded-md py-1 font-bold 
  ${menuTab === 2 && dark ? "bg-gray-500 text-white" : ""} 
  ${menuTab === 2 && !dark ? "bg-[#3469fb] text-white" : ""}
  ${!menuTab === 2 && dark ? "text-white" : ""}

  ${!menuTab === 2 && !dark ? "text-black" : ""}
  `}
        >
          遊ぶ
        </div>
        <div
          onClick={() => changeMenuTab(3)}
          className={`w-[31%] rounded-md py-1 font-bold 
  ${menuTab === 3 && dark ? "bg-gray-500 text-white" : ""} 
  ${menuTab === 3 && !dark ? "bg-[#3469fb] text-white" : ""}
  ${!menuTab === 3 && dark ? "text-white" : ""}

  ${!menuTab === 3 && !dark ? "text-black" : ""}
  `}
        >
          お知らせ
        </div>
      </div>
    </>
  );
};

export default Tab;
