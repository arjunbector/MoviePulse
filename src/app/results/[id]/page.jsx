"use client";
import Navbar from "@/components/Navbar";
import useFetchData from "@/hooks/useFetchData";
import { useDeferredValue, useEffect, useState } from "react";

const Result = ({ params }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(process.env.NEXT_PUBLIC_API_KEY);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=wednesday`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err);
      });
  }, []);

  
  return (
    <>
      <Navbar />
      <main className="min-h-[100vh] bg-[#0F0F0F] text-white">{params.id}
      <p>data</p>
      </main>
    </>
  );
};

export default Result;
