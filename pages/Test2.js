import Link from "next/link";

const Test2 = () => {
  return (
    <>
      <div className="w-[90%] py-10 space-x-3 text-center  mx-auto">
        <h1>２ページ目</h1>
        <div className="border-2 border-black p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          accusamus nesciunt rem odit sit ea, debitis delectus nihil impedit
          quis temporibus vel deserunt suscipit amet corrupti qui laudantium?
          Quisquam incidunt sunt similique laboriosam! Officiis, necessitatibus.
          Labore consequuntur, quibusdam a quis error quod illo iusto veritatis
          quae non voluptas accusamus ducimus necessitatibus vel earum
          consectetur quidem commodi vitae ea! Ut soluta excepturi accusantium
          iusto vitae in optio facere mollitia laudantium sint officiis omnis
          eligendi qui rerum fuga et eos, quam repudiandae assumenda quidem
          libero dolorem cum expedita nulla. Vero aliquam vitae, temporibus sunt
          cupiditate natus non illum earum fuga voluptas et.
        </div>
        <div className="flex justify-between">
          <Link href="/">前</Link>
          <Link href="/Test3">次</Link>
        </div>
      </div>
    </>
  );
};

export default Test2;
