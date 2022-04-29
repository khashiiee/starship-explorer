import Card from "../Card";
import MovieListItem from "./MovieListItem";
import Rating from "../Rating";
import StarShipModal from "../StarshipModal";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

function StarshipCard({ starship }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Card onClick={() => setIsOpen(true)}>
      <div className="p-4">
        <h3 className="font-semibold">
          {starship?.name || <Skeleton width={100} />}
        </h3>

        <div className="text-sm">
          <div>
            Cost: {starship?.cost_in_credits || <Skeleton width={50} />}
          </div>
          <div className="py-2">
            <div>Featured Films:</div>
            <ul>
              {starship?.filmIds.map((movieId, idx) => (
                <MovieListItem key={idx} movieId={movieId} />
              ))}
            </ul>
            {!starship &&
              [...Array(2)].map((_, key) => <Skeleton key={key} width={100} />)}
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {starship ? (
            <Rating name={starship.name} />
          ) : (
            <Skeleton width={100} />
          )}
        </div>
      </div>
      {starship && (
        <StarShipModal
          starship={starship}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </Card>
  );
}

export default StarshipCard;
