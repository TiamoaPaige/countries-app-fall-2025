import React from "react";
import { useParams } from "react-router";
import CountryCard from "../components/CountryCard";
function CountryDetail({ country }) {
  return (
    <>
      const countryName = useParams().countryName;
      <div>
        <h1>Country Detail</h1>
        {/* Your country detail content here */}
        <div className="countryCard">
          const countryName = useParams().countryName;
          <img
            src={country.flag}
            alt={`Flag of ${country.name} `}
            className="flagImage"
          />
          <h4>{country.name}</h4>
          <p>Population:{country.population}</p>
          <p>Capitol:{country.capital}</p>
          <p>Region:{country.region}</p>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
