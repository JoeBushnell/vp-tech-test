import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import CityCard from "./CityCard/CityCard";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: 40px;
  color: white;
`;

function City() {
  let { cityName } = useParams();
  const [city, setCity] = useState(null);
  const endpoint = `https://api.openaq.org/v2/latest?country=GB&city=${cityName}`;

  useEffect(() => {
    async function getCity() {
      const res = await fetch(endpoint);
      const data = await res.json();

      setCity(data);
    }
    getCity();
  }, []);

  return (
    <Fragment>
      {city && (
        <div>
          <Title>Latest air quality data for {cityName}</Title>
          {city?.results.map((city) => (
            <CityCard
              location={city.location}
              measurements={city.measurements}
              city={city.city}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
}

export default City;
