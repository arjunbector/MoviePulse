"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = (props) => {
  const router = useRouter();
  const [userInput, setUserInput] = useState(props.userInput);
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && userInput) {
      router.push(`/results/${userInput}`);
    }
  };
  const pathname = usePathname();
  return (
    <nav className="w-full h-[11vh] sm:h-[10vh] flex flex-col sm:flex-row justify-between px-8 py-5 items-center bg-[#0F0F0F] text-white">
      <div>
        <Link 
        href={"/"}>
          <div className="font-bold text-[4vh]">
            <span className="text-[#FF0000]">Movies</span>
            <span>Pulse</span>
          </div>
        </Link>
        <div className="flex gap-5"></div>
      </div>
      <div className="flex gap-2 align-center">
        {!(pathname == "/") && (
          <div className="relative">
            {" "}
            <input
              className=" focus:outline-none p-1 text-lg sm:text-sm rounded-md pr-8 bg-neutral-700 text-neutral-100"
              type="text"
              placeholder="Search"
              value={userInput}
              onChange={handleInputChange}
              onKeyUp={handleKeyUp}
            />
            <Link href={!userInput ? "" : `/results/${userInput}`}>
              <FaMagnifyingGlass className="text-neutral-100 absolute right-2 top-2" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
