// import { Link } from "react-router-dom";
function CountryCard({ country }) {
  console.log(country);
  return (
    // <Link to={`/country/${country.name}`}>
    <div className="countryCard">
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="flagImage"
      />
      <h4>{country.name.common}</h4>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
    </div>
    // </Link>
  );
}
export default CountryCard;
