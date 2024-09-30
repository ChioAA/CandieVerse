import { useQueryClient } from "@tanstack/react-query";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect } from "react";
import { HeroSection } from "@/pages/Mint/components/HeroSection";
import React, { useState } from 'react';

import { useGetCollectionData } from "@/hooks/useGetCollectionData";

import pearl from "@/assets/movies/pearl.mp4"
import iris from "@/assets/movies/iris.mp4"
import captain from "@/assets/movies/captain.mp4"
import submarine from "@/assets/movies/submarine.mp4"
import akala from "@/assets/movies/akala.mp4"
import tideland from "@/assets/movies/tideland.mp4"
import behind from "@/assets/movies/behind.mp4"
import epik from "@/assets/movies/epik.mp4"
import thething from "@/assets/movies/thething.mp4"
import sideways from "@/assets/movies/sideways.mp4"
import lovely from "@/assets/movies/lovely.mp4"

import { Header } from "@/components/Header";
import Sidebar from "../pages/Mint/components/Sidebar";
import MovieGallery from "@/pages/Mint/components/MovieGallery";
import { title } from "process";
import { sub } from "date-fns";
export function Mint() {
  const [selectedCategory, setSelectedCategory] = useState('continue');
  const { data, isLoading } = useGetCollectionData();
  const queryClient = useQueryClient();
  const { account } = useWallet();
  const movies = [
    {
      id: "1",
      title: "Pearl",
      imageUrl: "path/to/inception.jpg",
      videoUrl: pearl
    },
    {
      id: "2",
      title: "Lovely By Surprise",
      imageUrl: "path/to/interstellar.jpg",
      videoUrl: lovely
    },
    {
      id:"3",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: captain
    },
    {
      id:"4",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: submarine
    },
    {
      id:"5",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: akala
    },
    {
      id:"6",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: behind
    },
    {
      id:"7",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: tideland
    },
    {
      id:"8",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: epik
    },
    {
      id:"9",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: thething
    },
    {
      id:"9",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: lovely
    },
    {
      id:"9",
      title: "Iris",
      imageUrl: "screen",
      videoUrl: iris
    },
    // Add more movies as needed
  ];

  useEffect(() => {
    queryClient.invalidateQueries();
  }, [account, queryClient]);

  if (isLoading) {
    return (
      <div className="text-center p-8">
        <h1 className="title-md">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex min-h-screen" >
      <Sidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <main className="flex flex-col gap-10 w-screen bg-pink-100 bg-hero-pattern justify-center">
        <Header />
          {/* <ConnectWalletAlert /> */}
          <HeroSection />
          <MovieGallery movies={movies}/>
        </main>

      </div>
    </>
  );
}
