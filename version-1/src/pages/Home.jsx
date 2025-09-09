// pages/Home.jsx

import CountryCard from "../components/CountryCard";
export default function Home({ countriesData }) {
  console.log(countriesData, "country data");
  return (
    <>
      <div className="country-grid">
        <h1>Welcome to the Home Page</h1>

        {countriesData.map((item, index) => (
          <CountryCard key={index} country={item} />
        ))}
      </div>
    </>
  );
}
