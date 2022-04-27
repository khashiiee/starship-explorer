import { useMemo } from "react";
import useSWR from "swr";
import StarshipCard from "../components/StarshipCard";

export default function Home() {
  const { data, error } = useSWR("https://swapi.dev/api/starships");

  const dataWithMovieIds = useMemo(() => {
    if (!data) return null;

    return data.results.map((result) => {
      const filmUrls = result.films;
      const filmIds = filmUrls.map((url) => url.split("/").reverse()[1]);

      result.filmIds = filmIds;
      return result;
    });
  }, [data]);

  return (
    <div className="grid gap-4 grid-cols-5">
      {dataWithMovieIds?.map((item, idx) => (
        <StarshipCard key={idx} starship={item}/>
      ))}
    </div>
  );
}
