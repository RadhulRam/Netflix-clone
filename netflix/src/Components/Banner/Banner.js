import React, { useEffect, useState } from "react";
import { APIkey, imageUrl } from "../Constants/Constance";
import "./Banner.css";
import axios from "../Axios";

function Banner() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${APIkey}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`,
        
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie.title ? movie.title : movie.name}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
          <h1 className="description">{movie.overview}</h1>
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
