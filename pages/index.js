import { useMemo, useState } from "react";
import useSWR from "swr";
import StarshipCard from "../components/StarshipCard";
import Button from "../components/Button";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error } = useSWR(
    `https://swapi.dev/api/starships/?page=${pageIndex}`
  );

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
    <>
      <div className="grid gap-4 grid-cols-5">
        {dataWithMovieIds?.map((item, idx) => (
          <StarshipCard key={idx} starship={item} />
        ))}
      </div>
      <Button onClick={() => setPageIndex(pageIndex - 1)}>Previous</Button>
      <Button onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>
    </>
  );
}
