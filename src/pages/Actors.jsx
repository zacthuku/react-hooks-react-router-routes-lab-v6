import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => {
        setActors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch actors:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        
      </header>
      <main>
        <h1>Actors Page</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          actors.map((actor) => (
            <article key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default Actors;

