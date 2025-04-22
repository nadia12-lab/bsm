import React from "react";
import Image from "next/image"; // Import Next.js Image component
import "../../styles/grid.scss"; // Ensure grid.scss is imported
import { useState, useEffect } from "react";

// Define Props Interface
interface ProductProps {
  name: string;
  image: string;
  price: number;
}

// Functional component with props
const Product: React.FC<ProductProps> = ({ name, image, price }) => {
  return (
    <div className="product-card">
      {image ? (
  <Image src={image} alt={name} width={300} height={300} priority />
) : (
  <div style={{ width: 300, height: 300, background: "#eee", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <span>No image</span>
  </div>
)}
      <h2>{name}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="price">
        ${price.toFixed(2)}
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
