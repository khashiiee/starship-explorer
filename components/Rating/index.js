import ReactStars from "react-stars";
import { useState,useEffect } from "react";

function Rating({ name }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const localStorageValue = window.localStorage.getItem(name);
    if (localStorageValue) {
      setValue(localStorageValue);
    }
  }, []);

  const onRatingChange = (newRating) => {
    setValue(newRating);
    window.localStorage.setItem(name, newRating);
    console.log(newRating);
  };

  return (
    <ReactStars
      count={5}
      size={24}
      color2={"#ffd700"}
      onChange={onRatingChange}
      value={value}
    />
  );
}

export default Rating;
