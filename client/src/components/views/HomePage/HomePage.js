import React from "react";
import "./homePage.css";
import AboutPage from "../AboutPage/AboutPage";
import ServicePage from "../ServicePage/ServicePage";

function HomePage() {
  return (
    <React.Fragment>
      <div
        className="homePage"
        style={{ marginTop: "0", paddingTop: "0" }}
      ></div>
      <ServicePage />
      <AboutPage />
    </React.Fragment>
  );
}

export default HomePage;
