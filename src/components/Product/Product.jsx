import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Chips",
    subcategories: ["Polyester Chips", "Nylon Chips", "HDPE Chips"],
  },
  {
    name: "Fiber",
    subcategories: ["Polyester Staple Fiber", "Viscose Staple Fiber","Raw cotton"],
  },
  {
    name: "Yarn",
    subcategories: [
      "Cotton and Blended Yarn",
      "Polyester Filament Yarn",
      "Nylon Filament Yarn",
      "Spandex Yarn",
      "SweaterYarn",
      "Sewing Thread",
    ],
  },
  {
    name: "Fabrics",
    subcategories: ["Knitted fabrics", "Woven fabrics"],
  },
  {
    name: "Machineries",
    subcategories: ["Garments machineries", "Shoes machineries"],
  },
];

const Product = () => {
  // State to manage active tab
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();
  const handleSubcategoryClick = (subcategory) => {
    navigate(`/products/${subcategory}`);
  };

  return (
    <div>
      {/* Hero image section */}
      <div
        className="hero flex justify-center items-center"
        style={{
          backgroundImage: "url('./src/assets/productImage.jpg') ",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "455px",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center text-neutral-content">
          <h1
            data-aos="zoom-in"
            style={{
              color: "white",
              fontFamily: "Roboto, sans-serif",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
            className="text-5xl"
          >
            Our Products
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-10 mt-10 mb-10">
        <h1 className="text-3xl font-bold text-center mb-5 xs:text-3xl 2xs:text-xl 3xs:text-lg">
          Explore Our Products
          <span
            className="block mx-auto h-2 bg-green-500 mt-3 xs:w-1/4 2xs:w-1/3 3xs:w-1/3"
            style={{ height: "4px" }}
          ></span>
        </h1>
        {categories.map((category, index) => (
          <div key={index} className="mb-2 text-center">
            <button
              className={`shadow-md text-lg font-semibold text-gray-700 hover:text-gray-900 m-1
              xs:w-2/4 2xs:w-1/2 3xs:w-full h-12
              ${
                activeCategory === category.name ? "bg-gray-300" : "bg-gray-200"
              }`}
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.name ? "" : category.name
                )
              }
            >
              {category.name}
            </button>
            {activeCategory === category.name && (
              <ul className="mt-2">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    <button
                      className="block w-full py-2 px-4"
                      onClick={() => handleSubcategoryClick(subcategory)}
                    >
                      {subcategory}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
