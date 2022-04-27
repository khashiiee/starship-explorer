import { useRouter } from "next/router";

function MoviePage(props) {
  const { query } = useRouter();

  return (
    <div>
      <h1>Movie: {query.movieId}</h1>
    </div>
  );
}

export default MoviePage;
