import { useMemo, useState, useEffect } from "react";
import useSWR from "swr";
import StarshipCard from "../components/StarshipCard";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);

  const [search, setSearch] = useState("");

  const { data, error } = useSWR(
    `https://swapi.dev/api/starships/?search=${search}&page=${pageIndex}`
  );

  //reset to first page when the search query is changing
  useEffect(() => {
    setPageIndex(1);
  }, [search]);

  const dataWithMovieIds = useMemo(() => {
    if (!data) return null;

    return data.results.map((result) => {
      const filmUrls = result.films;
      const filmIds = filmUrls.map((url) => url.split("/").reverse()[1]);

      result.filmIds = filmIds;
      return result;
    });
  }, [data]);

  const pageCount = useMemo(() => {
    if (!data) return 0;

    return Math.ceil(data.count / 10);
  }, [data]);

  return (
    <>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="grid gap-4 grid-cols-5">
        {dataWithMovieIds?.map((item, idx) => (
          <StarshipCard key={idx} starship={item} />
        ))}
      </div>
      <div className="flex justify-center	my-4">
        {[...Array(pageCount)].map((_, pageNumber) => (
          <div key={pageNumber} className="mx-1 bg-white rounded-lg shadow hover:bg-slate-200">
            <Button onClick={() => setPageIndex(pageNumber + 1)}>
              {" "}
              {pageNumber + 1}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
