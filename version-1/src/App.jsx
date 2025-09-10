import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CountryDetail from "./pages/CountryDetail.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";
import localData from "../localData.js";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesAsyncAwait = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
        );
        const data = await response.json();
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    };
    getCountriesAsyncAwait();
  }, []);

  // console.log(localData, "LOCAL DATA");

  return (
    <div>
      <header className="header">
        <nav>
          <Link to="/">Where in the world?</Link>

          <Link to="/SavedCountries">Saved Countries</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home countriesData={localData} />} />
        <Route path="/SavedCountries" element={<SavedCountries />} />
        <Route path="/CountryDetail/:countyName" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
