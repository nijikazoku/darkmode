import { Transition } from "@headlessui/react";
import { useState } from "react";
import FadeIn from "./FadeIn";

const RegisterForm = ({ show }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");

  function handleBirthdateChange(event) {
    setBirthdate(event.target.value);
  }
  return (
    <div>
      <Transition.Root
        className="flex flex-col justify-center space-y-4 items-center"
        show={show}
      >
        {/* メールアドレス */}
        <FadeIn delay="delay-[0ms]">
          <input
            placeholder="メールアドレス"
            className="outline-none dark:placeholder-white  bg-transparent border-black border-b w-[15rem] p-1 "
            id="firstName"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FadeIn>
        {/* パスワード */}
        <FadeIn delay="delay-[200ms]">
          <input
            type="password"
            placeholder="パスワード"
            className="dark:placeholder-white  outline-none bg-transparent border-black border-b p-1 w-[15rem]"
            id="firstName"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FadeIn>
        <FadeIn delay="delay-[400ms]">
          <input
            type="password"
            placeholder="パスワード(確認用)"
            className=" outline-none bg-transparent border-black border-b p-1 w-[15rem] dark:placeholder-white "
            id="firstName"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FadeIn>
        {/* 名前 */}
        <FadeIn delay="delay-[600ms]">
          <input
            placeholder="姓"
            className="outline-none bg-transparent border-black border-b w-[15rem] p-1 dark:placeholder-white "
            id="firstName"
            autoComplete="off"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FadeIn>
        <FadeIn delay="delay-[800ms]">
          <input
            placeholder="名"
            className="outline-none bg-transparent border-black  border-b w-[15rem] p-1 dark:placeholder-white "
            id="firstName"
            autoComplete="off"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FadeIn>
        {/* 電話番号 */}
        <FadeIn delay="delay-[1000ms]">
          <input
            placeholder="電話番号"
            className="outline-none bg-transparent border-black border-b w-[15rem] p-1 dark:placeholder-white "
            id="firstName"
            autoComplete="off"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FadeIn>

        {/* 送信ボタン */}
        <FadeIn delay="delay-[1400ms]" className="">
          <button className="w-[15rem] p-2 bg-blue-600 text-white rounded-lg">
            今すぐ遊ぶ
          </button>
        </FadeIn>
      </Transition.Root>
    </div>
  );
};

export default RegisterForm;
