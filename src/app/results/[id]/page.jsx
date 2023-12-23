"use client";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const Result = ({ params }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dataArray, setDataArray] = useState(null);
  const userInput = params.id.replace(/%20/g, " ");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${userInput}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoading(false);
        const cardsArr = data.Search.map((movie) => {
          return (
            <Card
              title={movie.Title}
              type={movie.Type}
              year={movie.Year}
              poster={movie.Poster}
            />
          );
        });
        setDataArray(cardsArr);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-[100vh] bg-[#0F0F0F] text-white flex flex-col items-center">
        <h1 className="text-[2rem] font-bold my-5">Search results for {userInput}</h1>
        <div className="flex gap-16 flex-wrap px-10 justify-center ">
          {dataArray}
        </div>
      </main>
    </>
  );
};

export default Result;
