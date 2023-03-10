import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import db from "../../src/fire";

const InputBoard = () => {
  const colors = [
    "text-red-500",
    "text-green-500",
    "text-blue-500",
    "text-yellow-500",
    "text-purple-500",
  ];
  const [inputText, setInputText] = useState("");
  const [showColor, setShowColor] = useState(false);
  const [selectColor, setSelectColor] = useState("text-black");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText === "") return;
    const postData = {
      text: inputText,
      postedAt: serverTimestamp(),
      color: selectColor,
    };
    await addDoc(collection(db, "posts"), postData);
    setInputText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="コメントを書き込もう！"
          className={`border-2 px-2 outline-none py-2 fixed bottom-0 mb-[60px] w-full ${
            selectColor === "text-red-600" && "placeholder-red-600"
          } ${selectColor === "text-green-600" && "placeholder-green-600"} ${
            selectColor === "text-blue-600" && "placeholder-blue-600"
          }`}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      <div className="fixed bottom-2 right-3 mb-[60px] ">
        <ul className="flex space-x-2">
          <li
            onClick={() => setSelectColor("text-black")}
            className="text-black text-xl"
          >
            ●
          </li>
          <li
            onClick={() => setSelectColor("text-red-600")}
            className="text-red-600 text-xl"
          >
            ●
          </li>
          <li
            onClick={() => setSelectColor("text-green-600")}
            className="text-green-600 text-xl"
          >
            ●
          </li>
          <li
            onClick={() => setSelectColor("text-blue-600")}
            className="text-blue-600 text-xl"
          >
            ●
          </li>
        </ul>
      </div>
    </>
  );
};

export default InputBoard;
