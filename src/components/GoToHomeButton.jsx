import { IoHomeSharp } from "react-icons/io5";

export default function GoToHomeButton() {
  return (
    <a href="/">
      <button className="text-3xl text-white bg-zinc-700 border-b-4 border-zinc-800 rounded-full p-4 ml-4 mt-4 hover:bg-zinc-600 active:border-b-0">
        <IoHomeSharp />
      </button>
    </a>
  );
}