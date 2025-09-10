import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CountryDetail from "./pages/CountryDetail.jsx";
import SavedCountries from "./pages/SavedCountries.jsx";
import localData from "../localData.js";
import "./App.css";
function App() {
  console.log(localData, "LOCAL DATA");
  return (
    <div>
      <nav>
        <header className="header">
          <Link to="/">Where in the world?</Link>

          <Link to="/SavedCountries">Saved Countries</Link>
        </header>
      </nav>

      <Routes>
        <Route path="/" element={<Home countriesData={localData} />} />
        <Route path="/SavedCountries" element={<SavedCountries />} />
        <Route path="/CountryDetail" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
