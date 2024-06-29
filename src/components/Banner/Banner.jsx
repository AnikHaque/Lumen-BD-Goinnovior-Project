import React from "react";
import styles from "./Banner.module.css";
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";

const Banner = () => {
  // const navItems = [
  //   { title: "About us", path: "/about" },
  // ];

  return (
    <div className={styles.banner}>
      <div className={styles["banner-text"]}>
        <h1 className={`${styles.fadeIn} mb-4`}>Lumen Corporation</h1>
        <p className={`${styles.slideUp} mb-4`}>
          We ensure better services for a better world.
        </p>
        {/* {navItems.map((item) => (
          <Button
            key={item.title}
            component={Link}
            to={item.path}
            style={{
              backgroundColor: "rgba(0, 168, 80, 0.5)",
              color: "white",
              marginBottom: "10px",
            }}
            className={styles.slideUp}
          >
            {item.title}
          </Button>
        ))} */}
      </div>
    </div>
  );
};

export default Banner;
