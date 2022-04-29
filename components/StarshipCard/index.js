import Card from "../Card";
import MovieListItem from "./MovieListItem";
import Rating from "../Rating";
import StarShipModal from "../StarshipModal";
import { useState } from "react";

function StarshipCard({ starship }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Card onClick={() => setIsOpen(true)}>
      <div className="p-4">
        <h3 className="font-semibold">{starship.name}</h3>

        <div className="text-sm">
          <div>Cost: {starship.cost_in_credits}</div>
          <div className="py-2">
            Featured Films :
            {starship.filmIds.map((movieId, idx) => (
              <MovieListItem key={idx} movieId={movieId} />
            ))}
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Rating name={starship.name} />
        </div>
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
