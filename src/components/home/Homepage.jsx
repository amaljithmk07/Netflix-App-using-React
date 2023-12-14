import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

function Homepage() {
  const [letter, setLetter] = useState("");
  const [film, setFilm] = useState({
    results: [{}],
  });
  const [err, setErr] = useState("");
  const letters = (event) => {
    // console.log(event.target.value);
    setLetter(event.target.value);
  };
  // const search = (event) => {
  //   if (event.key === "Enter") {
  //     const url = `http://www.omdbapi.com/?apikey=4410d2ec&t=${letter}`;
  //     axios
  //       .get(url)

  //       .then((res) => {
  //         console.log(res.data);
  //         setFilm(res.data);
  //       });
  //   }
  // };

  // const submit = (event) => {
  //   event.preventDefault();

  //   const url = `http://www.omdbapi.com/?apikey=4410d2ec&t=${letter}`;
  //   axios
  //     .get(url)

  //     .then((res) => {
  //       console.log(res);
  //       setFilm(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("error");
  //       setErr("error");
  //     });
  // };
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2VhZDc5NWNkMTc3NzNkZTQ0ZmU1YjcyNjIyMzU4ZCIsInN1YiI6IjY1NGY1YjQ0NDFhNTYxMzM2ZDg3ZmUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKSZYyHMUHIErhQqCUgpPuaAgMB-x1EgtflRvIE9IkQ",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setFilm(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="nav-1">
          <div className="sub-1">
            <div className="logo ">
              <img
                src="net.png"
                alt=""
                style={{
                  height: "30px",
                  // padding: "10px 50px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="nav-2">
          <div className="sub-2">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="#">Series </a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">Originals</a>
              </li>
              <li>
                <a href="#">Recently Added</a>
              </li>
              <li>
                <a href="#">My List</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-3">
          <div className="sub-3">
            <input
              type="text"
              className="searchBar"
              placeholder="Search Movies & Shows ..."
              // onChange={letters}
              // onKeyDown={search}
              // onClick={submit}
            />
            <button className="btn">
              <img src="search.png" alt="" className="img" />
            </button>
            <img src="bell.png" alt="" className="img" />
            <img
              src="profile.png"
              alt=""
              className="img"
              style={{ height: "22px" }}
            />
          </div>
        </div>
      </div>

      <div className="body">
        <div className="content">
          {film.results.map((item) => (
            <div className="card">
              {/* <img src={item.backdrop_path} alt="no images" /> */}
              <img src={`https://api.themoviedb.org/3/discover/movie${item.poster_path}`} />
              <div className="carddetail">
                <h3>{item.title}</h3>
                <h4>{item.vote_average}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
