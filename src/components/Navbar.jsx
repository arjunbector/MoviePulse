"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && userInput) {
      router.push(`/results/${userInput}`);
    }
  };
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="w-full h-[10vh] flex justify-between px-8 py-5 items-center bg-[#0F0F0F] text-white">
      <div className="flex gap-8">
        <div className="font-bold ">
          <span className="text-[#FF0000]">Movies</span>
          <span>Pulse</span>
        </div>
        <div className="flex gap-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Search</Link>
          <Link href={"/"}>Latest</Link>
        </div>
      </div>
      <div className="flex gap-2 align-center">
        {!(pathname == "/") && (
          <div className="relative">
            {" "}
            <input
              className=" focus:outline-none text-black p-1 text-sm rounded-md pr-8"
              type="text"
              placeholder="Search"
              value={userInput}
              onChange={handleInputChange}
              onKeyUp={handleKeyUp}
            />
            <Link href={!userInput ? "" : `/results/${userInput}`}>
              <FaMagnifyingGlass className="text-[#111111] absolute right-2 top-2" />
            </Link>
          </div>
        )}
        <Button text={"Login"} />
      </div>
    </nav>
  );
};

export default Navbar;
