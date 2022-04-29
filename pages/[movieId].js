import { useRouter } from "next/router";
import useSWR from "swr";

function MoviePage(props) {
  const { query } = useRouter();

  const { data, error } = useSWR(
    "https://swapi.dev/api/films/" + query.movieId
  );

  if (!data) return null;

  return (
    <div className="max-w-lg mx-auto bg-white border shadow text-center p-4">
      <h1 className="text-2xl	mb-8">
        #{data.episode_id}: {data.title}
      </h1>
      <div className="mb-6">{data.opening_crawl}</div>
      <div>
        <em>Director:</em> {data.director}
      </div>
      <div>
        <em>Producer:</em> {data.producer}
      </div>
      <div>
        <em>Release Date:</em>{" "}
        {data.release_date.split("-").reverse().join("/")}
      </div>
    </div>
  );
}

export default MoviePage;
