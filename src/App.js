import React, { useState, useEffect } from "react";
import "./App.css";
import "bootswatch/dist/flatly/bootstrap.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Language from "./components/Language";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Loader from "././Loader";
import ToggleDarkMode from "./components/ToggleDarkMode";
import { checkDataAgeToCleanLocaleStorage } from "./cleanStorage/CleanStorage";

function App() {
  const checkStorageDate = () => {
    if (localStorage.getItem("storageDate")) {
      const date = localStorage.getItem("storageDate");
      checkDataAgeToCleanLocaleStorage(date);
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkStorageDate();
    if (localStorage.getItem("alreadyLoaded")) {
      setLoading(false);
    }
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("alreadyLoaded", "true");
      if (!localStorage.getItem("storageDate")) {
        localStorage.setItem("storageDate", Date.now());
      }
    }, 3000);
    return () => clearTimeout();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div className="m-5" style={{ position: "relative" }}>
            <ToggleDarkMode />
          </div>

          <div className="components container">
            <Profile />

            <hr />

            <Contact />

            <hr />

            <Language />

            <hr />

            <Education />

            <Experience />

            <hr />

            <Project />

            <hr />

            <Skill />
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
