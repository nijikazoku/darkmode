import { collection, getDocs } from "firebase/firestore";
import Contents from "../components/Board/Contents";
import InputBoard from "../components/Board/InputBoard";

const Board = () => {
  return (
    <div className="overflow-x-auto mb-[47px]">
      <Contents />
      <InputBoard />
    </div>
  );
};

export default Board;
