"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import useWindowDimensions from "../lib/useWindowDimensions";

const HomePage: FC = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const getDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <main>
      <div className="h-40 text-center">
        <p>{width + "  " + height}</p>
        <button onClick={getDimensions}>Get Dimensions</button>
        <h2 className="text-2xl">Hemsundar Paranthaman</h2>
        <h1 className="text-5xl">Front end</h1>
        <h1 className="text-5xl">Developer</h1>
      </div>
      <div className="aspect-[1920/1280] relative w-full">
        <Image
          src={"/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg"}
          alt={"Developer hero image"}
          fill
        />
      </div>
      <div className="absolute z-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white opacity-50 rounded-xl w-[80%] h-[10%]  flex items-center justify-center">
        <h1>Site under construction.</h1>
      </div>
    </main>
  );
};

export default HomePage;
