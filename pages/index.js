import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Card>
        <h1>Card Title</h1>
        <Button onClick={() => alert("Clicked!")}>Click me </Button>
      </Card>
    </div>
  )
}
