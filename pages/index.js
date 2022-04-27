import useSWR from "swr";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  const { data, error } = useSWR('https://swapi.dev/api/starships')

  console.log(data,error);

  return (
    <div className="grid gap-4 grid-cols-5">
      {data?.results.map((item, idx) => (
        <Card key={idx}>
          <h1>{item.name}</h1>
          <Button onClick={() => alert("Clicked!")}>Click me</Button>
        </Card>
      ))}
    </div>
  );
}
