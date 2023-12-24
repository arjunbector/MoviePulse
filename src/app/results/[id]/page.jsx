"use client";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import SkeletonCard from "@/components/SkeletonCard";
import Link from "next/link";
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
            <Link key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
              <Card
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
                poster={movie.Poster}
              />
            </Link>
          );
        });
        setDataArray(cardsArr);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  const skeletonCards = Array(10).fill(<SkeletonCard />);
  return (
    <>
      <Navbar userInput={userInput} />
      <main className="min-h-[100vh] bg-[#0F0F0F] text-white flex flex-col items-center">
        <h1 className="text-[5vb] font-bold my-5 text-center">
          Search results for {userInput}
        </h1>
        <div className="grid grid-cols-1 gap-16 px-10 mb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {isLoading ? skeletonCards : error ? "No movies found" : dataArray}
        </div>
      </main>
    </>
  );
};

export default Result;
