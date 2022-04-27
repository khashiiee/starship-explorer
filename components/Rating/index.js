import ReactStars from "react-stars";
import { useState } from "react";

function Rating() {
  const [value, setValue] = useState(0);

  const ratingChanged = (newRating) => {
    setValue(newRating);
    console.log(newRating);
  };

  return (
    <ReactStars
      count={5}
      size={24}
      color2={"#ffd700"}
      onChange={ratingChanged}
      value={value}
    />
  );
}

export default Rating;
