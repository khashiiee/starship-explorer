import Link from "next/link";
import { useMemo, useState } from "react";
import useSWR from "swr";
import Button from "../components/Button";
import Card from "../components/Card";
import Rating from "../components/Rating";

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
        <Card key={idx}>
          <label> Name : {item.name}</label>
          <br />
          <label> Cost : {item.cost_in_credits}</label>
          <br />
          <label>
            {" "}
            Featured Films :
            {item.filmIds.map((movieId, idx) => (
              <Link href={`/${movieId}`} key={idx}>
                <Button>{movieId}</Button>
              </Link>
            ))}
          </label>
          <Rating name={item.name} />
        </Card>
      ))}
    </div>
  );
}
