// import ProductRangeSlider from './ProductRangeSlider';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from "./styles.module.css";
import rawCotton from "../../assets/rawCotton_3.jpeg";
import cottonBlendedYarn from "../../assets/product6.jpg";
import woven_fabrics from "../../assets/woven_fabrics_6.jpeg";
import germents_machineries from "../../assets/germents_machineries_4.jpeg";

const OurProductDetails = () => {
  const navItems = [
      { title: 'Discover More', path: '/products' },
    ];
  return (
    // <div >
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 items-center justify-center max-w-7xl m-auto">
    //       <div data-aos='zoom-in-left' className="">
    //               <ProductRangeSlider />
    //           </div>
    //           <div data-aos="zoom-in" className="">
    //               <h1 style={{ color: '#39A78E', fontFamily: 'Outfit, sans-serif', fontSize: '28px', marginRight: "30px" }} className='text-3xl md:text-5xl text-center font-extrabold'>Our Product Details</h1>
    //   <div className='' style={{display:'flex',justifyContent:'center', marginRight: "30px" }}>
    //   {navItems.map((item) => (
    //   <Button
    //     key={item.title}
    //     color="inherit"
    //     component={Link}
    //     to={item.path}
    //     size='small'
    //     style={{
    //       backgroundImage: 'linear-gradient(to right, #4CAF50, #2196F3)',
    //       color: 'black',
    //       //border: '1px solid black',
    //       padding: '7px',
    //       borderRadius: '10px',
    //       marginTop: '50px'
    //     }}        >
    //     {item.title}
    //   </Button>
    // ))}
    //   </div>
    //           </div>

    //       </div>
    //   </div>
    <div className={styles.container}>
      <div className={styles.title}>Our Products</div>
      <div className={styles.imagesRow}>
        <div className={styles.imageContainer}>
          <img
            className={styles.BoxImg}
            style={{height: '250px', width: '250px'}}
            src={rawCotton}
            alt="Product"
          />
          <div className={styles.caption}>Raw Cotton</div>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.BoxImg}
            style={{height: '250px', width: '250px'}}
            src={cottonBlendedYarn}
            alt="Product"
          />
          <div className={styles.caption}>Cotton & Blended Yarn</div>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.BoxImg}
            style={{height: '250px', width: '250px'}}
            src={woven_fabrics}
            alt="Product"
          />
          <div className={styles.caption}>Woven Fabrics</div>
        </div>

        <div className={styles.imageContainer}>
          <img
            className={styles.BoxImg}
            style={{height: '250px', width: '250px'}}
            src={germents_machineries}
            alt="Product"
          />
          <div className={styles.caption}>Germents Machineries</div>
        </div>

      </div>
      {navItems.map((item) => (
          <Button
            className={styles.discoverButton}
            key={item.title}
            component={Link}
            to={item.path}
          >
            {item.title}
          </Button>
        ))}
    </div>
  );
};

export default OurProductDetails;
