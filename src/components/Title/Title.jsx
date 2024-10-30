import React, { useEffect, useRef, useState } from "react";
import "./Title.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

function Title({ title, category }) {
  const scrollref = useRef();
  const [apidata, setapidata] = useState([]);
  const handelWheel = (event) => {
    event.preventDefault();
    scrollref.current.scrollLeft += event.deltaY;
  };
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
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapidata(res.results))
      .catch((err) => console.error(err));
    scrollref.current.addEventListener("wheel", handelWheel);
  }, []);
  return (
    <div className="title-cards">
      <h1>{title ? category : "Now Playing"}</h1>
      <div className="card-list" ref={scrollref}>
        {apidata.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Title;
