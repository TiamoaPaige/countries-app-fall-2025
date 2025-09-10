// pages/Home.jsx
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import "./App.css";
export default function Home({ countriesData }) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries();
  }, []);
  const getCountries = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
    );
    const data = await res.json;
    setCountries(data);
  };
  // console.log(countriesData, "country data");
  return (
    <>
      <div className="country-grid">
        <h1>Welcome to the Home Page</h1>

        {/* {countriesData.map((item, index) => (
          <CountryCard key={index} country={item} />
        ))} */}
      </div>
    </>
  );
}
