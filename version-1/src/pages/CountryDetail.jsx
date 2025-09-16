//imports below
import React from "react";
import { useParams } from "react-router";
import CountryCard from "../components/CountryCard";
// funtion CountryDetail prop of country
// Find the country that matches the countryName
function CountryDetail({ countries }) {
  const { countryName } = useParams();
  const country = countries.find((c) => c.name.commons === countryName);
  // Check if country exists
  if (!country) {
    return <div>Country not found!</div>;
  }
  return (
    <>
      {/* useParams declaration */}

      <div>
        {/* Country Detail */}
        <h1>Country Detail</h1>
        {/* Your country detail content here */}
        <div className="countryCard">
          {/* Rendering CountryCard Jsx */}
          <CountryCard />
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
