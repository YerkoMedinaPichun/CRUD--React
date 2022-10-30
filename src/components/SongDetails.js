import React from "react";
import { SongArtist } from "./SongArtist";
import { SongLyric } from "./SongLyric";

export const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>
      <h2>Detalles</h2>
      <SongArtist />
      <SongLyric />
    </div>
  );
};
