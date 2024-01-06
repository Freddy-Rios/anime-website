import React from "react";
import AnimeCard from "./AnimeCard";

function AnimeCarousel(anime, title, isVertical) {
  //const allTitles = topAnime.data.map((entry) => entry.titles[0]?.title);

  return (
    <div>
      <h2>{title}</h2>
      {anime.data.map((entry) => (
        <AnimeCard key={entry.mal_id} anime={entry.titles[0]?.title} />
      ))}
    </div>
  );
}

export default AnimeCarousel;
