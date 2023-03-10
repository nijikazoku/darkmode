import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useId, useRef, useState } from "react";

const SlideRegister = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationPassword, setValidationPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [height, setHeight] = useState("h-screen");
  const parentRef = useRef(null);
  useEffect(() => {
    if (parentRef.current) {
      setHeight(parentRef.current.offsetHeight);
    }
  }, [show]);

  return (
    <>
      <div className="mx-auto">
        <div
          className="rounded-lg w-full border-b-[5px] animate-bounce border-[#03612e]  bg-[#009944] py-1 text-white"
          onClick={() => setShow(!show)}
        >
          <button>15秒で登録</button>
        </div>
      </div>
      <div className="overflow-y-scroll" ref={parentRef}>
        <Transition.Root show={show}>
          <BackgroundLayer />
          <SlideOverLayer>
            <FadeIn delay="delay-[100ms]">
              <div className="relative  w-full mb-4">
                <p className="text-2xl text-blue-600 dark:text-white">
                  アカウント作成
                </p>
                <svg
                  onClick={() => setShow(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 absolute opacity-60 top-0 -right-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </FadeIn>
            <div className="space-y-4">
              <FadeIn delay="delay-[300ms]">
                <input
                  className="border-b p-1 outline-none bg-transparent w-full"
                  placeholder="メールアドレス"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FadeIn>
              <FadeIn delay="delay-[600ms]">
                <input
                  className="border-b p-1 outline-none w-full bg-transparent"
                  type="password"
                  placeholder="パスワード"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FadeIn>
              <FadeIn delay="delay-[900ms]">
                <input
                  className="bg-transparent border-b p-1 outline-none w-full"
                  placeholder="パスワード(確認用)"
                  type="password"
                  value={validationPassword}
                  onChange={(e) => setValidationPassword(e.target.value)}
                />
              </FadeIn>

              <FadeIn delay="delay-[1200ms]">
                <input
                  className="bg-transparent border-b p-1 outline-none w-full"
                  placeholder="姓"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  className="bg-transparent border-b p-1 outline-none w-full"
                  placeholder="名"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FadeIn>

              <FadeIn delay="delay-[1500ms]">
                <input
                  className="bg-transparent border-b p-1 outline-none w-full"
                  placeholder="電話番号"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </FadeIn>
              <FadeIn delay="delay-[1800ms]">
                <img
                  className=""
                  src="https://i.imgur.com/IMAs57M.png"
                  alt=""
                />
              </FadeIn>
              <FadeIn delay="delay-[2100ms]">
                <button className="bg-blue-600 dark:bg-[#42A5F5] text-white rounded-lg w-full py-2 font-bold">
                  今すぐ遊ぶ
                </button>
              </FadeIn>
            </div>
          </SlideOverLayer>
        </Transition.Root>
      </div>
    </>
  );
};
export default SlideRegister;

const BackgroundLayer = () => (
  <Transition.Child
    enter="transition-opacity ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="fixed inset-0 h-full bg-gray-500 opacity-75" />
  </Transition.Child>
);

const SlideOverLayer = ({ children }) => (
  <Transition.Child
    as={Fragment}
    enter="transform transition ease-in-out duration-500"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 delay-100"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-2xl">
            <div className="flex py-7 flex-col overflow-y-scroll rounded-lg bg-white dark:bg-slate-900 shadow-xl">
              <div className="px-4 sm:px-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
);

const FadeIn = ({ delay, children }) => (
  <Transition.Child
    enter={`transition-all ease-in-out duration-700 ${delay}`}
    enterFrom="opacity-0 translate-y-6"
    enterTo="opacity-100 translate-y-0"
    leave="transition-all ease-in-out duration-300"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className="w-[80%] mx-auto flex justify-center space-x-4"
  >
    {children}
  </Transition.Child>
);
