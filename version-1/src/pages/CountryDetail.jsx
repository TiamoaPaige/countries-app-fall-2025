//imports below
import React from "react";
import { useParams } from "react-router";
import CountryCard from "../components/CountryCard";
// funtion CountryDetail prop of country
function CountryDetail({ country }) {
  return (
    <>
      {/* useParams declaration */}
      const countryName = useParams().countryName;
      <div>
        {/* Country Detail */}
        <h1>Country Detail</h1>
        {/* Your country detail content here */}
        <div className="countryCard">
          {/* Rendering CountryCard Jsx */}
          <img
            src={country.flag}
            alt={`Flag of ${country.name} `}
            className="flagImage"
          />
          <h4>{country.name.commons}</h4>
          <p>Population:{country.population}</p>
          <p>Capitol:{country.capital}</p>
          <p>Region:{country.region}</p>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
