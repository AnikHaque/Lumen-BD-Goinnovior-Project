import React from 'react';
import { useParams } from 'react-router-dom';
import Product5 from './Product5'; // Import your product component

const ProductDetails = () => {
  const { subcategory } = useParams(); // Get the subcategory from the URL

  return (
    <div>
      {/* ... your layout */}
      <Product5 subcategory={subcategory} />
    </div>
  );
};

export default ProductDetails;
