import React from 'react';

interface FilmCardProps {
  title: string;
  previewVideoUrl: string; // URL to the mp4 video preview
  duration: string; // e.g., '14:00 min'
}

const FilmCard = ({ title, previewVideoUrl, duration }) => {
    return (
      <div className="relative w-64 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
        <video
          src={previewVideoUrl}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent p-4">
          <h3 className="text-white text-lg">{title}</h3>
          <p className="text-gray-300 text-sm">{duration}</p>
        </div>
      </div>
    );
  };
  
  export default FilmCard;
  