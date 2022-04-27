import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-5">
      {Array.apply(null, Array(10)).map(() => (
        <Card>
          <h1>Card Title</h1>
          <Button onClick={() => alert("Clicked!")}>Click me</Button>
        </Card>
      ))}
    </div>
  );
}
