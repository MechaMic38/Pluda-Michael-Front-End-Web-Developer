import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((response) => response.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <About data={resumeData.about} />
      <Portfolio data={resumeData.portfolio} />
      <Skills data={resumeData.resume} />
      <Footer />
    </div>
  );
}

export default App;
