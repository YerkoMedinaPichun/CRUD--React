import React, { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.xor.cl/red/metro-network")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {});

    // if (search === null) return;

    // const fetchData = async () => {
    //   const { artist, song } = search;

    //   let ArtistUrl = `http://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    //   let SongUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    //   console.log(ArtistUrl, SongUrl);
    //   setLoading(true);
    //   const [artistRes, songRes] = await Promise.all(
    //     helpHttp().get(ArtistUrl),
    //     helpHttp().get(SongUrl, {
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     })
    //   );
    //   console.log(artistRes, songRes);

    //   setBio(artistRes);
    //   setLyric(songRes);
    //   setLoading(false);
    // };
    // fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};
