const Faq = ({ handleClose, theme }) => {
  const dark = theme === "dark";
  return (
    <div
      href="/Frequent"
      onClick={handleClose}
      class={`mx-auto flex w-[90%] items-center justify-center space-x-1 rounded-lg ${
        dark ? "bg-gray-700" : "bg-white"
      } py-1`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={`h-6 w-6 ${!dark ? "text-[#1E293B]" : "text-white"}`}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
      <div class="text-lg font-bold">よくある質問</div>
    </div>
  );
};

export default Faq;
