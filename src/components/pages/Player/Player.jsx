import React, { useEffect, useState } from "react";
import "./player.css";
import { assets } from "../../../assets/assets";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apidata, setapidata] = useState([
    {
      name: "",
      key: "",
      published_at: "",
      type: "",
    },
  ]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWU0NmFmOGMwNzVlZDhjNDM1NmQyNTQ5MGY1OWQ4OSIsIm5iZiI6MTcyOTgyNjA0NS4yNzI2NzUsInN1YiI6IjY3MWE3ZmNiOWZmNjgxZDllMGEzZGIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mjm6UOsoYDqtxr8MmoFf5uPF3tWNTJuHi4wgAymGmgg",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapidata(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={assets.back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="70%"
        height="70%"
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
        <p></p>
      </div>
    </div>
  );
}

export default Player;
