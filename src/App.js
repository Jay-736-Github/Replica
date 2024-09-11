import React, { useState } from "react";
import "./App.css";
import AboutMe from "./components/Aboutme";
import Gallery from "./components/gallery";

function App() {
  const [activeTab, setActiveTab] = useState("AboutMe");

  const renderContent = () => {
    switch (activeTab) {
      case "Experiences":
      case "Recommended":
      case "AboutMe":
        return (
          <div>
            <h1>Hello! I’m Dave, your sales rep here from Salesforce.</h1>
            <p>
              I’ve been working at this awesome company for 3 years now. I was
              born and raised in Albany, NY & have been living in Santa Carla
              for the past 10 years with my wife Tiffany and my 4-year-old twin
              daughters - Emma and Ella. Both of them are just starting school,
              so my calendar is usually blocked between 9-10 AM.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="background-box">
        <div className="main-container">
          <div className="left-section"></div>
          <div className="right-section">
            <div className="content-container">
              <div className="tab-container">
                <div className="tabs">
                  <button
                    className={`tab ${activeTab === "AboutMe" ? "active" : ""}`}
                    onClick={() => setActiveTab("AboutMe")}
                  >
                    About Me
                  </button>
                  <button
                    className={`tab ${
                      activeTab === "Experiences" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Experiences")}
                  >
                    Experiences
                  </button>
                  <button
                    className={`tab ${
                      activeTab === "Recommended" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Recommended")}
                  >
                    Recommended
                  </button>
                </div>
                <div className="tab-content">{renderContent()}</div>
              </div>
            </div>
            <div className="gallery-container">
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
