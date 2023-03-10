import { collection, getDocs } from "firebase/firestore";
import Contents from "../components/Board/Contents";
import InputBoard from "../components/Board/InputBoard";

const Board = () => {
  return (
    <div className="bg-[#5ecefd] h-screen">
      <Contents />
      <InputBoard />
    </div>
  );
};

export default Board;
