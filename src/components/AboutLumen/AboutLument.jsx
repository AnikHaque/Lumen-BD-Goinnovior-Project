import React from "react";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import image1 from "../../assets/germents_machineries_4.jpeg";
import image2 from "../../assets/rawCotton_2.jpeg";
import image3 from "../../assets/product2.jpg";
import image4 from "../../assets/product8.jpg";

function AboutLument() {
  const navItems = [{ title: "ABOUT US", path: "/about" }];
  const images = [image1, image2, image3, image4];
  return (
    <div>
      <div className="flex flex-col sm:flex-row mx-5 sm:mx-20 mt-20">
        <div className="w-full sm:w-1/2 p-4 bg-green-100">
          <h1 className="text-3xl font-bold mb-4 text-black">
            Lumen Corporation
          </h1>
          <p className="mb-4 text-justify">
            Lumen Corporation is a 100% service providing company. We offer all
            types of 100% raw material for textile industry like PET chips, HDPE
            chips, cotton fiber, viscose fiber (both raw white and dope dyed),
            polyester fiber (both raw white and dope dyed), all types of yarn
            including filament yarn and spun yarn, complete anti-mold solution,
            as well as footwear raw material and footwear making complete
            machineries. We are new ventured company and over the period of time
            have expanded our services to several countries like Bangladesh,
            India, China, and Vietnam with head office in Suzhou, Jiangsu-China
            and associates offices in Bangladesh. Our clients are among the
            leading manufacturers around the world. We have sound knowledgeable
            professionals, specifically trained for providing sourcing, quality
            assurance and after sales services to our clients. Our supplying
            partners are from mostly from China, India, Vietnam, Thailand,
            Pakistan, Taiwan, Korea, Turkey and Indonesia.
          </p>
          {navItems.map((item) => (
            <Button
              key={item.title}
              component={Link}
              to={item.path}
              style={{
                backgroundColor: "rgba(0, 168, 80, 0.9)",
                color: "white",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className="w-full sm:w-1/2 flex flex-wrap sm:ml-5">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Architectural design"
              className="w-1/2 object-cover rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutLument;
