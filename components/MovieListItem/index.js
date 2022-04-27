import useSWR from "swr";

function MovieListItem({ movieId }) {
  const { data, error } = useSWR("https://swapi.dev/api/films/" + movieId);

  return (
      <li>{data?.title}</li>
  );
}

export default MovieListItem;
