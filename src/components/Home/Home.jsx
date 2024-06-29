import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurProductDetails from "../OurProductDetails/OurProductDetails";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
import Banner from "../Banner/Banner";
import OurMisson from "../OurMission/OurMission";
import OurVison from "../OurVision/OurVision";
import AboutLument from "../AboutLumen/AboutLument";

const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div>
      <Banner />
      <AboutLument/>
      <OurProductDetails />
      <OurMisson/>
      <OurVison/>
      <AnimatedBanner />
    </div>
  );
}

export default Home;
