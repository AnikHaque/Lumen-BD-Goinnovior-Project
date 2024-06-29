import React, { useEffect } from "react";
import styles from "./styles.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
import OurMisson from "../OurMission/OurMission";
import OurVison from "../OurVision/OurVision";

const AboutUs = () => {
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
      <div
        className={styles.hero}
        style={{
          backgroundImage: 
            "url('https://images.pexels.com/photos/4492080/pexels-photo-4492080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'), linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.textCenter}>
          <h1
            style={{ color: "white", fontFamily: "Roboto,sans-serif" }}
            className={`${styles.text5xl} ${styles.fontBold}`}
          >
            <span className={styles.fadeIn}>Get to know</span>
            <br />
            <span className={`${styles.slideUp} ${styles.delayedAppear}`}>
              About us
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-5" style={{ marginTop: "50px"}}>
        <div data-aos="fade-up-right" className={styles.container}>
          <div className={styles.item}>
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/6634226/pexels-photo-6634226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Textile Fabric"
            />
          </div>

          <div className={styles.itemText}>
            <div className={styles.headline}>Who “Lumen Corporation” are?</div>
            <div className={styles.description}>
              Lumen Corporation is the unique international one stop service
              center for textile raw material, footwear raw material sourcing
              and textile & footwear machineries. Lumen Corporation is chastely
              a service company offering all types of required raw materials and
              machineries at competitive price, within required stipulated lead
              time and guaranteed quality assurance, sustainable innovative
              products and providing a complete solution for supply chain
              management in textile industry and footwear industry.
            </div>
          </div>
        </div>

        <div data-aos="fade-up-right" className={styles.container}>
          <div className={styles.itemText}>
            <div className={styles.headline}>What “Lumen Corporation” do?</div>
            <div className={styles.description}>
              We are profoundly working to enhance your company growth and to
              grow mutually faster. Lumen Corporation believes in continuous
              sustainable win-win partnership business and works as your
              international sourcing and supply chain management partner or
              team. We ensure effective and efficient raw material, machineries
              sourcing for your company and smooth out your business process and
              maximize your profitability
            </div>
          </div>
          <div className={styles.item}>
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/8246743/pexels-photo-8246743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Textile Fabric"
            />
          </div>
        </div>

        <div data-aos="fade-up-right" className={styles.container}>
          <div className={styles.item}>
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Textile Fabric"
            />
          </div>

          <div className={styles.itemText}>
            <div className={styles.headline}>Why “Lumen Corporation”?</div>
            <div className={styles.description}>
              We are enthusiastic to a partnership business further than trading
              or agent-ship actions. We are working for your company’s
              sustainable continuous development and ensuring your
              cost-effectiveness and maximizing profitability by introducing
              technologically sophisticated sustainable machines technology and
              synchronized sustainable raw materials to meet the demand of
              universe to make it a better place to live on.
            </div>
          </div>
        </div>
        <OurMisson />
        <OurVison />
      </div>
      <AnimatedBanner />
    </div>
  );
};

export default AboutUs;
