"use client";
import styles from "./Pagination.module.scss";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../services/productService";
import ProductGrid from "./ProductGrid"; // Import your product grid component

const Pagination = () => {
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]); // Explicitly define type for products

  const limit = 10;
  const offset = Math.max(0, page * limit); // ✅ Ensures offset is never negative

  console.log("📌 Debug: Fetching with limit:", limit, "offset:", offset);

  useEffect(() => {
    setLoading(true);
    setProducts([]); // ✅ Clear previous products immediately before fetching new ones
  
    fetchProducts(limit, offset)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, [page]);  

  return (
    <div>
      
      <h2>Product List</h2>
      
      {/* Display fetched products */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>
                <h3>{product.title || "No Title"}</h3>
                <p>Price: ${product.price}</p>
              </li>
            ))
          ) : (
            <p>No products available</p>
          )}
        </ul>
      )}

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
      <button 
  className={styles.button} // ✅ Use styles.button instead of global 'button'
  onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
  disabled={page === 0 || loading}
>
  Previous
</button>

<button 
  className={styles.button} // ✅ Apply class here too
  onClick={() => setPage((prev) => prev + 1)}
  disabled={loading}
>
  Next
</button>

      </div>
    </div>
  );
};

export default Pagination;
