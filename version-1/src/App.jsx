import { Routes, Route, Link, data } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CountryDetail from "./pages/CountryDetail.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";
import localData from "../localData.js";
import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
const url =
  "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca2,borders";
function App() {
  <SearchBar />;
  const [countries, setCountries] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setCountries(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const filterCountries = countries.filter((country) =>
  //   countries.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  console.log(countries, "countries");

  return (
    <>
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
          <Route
            path="/country-detail/:countryName"
            element={
              <CountryDetail
                countries={countries}
                fetchCountries={fetchCountries}
              />
            }
          />{" "}
        </Routes>
      </div>
    </>
  );
}

export default App;
