"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyUp = (event) => {
    if(event.key === "Enter" && userInput){
      router.push(`/results/${userInput}`)
    }
  };

  return (
    <main className="bg-[#0F0F0F] flex flex-col items-center">
      <Navbar />
      <section className="min-h-[90vh] w-full flex flex-col items-center justify-center">
        <h1 className="text-slate-200 text-[5vw] mb-3 sm:mb-6 text-wrap text-center">Your Movie Search Ends Here</h1>
        <div className="w-[80%] pb-10 relative flex align-center">
          <input
            placeholder="Search your movie here"
            value={userInput}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            className="all-none w-full h-10 p-2 focus:outline-none"
            type="text"
          />
          <Link
          className="bg-red-500 w-10"
          href={!userInput ? "/" : `/results/${userInput}`}
          >
            <span >
              <FaMagnifyingGlass className="text-[#111111] absolute right-2 top-3" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
