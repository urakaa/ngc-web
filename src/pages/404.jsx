import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="mx-auto my-[50vh] max-w-8xl flex  justify-center items-center text-[14px]">
        <div className="text-white">Уучлаарай, энэ хуудас олдсонгүй.</div>
        <button className="justify-center p-2 ml-5 text-white rounded-lg cursor-pointer bg-slate-400 hover:bg-slate-500">
          <Link href="/">Буцах </Link>
        </button>
      </div>
    </>
  );
}
