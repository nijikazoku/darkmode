const Searchbar = ({ theme }) => {
  const dark = theme === "dark";
  return (
    <>
      {/* <!-- 検索バー --> */}
      <div class={`mx-auto w-[90%] rounded-lg p-[0.2rem]`}>
        <div class="mx-auto flex w-full items-center rounded-lg">
          <input
            type="text"
            className={`h-[2.3rem] flex-grow rounded-l-lg py-2 pl-5 outline-none ${
              dark ? "bg-gray-600 placeholder-white text-white" : ""
            }
            `}
            placeholder="サイト内検索"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`icon icon-tabler icon-tabler-search h-[2.3em] w-10 rounded-r-lg ${
              dark ? "bg-[#1E293B]" : "bg-[#4d7bf8]"
            }  p-1 text-white`}
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
