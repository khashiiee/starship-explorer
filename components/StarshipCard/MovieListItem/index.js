import Skeleton from "react-loading-skeleton";
import useSWR from "swr";

function MovieListItem({ movieId }) {
  const { data, error } = useSWR("https://swapi.dev/api/films/" + movieId);

  if (!data)
    return (
      <Skeleton width={100} baseColor="#a5b4fc" highlightColor="#c084fc" />
    );

  return <li>{data?.title}</li>;
}

export default MovieListItem;
