import React from "react";
import "./homePage.css";
import AboutPage from "../AboutPage/AboutPage";
import ServicePage from "../ServicePage/ServicePage";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import Footer from "../Footer/Footer";
function HomePage() {
  return (
    <React.Fragment>
      <div className="homePage">
        <Link
          activeClass="active"
          to="service"
          spy="true"
          smooth={true}
          offset={-60}
          duration={800}
        >
          <span className="font">
            <FaArrowAltCircleDown />
          </span>
        </Link>
      </div>
      <ServicePage />
      <AboutPage />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
