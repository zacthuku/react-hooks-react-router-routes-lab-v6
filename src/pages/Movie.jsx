import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Adjust the URL to fetch data
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch movie:", err);
        setLoading(false);
      });
  }, [id]);

  // Rendering logic with conditional checks
  return (
    <>
      <header>
       
      </header>
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : movie ? (
          <>
            {/* Ensure movie title is rendered */}
            <h1>{movie.title}</h1>
            {/* Ensure movie time is rendered */}
            <p>{movie.time} minutes</p>
            {/* Ensure genres are rendered correctly */}
            {movie.genres && movie.genres.length > 0 && movie.genres.map((genre, index) => (
              <span key={index} style={{ marginRight: "8px" }}>
                {genre}
              </span>
            ))}
          </>
        ) : (
          <div>
            <h1>Oops! Something went wrong.</h1>
            <p>Sorry, the movie could not be found.</p>
          </div>
        )}
      </main>
    </>
  );
}

export default Movie;

