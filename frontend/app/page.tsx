import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="m-5">
      <button className="block bg-blue-500 text-white font-bold px-2 py-1 rounded-full shadow-md shadow-gray-500/50 mb-5">
        <Link href="/login" className="flex flex-row items-center">
          <div className="mr-2">Login</div>
          <FaRegArrowAltCircleRight className="block" />
        </Link>
      </button>

      <button className="block bg-sky-500 text-white font-bold px-2 py-1 rounded-full shadow-md shadow-gray-500/50 mb-5">
        <Link href="/tasks" className="flex flex-row items-center">
          <div className="mr-2">Task List</div>
          <FaRegArrowAltCircleRight className="block" />
        </Link>
      </button>
    </div>
  );
}
