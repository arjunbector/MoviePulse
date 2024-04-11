"use client";

import imbdRatingConverter from "@/utils/imbdRatingConverter";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import Loader from "@/components/Loader";
const Movie = ({ params }) => {
  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${params.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });

    setImage(
      `http://img.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${params.key}`
    );
  }, []);
  return (
    <main className="min-h-[100vh] bg-[#0F0F0F] text-white p-2">
      <Navbar />

      {isLoading ? (
        <Loader/>
      ) : (
        <div>
          <div className="flex justify-between items-start px-2 sm:px-12 gap-1 mt-8">
            <div className="left flex flex-col items-start w-4/5">
              <div className="text-[1.8rem] sm:text-[4rem] leading-none">
                {data.Title}
              </div>
              <div className="text-xs sm:text-lg">
                <span>{data.Year}</span>
                <span> . </span>
                <span>{data.Runtime}</span>
              </div>
            </div>
            <div>
              <Link href={`https://www.imdb.com/title/${params.key}/`}>
                <div className="imbd-card leading-1 text-xs sm:text-md">
                  IMDB Rating
                  <div className="leading-none text-xs sm:text-md">
                    <span className="font-bold leading-1">
                      {data.imdbRating}{" "}
                    </span>
                    / 10
                  </div>
                  {imbdRatingConverter(data.imdbVotes) + " votes"}
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-around items-center">
            <div className="poster h-[50vh] sm:h-[70vh] p-3 flex justify-center">
              {image ? (
                <img
                  className="h-full sm:h-full sm:w-auto"
                  src={image}
                  alt="poster"
                />
              ) : (
                "loading..."
              )}
            </div>

            <div className="right w-full px-10 sm:px-0 sm:w-4/6 mt-2 sm:mt-0">
              <p>{data.Plot}</p>
              <div className="line h-[1px] w-full bg-slate-300 opacity-40 my-1"></div>
              <p>
                <span className="font-bold">Genre- </span> {data.Genre}
              </p>
              <div className="line h-[1px] w-full bg-slate-300 opacity-40 my-1"></div>
              <p>
                <span className="font-bold">Release Date- </span>{" "}
                {data.Released}
              </p>
              <div className="line h-[1px] w-full bg-slate-300 opacity-40 my-1"></div>
              <p>
                <span className="font-bold">Director- </span> {data.Director}
              </p>
              <div className="line h-[1px] w-full bg-slate-300 opacity-40 my-1"></div>
              <p>
                <span className="font-bold">Writers- </span> {data.Writer}
              </p>
              <div className="line h-[1px] w-full bg-slate-300 opacity-40 my-1"></div>
              <p>
                <span className="font-bold">Stars- </span> {data.Actors}
              </p>
              <div className="line h-[1px] w-full bg-slate-300 opacity-40 my-1"></div>
              <p>
                <span className="font-bold">Language- </span> {data.Language}
              </p>
              <div className="line h-[1px] w-full bg-slate-300 opacity-40 my-1"></div>
              <p>
                <span className="font-bold">Awards- </span> {data.Awards}
              </p>
              <div className="line h-[1px] w-full bg-slate-300 opacity-40 my-1"></div>
              <p>
                <span className="font-bold">Earnings- </span> {data.BoxOffice}
              </p>
              <div className="text-center">
                <Link
                href={`https://www.imdb.com/title/${params.key}/`}>
                  <button className="m-4 border p-1 rounded-md hover:scale-110 transition-all">
                    View on IMDB
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Movie;
