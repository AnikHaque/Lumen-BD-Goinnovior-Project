import React from "react";
import "./index.css";

const goBack = () => {
  window.history.back();
};
const Gallery = ({ images, title, additionalData }) => (
  <div>
    <button
      onClick={goBack}
      className="bg-green-500/100 text-white font-semibold py-2 px-4 border border-green-500/100 rounded shadow flex items-center"
      style={{ marginLeft: "20px", marginTop: "40px" }}
    >
      <svg
        className="h-4 w-4 fill-current mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5-5 5-5v10zm5-5H5v-2h10v2z" />
      </svg>
      Back
    </button>
    {additionalData ? (
      <div>
        <div className="flex flex-col-reverse sm:flex-row p-5 mx-8 mb-20">
          <div className="w-[200px] flex-shrink-0 mr-10 mt-10">
            <h1 className="text-xl md:text-xl font-bold mb-2"> {title[1]}</h1>
            <ol className="list-decimal list-inside marker:text-green-500">
              {additionalData.map((item, index) => (
                <li key={index} className="mb-2 flex">
                  <span className="mr-2">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
              {title[0]}
            </h1>
            <div className="flex flex-wrap">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex justify-center"
                >
                  <div className="w-full h-64 hover:scale-110 transition-transform">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="p-8 mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
          {title[0]}
        </h1>
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex justify-center"
            >
              <div className="w-full h-64 hover:scale-110 transition-transform">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
    {/* <div className="p-8 mb-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        {title[0]}
      </h1>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex justify-center"
          >
            <div className="w-full h-64 hover:scale-110 transition-transform">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div> */}
    {/* {additionalData && (
      <div className="bg-green-100 p-5 mx-8 mb-20">
        <h1 className="text-xl md:text-2xl font-bold mb-2"> {title[1]}</h1>
        <ol className="list-decimal list-inside marker:text-green-500">
          {additionalData.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ol>
      </div>
    )} */}
  </div>
);

export default Gallery;
