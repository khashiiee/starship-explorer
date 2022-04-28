import { useRouter } from "next/router";
import useSWR from "swr";

function MoviePage(props) {
  const { query } = useRouter();

  const { data, error } = useSWR(
    "https://swapi.dev/api/films/" + query.movieId
  );

  if (!data) return null;

  return (
    <div>
      <h1 className="text-2xl	my-8">{data.title}</h1>
      <div>Episode ID: {data.episode_id}</div>
      <div>Opening Crawl: {data.opening_crawl}</div>
      <div>Director: {data.director}</div>
      <div>Producer: {data.producer}</div>
      <div>
        Release Date: {data.release_date.split("-").reverse().join("/")}
      </div>
    </div>
  );
}

export default MoviePage;
