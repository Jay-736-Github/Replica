import React, { useState } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="about-me">
      <div className="tabs">
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={activeTab === "experiences" ? "active" : ""}
          onClick={() => setActiveTab("experiences")}
        >
          Experiences
        </button>
      </div>
      <div className="content">
        {activeTab === "about" ? (
          <p>About Me content here.</p>
        ) : (
          <p>Experiences content here.</p>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
