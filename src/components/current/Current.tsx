import React, { useState, useEffect } from "react";

const CurrentConditionsCard = () => {
  const [city, setCity] = useState<string>("");
  const [key, setKey] = useState<string>("");

  const handleChange = (e: any) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  useEffect(() => {
    const getLocationURL = `https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/search?apikey=k84As5CjO9g6RYbbFflBgIM7TM0ZHTDp&q=${city}&language=en-us`;

    if (city) {
      fetch(getLocationURL)
        .then((res) => res.json())
        .then((response) => {
          setCity(response[0].EnglishName);
          setKey(response[0].Key);
          return;
        })
        .catch((err) => console.error(err));
    }
  }, [city]);

  return (
    <aside>
      <input onChange={handleChange} type="text"></input>
      {(city && (
        <>
          <h2>{city}</h2>
          <h3>{key}</h3>
        </>
      )) || <p>Please enter a valid city.</p>}
    </aside>
  );
};

export default CurrentConditionsCard;
