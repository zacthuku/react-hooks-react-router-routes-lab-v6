import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch movies:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        
      </header>
      <main>
        <h1>Home Page</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Home;


