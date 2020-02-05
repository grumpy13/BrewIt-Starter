import React, { useState } from "react";

//Style
import "./App.css";

//Data
import allBrewMethods from "./data";
import AboutPage from "./Components/AboutPage";
import NavBar from "./Components/NavBar";

//Components
import BrewingList from "./Components/BrewingList/";

function App() {
  const [brewingMethods] = useState(allBrewMethods);
  const [showHome, setShowHome] = useState(true);

  return (
    <>
      <NavBar setShowHome={setShowHome} />
      <div className="App my-5">
        <div className="container">
          {showHome ? (
            <BrewingList brewingMethods={brewingMethods} />
          ) : (
            <AboutPage />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
