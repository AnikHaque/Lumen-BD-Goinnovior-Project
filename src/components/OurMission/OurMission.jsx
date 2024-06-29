import React from 'react'
import styles from "./styles.module.css";
const OurMisson = () => {
  return (
    <div>
      {/* <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10 justify-center items-center'>
        <div className='text-center'>
          <h1
            data-aos='zoom-in'
            style={{ color: '#39A78E',  fontFamily: 'Outfit, sans-serif', fontSize: '28px'  }}
            className='text-3xl md:text-5xl font-extrabold'
            
          >
            Our Mission
          </h1>
          <p className='mt-5 text-justify' style={{ marginLeft: '30px', marginRight: '30px' }}>
            To be the best and most influential service company for one stop
            complete sourcing solution for textile and footwear industries
            through continual market research and product development.
          </p>
        </div>

        <div data-aos='zoom-in-left' className='' style={{border: "1px",  margin:"25px"}}>
          <img
            className='w-full mx-auto mb-20px rounded-tl-3xl rounded-tr-3xl rounded-br-3xl shadow-lg'
            src='https://cdn.pixabay.com/photo/2023/10/14/12/50/jeans-8314814_1280.jpg'
            alt=''
          />
        </div>
      </div> */}

      <div data-aos="fade-up-right" className={styles.container}>
        <div className={styles.itemText}>
          <div className={styles.headline}>Our Mission</div>
          <div className={styles.description}>
            To be the best and most influential service company for one stop
            complete sourcing solution for textile and footwear industries
            through continual market research and product development.
          </div>
        </div>
        <div className={styles.item}>
          <img
            className={styles.image}
            src="https://images.pexels.com/photos/4614199/pexels-photo-4614199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Textile Fabric"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMisson;
