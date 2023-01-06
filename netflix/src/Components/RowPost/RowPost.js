import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../Axios";
import { imageUrl } from "../Constants/Constance";
// import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setmovies] = useState([]);
  // const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setmovies(response.data.results);
    });
  }, []);

  
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          obj.backdrop_path !=null ?
          <div>
            <img
              // onClick={() => handleMovie(obj.id)}
              className={props.isSmall ? "smallposter" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt=""
              />
            <h3>{obj.title ? obj.title : obj.name}</h3>
          </div> : null
        ))}
      </div>
      {/* {urlId && <YouTube opts={opts} videoId={urlId.key} />} */}
    </div>
  );
}

export default RowPost;

// const opts = {
//   height: "390",
//   width: "100%",
//   playerVars: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay: 0,
//   },
// };

// const handleMovie = (id) => {
//   console.log(id);
//   axios
//     .get(`/movie/${id}?api_key=${APIkey}&language=en-US`)
//     .then((response) => {
//       console.log(response.data);
//       if (response.data.results.length !== 0) {
//         setUrlId(response.data.results[0]);
//       } else {
//         console.log("Array empty");
//       }
//     });
// };