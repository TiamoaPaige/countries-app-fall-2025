// import { Link } from "react-router-dom";
function CountryCard({ country }) {
  console.log(country);
  return (
    <>
      {data.map((item)=>
      
      <Link to={`/country/${country.name.common}`} key={item.cca3}>
        <div className="CountryCard">...</div>
      </Link>
      )
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className="flagImage"
      />
      <h4>{country.name.common}</h4>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
    </>
  );
}
export default CountryCard;
