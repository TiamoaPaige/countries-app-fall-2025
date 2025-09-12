// pages/Home.jsx
import { useParams } from "react-router";
import "../App.css";
import CountryCard from "../components/CountryCard";
//imports for App.css and CountryCard for components

function Home({ countriesData }) {
  // function Home with a prop of countriesData

  return (
    <>
      <div className="country-grid">
        {/* Home page Welcome Message  */}
        <h1>Welcome to the Home Page</h1>

        {/* using map to show countriesData */}
        {countriesData.map((item, index) => (
          <CountryCard key={index} country={item} />
        ))}
      </div>
      <section
        key={countriesData}
        onClick={() => navigate(`/countrydetail/${cca2.toLowerCase()}`, {})}
      ></section>
      ;
    </>
  );
}
export default Home;
