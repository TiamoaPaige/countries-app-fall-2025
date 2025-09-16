//import link selector for  my dynamic link
import "../CountryCard.css";
import { Link } from "react-router-dom";
//import for link
function CountryCard({ country }) {
  //dynamic link card click select
  //imported CountryCard with prop of country

  return (
    <Link to={`/country-detail/${country.name.common}`}>
      {/* above link to countrydetails page  */}

      <div>
        {/*  return this data back to user */}

        <div className="CountryCard"></div>

        {/* dot notation for countries data */}
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="flagImage"
        />
        <h2>{country.name.common}</h2>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>
          <strong>Capital:</strong>
          {country.capital}
        </p>
        <p>
          <strong>Region:</strong>
          {country.region}
        </p>
      </div>
    </Link>
  );
}
export default CountryCard;
