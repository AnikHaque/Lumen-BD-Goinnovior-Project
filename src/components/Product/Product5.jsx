import React, { useState, useEffect } from "react";
import DynamicTable from "./Product2";
import img from "../../assets/product1.jpg";
import img2 from "../../assets/product2.jpg";
import img3 from "../../assets/product3.jpg";
import img4 from "../../assets/product4.jpg";
import img5 from "../../assets/product5.jpg";
import img6 from "../../assets/product6.jpg";
import img7 from "../../assets/product7.jpg";
import img8 from "../../assets/product8.jpg";
import img9 from "../../assets/product9.jpeg";
import img10 from "../../assets/product10.jpg";
import img12 from "../../assets/rawCotton_1.jpeg";
import img13 from "../../assets/rawCotton_2.jpeg";
import img14 from "../../assets/rawCotton_3.jpeg";
import img15 from "../../assets/Knitted_fabrics_1.jpeg";
import img16 from "../../assets/Knitted_fabrics_2.jpeg";
import img17 from "../../assets/Knitted_fabrics_3.jpeg";
import img18 from "../../assets/Knitted_fabrics_4.jpeg";
import img19 from "../../assets/Knitted_fabrics_5.jpeg";
import img20 from "../../assets/Knitted_fabrics_6.jpeg";
import img21 from "../../assets/woven_fabrics_1.jpeg";
import img22 from "../../assets/woven_fabrics_2.jpeg";
import img23 from "../../assets/woven_fabrics_3.jpeg";
import img24 from "../../assets/woven_fabrics_4.jpeg";
import img25 from "../../assets/woven_fabrics_5.jpeg";
import img26 from "../../assets/woven_fabrics_6.jpeg";
import img29 from "../../assets/germents_machineries_2.jpeg";
import img30 from "../../assets/germents_machineries_3.jpeg";
import img31 from "../../assets/germents_machineries_4.jpeg";
import img32 from "../../assets/germents_machineries_5.jpeg";
import img33 from "../../assets/germents_machineries_6.jpeg";
import img34 from "../../assets/germents_machineries_7.jpeg";
import img35 from "../../assets/shoes_machineries_1.jpeg";
import img36 from "../../assets/shoes_machineries_2.jpeg";
import img37 from "../../assets/shoes_machineries_3.jpeg";
import img38 from "../../assets/rawCotton_4.jpeg";
import img39 from "../../assets/Knitted_fabrics_7.jpeg";
import img40 from "../../assets/Knitted_fabrics_8.jpeg";
import img41 from "../../assets/woven_fabrics_7.jpeg";
import img42 from "../../assets/woven_fabrics_8.jpeg";
import img43 from "../../assets/germents_machineries_8.jpeg";
import img44 from "../../assets/germents_machineries_9.jpeg";
import img45 from "../../assets/product12.jpeg";
import img46 from "../../assets/product13.jpeg";
import img47 from "../../assets/product14.jpeg";
import img48 from "../../assets/product15.jpeg";
import img49 from "../../assets/product16.jpeg";
import img50 from "../../assets/product17.jpeg";
import img51 from "../../assets/product18.jpeg";
import img52 from "../../assets/product19.jpeg";
import img53 from "../../assets/product20.jpeg";
import img54 from "../../assets/product21.jpeg";
import img55 from "../../assets/product22.jpeg";
import img56 from "../../assets/product23.jpeg";
import img57 from "../../assets/product24.jpeg";
import img58 from "../../assets/product25.jpeg";
import img59 from "../../assets/product26.jpeg";
import img60 from "../../assets/product27.jpeg";
import img61 from "../../assets/product28.jpeg";
import Gallery from "./Gallery/Gallery";


const Product = ({ subcategory }) => {
  const items = [
    "Raw cotton",
    "Knitted fabrics",
    "Woven fabrics",
    "Garments machineries",
    "Shoes machineries",
  ];

  const title ={
    "Raw cotton":[ "Raw cotton","We are offering raw cotton from following origin"],
    "Woven fabrics":["Woven fabrics","Types of fabrics"],
    "Knitted fabrics":["Knitted fabrics","Types of fabrics"],
    "Garments machineries":["Garments machineries"],
    "Shoes machineries":["Shoes machineries"],
  }

  const additionalData = {
    "Woven fabrics": [
      "Taffeta",
      "Twill",
      "Satin",
      "Check",
      "Chiffon",
      "Georgette",
      "Oxford",
      "Spandex",
      "Peach skin",
      "Denim",
      "Gold print",
      "Printing",
      "Burn out",
      "Embossed",
      "Embroidery fabrics",
      "Lace",
    ],
    "Knitted fabrics": [
      "Single jersey",
      "Interlock",
      "Rib all types",
      "Anti-pilling",
      "Stripe",
      "Jacquard",
      "Velour",
      "Brush and functional sports lycra and many kinds of structure from T/C",
      "Rayon, Cotton, Spun, Nylon and so on.",
    ],
    "Raw cotton":[
      "Indian Cotton",
      "USA Cotton",
      "African Cotton",
      "Australian Cotton",
      "Turkish Cotton",
      "Greece Cotton",
      "Benin Cotton",
      "Burkina Faso Cotton",
      "Brazil Cotton",
    ]
  };

  const tableData = {
    "Polyester Chips": [
      ["ITEM", "SPECIFICATION", "IV", "REMARKS"],
      ["PET Chips", "SD", "0.67", "Filament Grade"],
      ["PET Chips", "SD", "0.69", "Filament Grade"],
      ["PET Chips", "SD Recycle", "0.73", "Filament Grade"],
      ["PET Chips", "BR Recycle", "0.70", "Filament Grade"],
      ["PET Chips", "Row 6", "0.84", "Bottle Grade"],
    ],

    "Nylon Chips": [
      ["Item", "Specification", "IV", "Remarks"],
      [
        "Nylon 6 Chips(Polymide) & Nylon66 Chips(Polymide)",
        "SD",
        2.47,
        "High Speed",
      ],
      [
        "Nylon 6 Chips(Polymide) & Nylon66 Chips(Polymide)",
        "FD",
        2.47,
        "High Speed",
      ],
      [
        "Nylon 6 Chips(Polymide) & Nylon66 Chips(Polymide)",
        "BR",
        2.47,
        "High Speed",
      ],
      [
        "Nylon 6 Chips(Polymide) & Nylon66 Chips(Polymide)",
        "BR",
        2.8,
        "High Speed",
      ],
    ],

    "HDPE Chips": [
      [
        "Sector",
        "Grade",
        "Density(kg/m3)",
        "Melt Index(g/10min)",
        "Typical Applications",
      ],
      [
        "Flim Grade",
        "F5010",
        "950",
        "1",
        "General Purpose Packaging & Wrapping applications",
      ],
      [
        "Flim Grade",
        "F52H04",
        "952",
        "0.04",
        "Garment / Grocery/ Merchandise Bags, Disposal Waste Bags, Counter Bags,Shopping bags. etc.",
      ],
      [
        "Flim Grade",
        "F50H08",
        "950",
        "0.08",
        "Super Market Carrier bag, Grocery bags",
      ],
      [
        "Monofilament",
        "R5504",
        "955",
        "0.4",
        "Fishing Nets, Insect Screens, Ropes, Cloth Yarns, Packing Straps, WovenSacks for Fertilizer",
      ],
      [
        "Monofilament",
        "R5410",
        "954",
        "0.4",
        "Raffia Tapes for Woven Sacks & Tarpaulin, Knitted nets for cropprotection,“ Raschel’’ sacks for vegetables ,Ropes",
      ],
      ["Monofilament", "R5106", "951", "0.6", "Geo-Grid"],
      [
        "Monofilament",
        "Y5008",
        "950",
        "0.85",
        "Woven sacks, fishing nets, mosquito nets, insect screens, agriculture nets etc.",
      ],
      [
        "Monofilament",
        "Y5808",
        "958",
        "0.8",
        "Cloth Yarn, Woven Sacks, Tarpaulin",
      ],
      [
        "Monofilament",
        "Y5710",
        "957",
        "0.9",
        "Monofilament for Nets, Twines & Ropes",
      ],
    ],

    "Polyester Staple Fiber": [
      ["Item", "Specification", "Cut Length", "Remarks"],
      [
        "Polyester Staple Fiber(PSF) Raw White & Dope Dyed",
        "0.80D",
        "32MM,34MM,38MM",
        "RW & DD",
      ],
      [
        "Polyester Staple Fiber(PSF) Raw White & Dope Dyed",
        "1.00D",
        "32MM,34MM,38MM",
        "RW & DD",
      ],
      [
        "Polyester Staple Fiber(PSF) Raw White & Dope Dyed",
        "1.20D",
        "32MM,34MM,38MM",
        "RW & DD",
      ],
      [
        "Polyester Staple Fiber(PSF) Raw White & Dope Dyed",
        "1.40D",
        "32MM,34MM,38MM",
        "RW & DD",
      ],
    ],

    "Viscose Staple Fiber": [
      ["Item", "Specification", "Cut Length", "Remarks"],
      [
        "Viscose Staple Fiber(VSF) Raw White & Dope Dyed",
        "1.40D",
        "32MM,38MM,51MM",
        "RW & DD",
      ],
      [
        "Viscose Staple Fiber(VSF) Raw White & Dope Dyed",
        "1.40D",
        "32MM,38MM,51MM",
        "RW & DD",
      ],
      [
        "Viscose Staple Fiber(VSF) Raw White & Dope Dyed",
        "1.40D",
        "32MM,38MM,51MM",
        "RW & DD",
      ],
      [
        "Viscose Staple Fiber(VSF) Raw White & Dope Dyed",
        "1.40D",
        "32MM,38MM,51MM",
        "RW & DD",
      ],
    ],
    "Cotton and Blended Yarn": [
      [
        "Yarn Type",
        "Count Range",
        "Sustainable Certification/Others",
        "Origin",
      ],
      [
        "100% Cotton Carded Yarn for Knitting",
        "6/1 Ne-40/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Cotton Carded Yarn Compact for Knitting",
        "6/1 Ne-40/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Cotton Carded Yarn for Weaving",
        "6/1 Ne-40/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Cotton Carded Yarn Compact for Weaving",
        "6/1 Ne-40/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Cotton Combed Yarn for Knitting",
        "6/1 Ne-150/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Cotton Combed Yarn Compact for Knitting",
        "6/1 Ne-150/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Cotton Combed Yarn for Weaving",
        "20/1 Ne-200/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Cotton Combed Yarn Compact for Weaving",
        "20/1 Ne-200/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Cotton Yarn for OE",
        "6/1 Ne-34/1 Ne",
        "BCI/Organic/CMIA/Recycle/Fair Trade",
        "Turkey/China/Vietnam",
      ],
      [
        "100% Supima Combed Yarn for Knitting",
        "20/1 Ne-120/1 Ne",
        "BCI",
        "India/China/Turkey",
      ],
      [
        "100% Supima Combed Yarn for Weaving",
        "20/1 Ne-120/1 Ne",
        "BCI",
        "India/China/Turkey",
      ],
      [
        "Core Spun Yarn (Cotton+Spandex)/Dual Core yarn",
        "10/1-40/1+40D/70D",
        "Creora/Invista/Chinese Spandex",
        "China/Turkey/India",
      ],
      [
        "100% Polyester Yarn Ring/Vortex, Knitting/Weaving",
        "20/1 Ne-40/1 Ne",
        "Virgin/Recycle",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Viscose Yarn Ring/Vortex, Knitting/Weaving",
        "20/1 Ne-40/1 Ne",
        "Eco-Vero/Liva-Eco/Lenzing/Birla",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Modal Yarn Ring/Vortex, Knitting/Weaving",
        "20/1 Ne-40/1 Ne",
        "Lenzing/Birla (FSC Certified)",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Tencel Yarn Ring/Vortex, Knitting/Weaving",
        "20/1 Ne-40/1 Ne",
        "Lenzing/Birla (FSC Certified)",
        "India/Indonesia/Turkey/China/Vietnam",
      ],
      [
        "100% Linen Yarn for Knitting/Weaving",
        "6Nm-34Nm",
        "Bleached/Semi Bleached/Raw",
        "China",
      ],
      [
        "100% Bamboo Yarn for Ring/Vortex, Knitting/Weaving",
        "20/1 Ne-40/1 Ne",
        "FSC Certified",
        "China",
      ],
      [
        "Blended Yarn Polyester/Cotton, PC/CVC",
        "20/1 Ne-40/1 Ne",
        "Virgin/Recycle, Any Ratio",
        "India/China/Turkey",
      ],
      [
        "Blended Yarn Polyester/Viscose, PV/VP",
        "20/1 Ne-40/1 Ne",
        "Virgin/Recycle, Any Ratio",
        "India/China/Turkey",
      ],
      [
        "Blended Yarn Viscose/Cotton, CV/VC",
        "20/1 Ne-40/1 Ne",
        "Any Ratio",
        "India/China/Turkey",
      ],
      [
        "Blended Yarn Polyester/Linen, PL/LP",
        "20/1 Ne-40/1 Ne",
        "Any Ratio",
        "India/China/Turkey",
      ],
      [
        "BlendedYarnCotton/Linen,CL/LC",
        "20/1 Ne-40/1 Ne",
        "Any Ratio",
        "India/China/Turkey",
      ],
    ],

    "Polyester Filament Yarn": [
      [
        "Yarn Type",
        "Count Range",
        "Sustainable Certification",
        "Luster",
        "Origin",
      ],
      [
        "100% Virgin Polyester Draw Textured Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "India/Thailand/Taiwan/China/Vietnam",
      ],
      [
        "100% Recycle Polyester Textured Yarn (DTY)",
        "20D-1200D",
        "GRS/RCS/Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "India/Thailand/Taiwan/China/Vietnam",
      ],
      [
        "100% Recycle Polyester Fully Drawn Yarn (FDY)",
        "20D-1200D",
        "GRS/RCS/Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "India/Thailand/Taiwan/China/Vietnam",
      ],
      [
        "Dope Dyed Virgin Polyester Textured Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "Black & Others",
        "India/Thailand/Taiwan/China/Vietnam",
      ],
      [
        "Dope Dyed Recycle Polyester Draw Textured Yarn (DTY)",
        "20D-1200D",
        "GRS/RCS/Oekotex Product Class-I",
        "Black & Others",
        "India/Thailand/Taiwan/China/Vietnam",
      ],
      [
        "Dope Dyed Virgin Polyester Fully Drawn Yarn (FDY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "Black & Others",
        "India/Thailand/Taiwan/China/Vietnam",
      ],
      [
        "Dope Dyed Recycle Polyester Fully Drawn Yarn (FDY)",
        "20D-1200D",
        "GRS/RCS/Oekotex Product Class-I",
        "Black & Others",
        "India/Thailand/Taiwan/China/Vietnam",
      ],
      [
        "100% Virgin Polyester Air Covered Yarn (ACY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Recycle Polyester Air Covered Yarn (ACY)",
        "20D-1200D",
        "GRS/RCS/Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Dope Dyed Polyester Air Covered Yarn (ACY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "Black & Others",
        "Taiwan/China",
      ],
      [
        "100% Dope Dyed Recycle Polyester Air Covered Yarn (ACY)",
        "20D-1200D",
        "GRS/RCS/Oekotex Product Class-I",
        "Black & Others",
        "Taiwan/China",
      ],
      [
        "Linen Like 100% Polyester Filament Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "Stretch Like 100% Polyester Filament Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "Silk Like 100% Polyester Filament Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "Coolmax 100% Polyester Filament Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "Thermolite 100% Polyester Filament Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "Sorona 100% Polyester Filament Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "Repreve 100% Polyester Filament Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Virgin Polyester Spandex Covered Yarn (SCY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Virgin Polyester Draw Textured Yarn (DTY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "India/Thailand/Taiwan/China/Vietnam",
      ],
      [
        "100% Recycle Polyester Spandex Covered Yarn (SCY)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Virgin Polyester Cationic Dyeable Yarn (100%CD)",
        "20D-1200D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
    ],
    "Nylon Filament Yarn": [
      [
        "Yarn Type",
        "Count Range",
        "Sustainable Certification",
        "Luster",
        "Origin",
      ],
      [
        "100% Virgin Nylon Draw Textured Yarn (DTY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "India/Taiwan/China",
      ],
      [
        "100% Recycle Nylon Textured Yarn (DTY)",
        "20D-600D",
        "GRS/RCS/Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "India/Taiwan/China",
      ],
      [
        "100% Virgin Nylon Fully Drawn Yarn (FDY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "India/Taiwan/China",
      ],
      [
        "100% Recycle Nylon Fully Drawn Yarn (FDY)",
        "20D-600D",
        "GRS/RCS/Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "India/Taiwan/China",
      ],
      [
        "Dope Dyed Virgin Nylon Textured Yarn (DTY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "Black & Others",
        "India/Taiwan/China",
      ],
      [
        "Dope Dyed Recycle Nylon Draw Textured Yarn (DTY)",
        "20D-600D",
        "GRS/RCS/Oekotex Product Class-I",
        "Black & Others",
        "India/Taiwan/China",
      ],
      [
        "Dope Dyed Virgin Nylon Fully Drawn Yarn (FDY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "Black & Others",
        "India/Taiwan/China",
      ],
      [
        "Dope Dyed Recycle Nylon Fully Drawn Yarn (FDY)",
        "20D-600D",
        "GRS/RCS/Oekotex Product Class-I",
        "Black & Others",
        "India/Taiwan/China",
      ],
      [
        "100% Virgin Nylon Air Covered Yarn (ACY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Recycle Nylon Air Covered Yarn (ACY)",
        "20D-600D",
        "GRS/RCS/Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Dope Dyed Nylon Air Covered Yarn (ACY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "Black & Others",
        "Taiwan/China",
      ],
      [
        "100% Dope Dyed Recycle Nylon Air Covered Yarn (ACY)",
        "20D-600D",
        "GRS/RCS/Oekotex Product Class-I",
        "Black & Others",
        "Taiwan/China",
      ],
      [
        "Linen Like 100% Nylon Filament Yarn (DTY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "Stretch Like 100% Nylon Filament Yarn (DTY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "Silk Like 100% Nylon Filament Yarn (DTY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Virgin Nylon Spandex Covered Yarn (SCY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Recycle Nylon Spandex Covered Yarn (SCY)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
      [
        "100% Virgin Nylon Cationic Dyeable Yarn(100%CD)",
        "20D-600D",
        "Oekotex Product Class-I",
        "SD/FD/CD/TBR",
        "Taiwan/China",
      ],
    ],
    "Spandex Yarn": [
      ["Yarn Type", "Count Range", "Brand Name", "Luster", "Origin"],
      ["100% Spandex", "20D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "30D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "40D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "70D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "100D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "140D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "210D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "280D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "420D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
      ["100% Spandex", "840D", "Chinese/Creora", "SD/TBR", "China/Vietnam"],
    ],
    "Sewing Thread": [
      ["Yarn Type", "Count Range", "Brand Name", "Luster", "Origin"],
      [
        "100% Polyester Sewing Thread",
        "20/2",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "20/3",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "30/2",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "30/3",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "40/2",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "40/3",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "50/2",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "50/5",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "60/2",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
      [
        "100% Polyester Sewing Thread",
        "60/3",
        "Derons & Others",
        "RW/OPW/Dope Dyed",
        "China/India",
      ],
    ],
    SweaterYarn: [
      ["Yarn Type", "Yarn Count", "Origin", "Gauges"],
      ["100% ACRYLIC", "SINGLE/DOUBLE", "CHINA,INDIA", "3GG-12GG"],
      ["100% ACRYLIC WOOL LIKE", "SINGLE/DOUBLE", "CHINA,INDIA", "3GG-12GG"],
      ["100% ACRYLIC ANTIPILING", "SINGLE/DOUBLE", "CHINA,INDIA", "3GG-12GG"],
      [
        "100% ACRYLIC CASHMERE LIKE",
        "SINGLE/DOUBLE",
        "CHINA,INDIA",
        "3GG-12GG",
      ],
      [
        "100% ACRYLIC CASHMERE LIKE MELANGE",
        "SINGLE/DOUBLE",
        "CHINA,INDIA",
        "3GG-12GG",
      ],
      ["ACRYLIC & WOOL BLEND", "SINGLE/DOUBLE", "CHINA,INDIA", "3GG-12GG"],
      ["100% VISCOSE", "SINGLE/DOUBLE", "CHINA,INDIA", "3GG-12GG"],
      ["100% COTTON", "SINGLE/DOUBLE", "CHINA,INDIA", "3GG-12GG"],
      [
        "ALL KIND OF ACRYLIC, COTTON, VISCOSE/NYLON, COTTON/NYLON, VISCOSE/COTTON ETC",
        "REGULAR COUNT AND SPECIAL TYPE ALL BLEND",
        "CHINA,INDIA",
        "3GG-12GG",
      ],
      ["100% COTTON SLUB", "SINGLE/DOUBLE", "CHINA,INDIA", "3GG-12GG"],
      [
        "100% CLEAN COTTON (DYED ON CONE)",
        "SINGLE/DOUBLE",
        "CHINA,INDIA",
        "3GG-12GG",
      ],
    ],
  };

  const tableImage = {
    "Polyester Chips": [{ src: img, alt: "Description of img" },],

    "Nylon Chips": [{ src: img2, alt: "Description of img2" },],

    "HDPE Chips": [
      { src: img3, alt: "Description of img3" },
      { src: img45, alt: "Description of img45" },
    ],

    "Polyester Staple Fiber": [
      { src: img4, alt: "Description of img4" },
    ],

    "Viscose Staple Fiber": [{ src: img5, alt: "Description of img5" },],
    "Cotton and Blended Yarn": [
      { src: img6, alt: "Description of img6" },
      { src: img51, alt: "Description of img51" },
      { src: img52, alt: "Description of img52" },
      { src: img53, alt: "Description of img53" },
      { src: img54, alt: "Description of img54" },
      { src: img55, alt: "Description of img55" },
    ],

    "Polyester Filament Yarn": [
      { src: img7, alt: "Description of img7" },
      { src: img59, alt: "Description of img59" },
      { src: img60, alt: "Description of img60" },
      { src: img61, alt: "Description of img61" },
    ],
    "Nylon Filament Yarn": [
      { src: img46, alt: "Description of img46" },
      { src: img48, alt: "Description of img48" },
      { src: img8, alt: "Description of img8" },
      { src: img47, alt: "Description of img47" },
      
    ],
    "Spandex Yarn": [
      { src: img9, alt: "Description of img9" },
      { src: img49, alt: "Description of img49" },
    ],
    "Sewing Thread": [
      { src: img50, alt: "Description of img50" },
      { src: img10, alt: "Description of img10" },
    ],
    SweaterYarn: [
      { src: img58, alt: "Description of img58" },
      { src: img57, alt: "Description of img57" },
      { src: img56, alt: "Description of img56" },
    ],
    "Raw cotton": [
      { src: img12, alt: "Description of img12" },
      { src: img13, alt: "Description of img13" },
      { src: img14, alt: "Description of img14" },
      { src: img38, alt: "Description of img38" },
    ],
    "Knitted fabrics": [
      { src: img15, alt: "Description of img15" },
      { src: img16, alt: "Description of img16" },
      { src: img17, alt: "Description of img17" },
      { src: img18, alt: "Description of img18" },
      { src: img19, alt: "Description of img19" },
      { src: img20, alt: "Description of img20" },
      { src: img39, alt: "Description of img39" },
      { src: img40, alt: "Description of img40" },
    ],
    "Woven fabrics": [
      { src: img21, alt: "Description of img21" },
      { src: img22, alt: "Description of img22" },
      { src: img23, alt: "Description of img23" },
      { src: img24, alt: "Description of img24" },
      { src: img25, alt: "Description of img25" },
      { src: img26, alt: "Description of img26" },
      { src: img41, alt: "Description of img41" },
      { src: img42, alt: "Description of img42" },
    ],
    "Garments machineries": [
      { src: img29, alt: "Description of img29" },
      { src: img30, alt: "Description of img30" },
      { src: img31, alt: "Description of img31" },
      { src: img32, alt: "Description of img32" },
      { src: img33, alt: "Description of img33" },
      { src: img34, alt: "Description of img34" },
      { src: img43, alt: "Description of img43" },
      { src: img44, alt: "Description of img44" },
    ],
    "Shoes machineries":[
      { src: img35, alt: "Description of img35" },
      { src: img36, alt: "Description of img38" },
      { src: img37, alt: "Description of img37" },
    ],
  };

  return (
    <section>
      <div className="flex flex-col">
        <div>
          {(() => {
            if (items.includes(subcategory)) {
              return <Gallery images={tableImage[subcategory]}  title={title[subcategory]} additionalData={additionalData[subcategory]}/>;
            } else {
              return (
                <DynamicTable
                  title={subcategory}
                  tableData={tableData[subcategory]}
                  tableImage={tableImage[subcategory]}
                />
              );
            }
          })()}
        </div>
      </div>
    </section>
  );
};

export default Product;
