//imports below
import React from "react";
import { useParams } from "react-router";
import CountryCard from "../components/CountryCard";
// funtion CountryDetail prop of country
function CountryDetail({ countries, fetchCountries }) {
  return (
    <>
      {/* useParams declaration */}
      {/* const countryName = useParams(CountryDetail).countryName; */}
      <div>
        {/* Country Detail */}
        <h1>Country Detail</h1>
        {/* Your country detail content here */}
        <div className="countryCard">
          {/* Rendering CountryCard Jsx */}
          <img
            src={countries.flag}
            alt={`Flag of ${countries.name.commons} `}
            className="flagImage"
          />
          <h4>{countries.name.common}</h4>
          <p>Population:{countries.population}</p>
          <p>Capitol:{countries.capital}</p>
          <p>Region:{countries.region}</p>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
