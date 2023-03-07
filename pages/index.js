import Link from "next/link";
import { useEffect } from "react";
import Button from "../components/Button";

const index = () => {
  return (
    <div className="w-[90%] py-10 space-x-3 text-center  mx-auto">
      <h1>１ページ目</h1>
      <div className="border-2 border-black p-3 dark:border-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        aliquam cum. Sapiente quae qui architecto facere nihil earum sequi
        voluptatibus iure error, molestiae est iste quasi, doloremque libero at
        soluta optio deleniti dolor labore delectus, sed nulla ea! Sunt eum
        exercitationem soluta nulla non cum eos doloribus dolore eligendi
        eveniet? Temporibus animi blanditiis atque expedita maiores consectetur?
        Autem officiis inventore illum soluta excepturi minima culpa hic maiores
        consectetur dolorum, provident dolor aliquid vitae expedita assumenda
        ipsam doloremque, praesentium repellat accusamus, ad similique deleniti.
        Quas, ipsa aliquid similique ab adipisci porro ad fuga expedita
        voluptate officia quasi? Non quae rem delectus!
      </div>
      <div className="flex justify-between">
        <div></div>
        <Link href="/Test2">次</Link>
      </div>
    </div>
  );
};

export default index;
