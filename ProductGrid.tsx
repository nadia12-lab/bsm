"use client";

import React, { useEffect, useState } from "react";
import "../../styles/grid.scss";
import "../../styles/product.scss";
import Product from "./product";

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;

  useEffect(() => {
    const fetchCombinedProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching combined products:", error);
      }
    };

    fetchCombinedProducts();
  }, []);

  const displayedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="product-grid">
        {displayedProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <div className="pagination-buttons">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * productsPerPage >= products.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;

