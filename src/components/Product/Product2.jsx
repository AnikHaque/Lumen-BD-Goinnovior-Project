import React from "react";

function DynamicTable({ title, tableData, tableImage }) {
  const goBack = () => {
    window.history.back();
  };

  return (
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
      <div
        className="flex flex-col lg:flex-row justify-center items-center"
        style={{ marginTop: "20px", marginBottom: "40px", padding: "20px" }}
      >
        <div className="flex flex-1 justify-center mr-5">
          <table className="w-full table-auto border-collapse">
            <tbody>
              <tr>
                <th
                  colSpan={tableData[0].length}
                  className="border text-white text-xl border-gray-400 bg-green-500/100 px-4 py-2"
                >
                  <h2>{title}</h2>
                </th>
              </tr>
              <tr>
                {tableData[0].map((headerValue, index) => (
                  <th key={index} className="border border-gray-400 px-4 py-2">
                    {headerValue}
                  </th>
                ))}
              </tr>
              {tableData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {rowIndex === 0 ? (
                    <td
                      className="border border-gray-400 px-4 py-2"
                      // Adjust rowSpan based on data
                    >
                      {row[0]}
                    </td>
                  ) : (
                    <td className="border border-gray-400 px-4 py-2">
                      {row[0]}
                    </td>
                  )}
                  {row.slice(1).map((cellValue, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className="border border-gray-400 px-4 py-2"
                    >
                      {cellValue}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
        {tableImage.map((image, index) => (
          <div key={index}>
            <div>
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "300px", height: "250px", marginBottom:"10px"}}
              />
            </div>
          </div>
        ))}
        </div>
        {/* <div>
          {tableImage && (
            <img src={tableImage} style={{ width: "300px", height: "250px" }} />
          )}
        </div> */}
      </div>
      {/* <div className="flex flex-col lg:flex-row justify-center"
      style={{marginTop:'20px',marginBottom:'40px'}}
      >
        <div>
          <table className="w-full flex justify-center table-auto border-collapse ml-5 mt-5">
            <tbody>
              <tr>
                <th
                  colSpan={tableData[0].length}
                  className="border text-white text-xl border-gray-400 bg-green-500/100 px-4 py-2"
                >
                  <h2>{title}</h2>
                </th>
              </tr>
              <tr>
                {tableData[0].map((headerValue, index) => (
                  <th key={index} className="border border-gray-400 px-4 py-2">
                    {headerValue}
                  </th>
                ))}
              </tr>
              {tableData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {rowIndex === 0 ? (
                    <td
                      className="border border-gray-400 px-4 py-2"
                      // Adjust rowSpan based on data
                    >
                      {row[0]}
                    </td>
                  ) : (
                    <td className="border border-gray-400 px-4 py-2">
                      {row[0]}
                    </td>
                  )}
                  {row.slice(1).map((cellValue, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className="border border-gray-400 px-4 py-2"
                    >
                      {cellValue}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex w-1/2 h-[300px] justify-center pt-10">
          {tableImage && <img src={tableImage} />}
        </div>
      </div> */}
    </div>
  );
}

export default DynamicTable;
