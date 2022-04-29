import ReactStars from "react-stars";
import { useState, useEffect } from "react";

function Rating({ name }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const localStorageValue = window.localStorage.getItem(name);
    if (localStorageValue) {
      setValue(Number(localStorageValue));
    }
  }, [name]);

  const onRatingChange = (newRating) => {
    setValue(newRating);
    window.localStorage.setItem(name, newRating);
  };

  return (
    <ReactStars
      count={5}
      size={24}
      color2={"#ef4444"}
      onChange={onRatingChange}
      value={value}
    />
  );
}

export default Rating;
