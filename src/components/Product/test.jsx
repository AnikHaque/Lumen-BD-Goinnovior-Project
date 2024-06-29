import React, { useState } from "react";
import Product5 from "./Product5";

const categories = [
  {
    name: "Chips",
    subcategories: ["Polyester Chips", "Nylon Chips", "HDPE Chips"],
  },
  {
    name: "Fiber",
    subcategories: ["Polyester Staple Fiber", "Viscose Staple Fiber"],
  },
  {
    name: "Yarn",
    subcategories: [
      "Cotton and Blended Yarn",
      "Polyester Filament Yarn",
      "Nylon Filament Yarn",
      "Spandex Yarn",
      "Sweater Yarn",
      "Sewing Thread"
    ],
  },
  {
    name: "Raw cotton",
    subcategories: ["Sub-category 1", "Sub-category 2", "Sub-category 3"],
  },
  {
    name: "Fabrics",
    subcategories: ["Sub-category 1", "Sub-category 2", "Sub-category 3"],
  },
  {
    name: "Machineries",
    subcategories: ["Sub-category 1", "Sub-category 2", "Sub-category 3"],
  },
];

const Product = () => {
  // State to manage active tab
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [show, setShow] = useState(false)
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShow(true);
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

      <div className="container mx-auto p-10 mt-10 mb-10">
        <h1 className="text-3xl font-semibold text-center mb-5">
          Explore Our Range
          <span
            className="block w-3/4 mx-auto h-2"
            style={{
              height: "4px",
              width: "250px",
              marginTop: "10px",
              backgroundColor: "rgba(3, 185, 91, 0.945)",
            }}
          ></span>
        </h1>

        {categories.map((category, index) => (
          <div key={index} className="mb-2 text-center">
            <button
              style={{ backgroundColor: "#F8F8F8" }}
              className="w-125 h-12 shadow-md text-lg font-semibold text-gray-700 hover:text-gray-900"
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
                    className="text-sm text-gray-600 hover:text-gray-800 list-none"
                  >
                    <button
                      className="inline-block w-full"
                      onClick={() => handleSubcategoryClick(subcategory)}
                    >
                      {subcategory}
                    </button>
                    {selectedSubcategory === subcategory && show && (
                      <Product5 subcategory={subcategory} />
                    )}
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
