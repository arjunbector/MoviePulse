"use client";

import imbdRatingConverter from "@/utils/imbdRatingConverter";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
const Movie = ({ params }) => {
  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${params.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setIsLoading(false);
      });

    setImage(
      `http://img.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${params.key}`
    );
    console.log(data);
  }, []);
  return (
    <main className="min-h-[100vh] bg-[#0F0F0F] text-white p-2">
      <Navbar/>
      {isLoading ? (
        "loading..."
      ) : (
        <div>
          <div className="flex justify-between items-start px-12">
            <div className="left flex flex-col items-start">
              <div className=" text-[4rem]">{data.Title}</div>
              <div className="px-3">
                <span>{data.Year}</span>
                <span> . </span>
                <span>{data.Runtime}</span>
              </div>
            </div>
            <div className="my-4">
              
                <Link href={`https://www.imdb.com/title/${params.key}/`}>
                  <div className="imbd-card leading-1">
                    IMBD Rating
                    <div className="leading-1 my-[-3px]">
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

          <div className="flex justify-around items-center">
            <div className="poster h-[70vh] p-3 w-[50vb]">
              {image ? (
                <img className="h-full" src={image} alt="poster" />
              ) : (
                "loading..."
              )}
            </div>

            <div className="right w-4/6">
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
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Movie;
