import React from 'react';
import { Link } from 'react-router-dom';
import { config } from "@/config";
import { useGetCollectionData } from "@/hooks/useGetCollectionData";
import { useMemo } from "react";
import FilmCard from './FilmCard';
import submarine from "@/assets/movies/submarine.mp4"
import pearl from "@/assets/movies/pearl.mp4"
import thething from "@/assets/movies/thething.mp4"

interface Movie {
  id: string;
  title: string;
  thumbnail: string;
  previewVideoUrl: string;
  duration: string;
}

interface Category {
  name: string;
  id: string;
  films: Movie[]; // Define a more specific type for films
}

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCategory, onSelectCategory }) => {
  const { data } = useGetCollectionData();

  const title = useMemo(() => {
    return data?.collection.collection_name ?? config.defaultCollection?.name ?? "NFT Collection Launchpad";
  }, [data?.collection]);

  const categories: Category[] = [
    { name: 'Continue Watching', id: 'continue', films: [
      { id: '1', title: 'Example Film 1', thumbnail: '/path/to/thumbnail1.jpg', previewVideoUrl: submarine, duration: '2:15' }
    ]},
    { name: 'Recent Movies', id: 'recent', films: [
      { id: '2', title: 'Example Film 2', thumbnail: '/path/to/thumbnail2.jpg', previewVideoUrl: pearl, duration: '1:45' }
    ]},
    { name: 'Suspense Movies', id: 'suspense', films: [
      { id: '3', title: 'The Thing', thumbnail: '', previewVideoUrl: thething, duration: '2:10' }
    ]},
  ];

  const handleCategoryClick = (id: string) => {
    onSelectCategory(id); // Optionally, you could remove or change how selection is handled
  };

  return (
    <aside className="bg-gray-50 text-grey-950 w-1/4 h-screen overflow-y-auto">
      <div className="flex items-center justify-between px-4 py-2 max-w-screen-xl mx-auto w-full flex-wrap font-work bg-gradient-to-bl from-blue-500 to-blue-300 bg-clip-text text-transparent">
        <h1 className="display">
          <Link to="/">{title}</Link>
        </h1>
      </div>

      <ul className="space-y-1 p-5">
        {categories.map(category => (
          <li key={category.id}>
            <div className={`p-2 hover:bg-gray-100 cursor-pointer ${selectedCategory === category.id ? 'bg-gray-50' : ''}`}
                 onClick={() => handleCategoryClick(category.id)}>
              {category.name}
            </div>
            <div className="pl-4">
              {category.films.map(film => (
                <FilmCard key={film.id} title={film.title} thumbnail={film.thumbnail} previewVideoUrl={film.previewVideoUrl} duration={film.duration} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
