import React from 'react';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-lg transition-all duration-300 ease-in-out">
      <video
        src={movie.videoUrl}
        loop
        autoPlay
        muted
      />
    </div>
  );
};

interface MovieGalleryProps {
  movies: Movie[];
}

const MovieGallery: React.FC<MovieGalleryProps> = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center px-40 w-full align-middle">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGallery;
