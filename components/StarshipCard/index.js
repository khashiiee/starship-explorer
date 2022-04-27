import Card from '../Card';
import MovieListItem from './MovieListItem';
import Rating from '../Rating';

function StarshipCard({ starship }) {
  return (
    <Card>
      <label> Name : {starship.name}</label>
      <br />
      <label> Cost : {starship.cost_in_credits}</label>
      <br />
      <label>
        {" "}
        Featured Films :
        {starship.filmIds.map((movieId, idx) => (
          <MovieListItem key={idx} movieId={movieId} />
        ))}
      </label>
      <Rating name={starship.name} />
    </Card>
  );
}

export default StarshipCard;
