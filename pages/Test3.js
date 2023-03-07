import Link from "next/link";

const Test3 = () => {
  return (
    <>
      <div className="w-[90%] py-10 space-x-3 text-center  mx-auto">
        <h1>３ページ目</h1>
        <div className="border-2 border-black p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          minus rem! Sapiente neque tempore amet placeat hic modi eos tenetur
          accusantium! Quos quas iusto veritatis quo rem facilis natus molestias
          velit, quaerat animi enim voluptas aperiam illo. Culpa tenetur sunt
          beatae aperiam modi qui quaerat delectus placeat, animi perferendis
          itaque inventore quidem nihil ullam vero quas perspiciatis magnam amet
          eligendi tempore suscipit sequi? Tempora earum accusantium ipsam
          placeat doloribus architecto ad itaque laboriosam molestiae?
          Consectetur et sit totam obcaecati, sequi corporis tempore quis animi!
          Quia id corrupti itaque dolorum optio? Consequatur molestias totam
          quam maiores, iste vitae ut ullam ratione.
        </div>
        <div className="flex justify-between">
          <Link href="/Test2">前</Link>
          <Link href="/">最初に戻る</Link>
        </div>
      </div>
    </>
  );
};

export default Test3;
