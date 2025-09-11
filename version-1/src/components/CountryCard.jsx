import { Link } from "react-router-dom";

function CountryCard({ country }) {
  //import link so my link will work
  //imported CountryCard with prop of country

  return (
    <div>
      {/*  return this data back to user */}
      <Link to={`/country/${country.name.common}`}>
        {/* above link to countrydetails page  */}

        <div className="CountryCard"></div>
      </Link>
      {/* dot notation for countries data */}
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="flagImage"
      />
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
    </div>
  );
}
export default CountryCard;
