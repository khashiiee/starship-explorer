import Card from "../Card";
import MovieListItem from "./MovieListItem";
import Rating from "../Rating";
import StarShipModal from "../StarshipModal";
import { useState } from "react";

function StarshipCard({ starship }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Card onClick={() => setIsOpen(true)}>
      <label> Name : {starship.name}</label>
      <br />
      <label> Cost : {starship.cost_in_credits}</label>
      <br />
      <label>
        Featured Films :
        {starship.filmIds.map((movieId, idx) => (
          <MovieListItem key={idx} movieId={movieId} />
        ))}
      </label>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Rating name={starship.name} />
      </div>
      <StarShipModal
        starship={starship}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Card>
  );
}

export default StarshipCard;
