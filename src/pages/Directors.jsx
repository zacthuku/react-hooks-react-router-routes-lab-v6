import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => {
        setDirectors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch directors:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
       
      </header>
      <main>
        <h1>Directors Page</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          directors.map((director) => (
            <article key={director.name}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, i) => (
                  <li key={i}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default Directors;

