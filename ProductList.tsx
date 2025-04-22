import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../services/productService";

const Pagination = () => {
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]); // ✅ Store fetched products

  const limit = 10;
  const offset = page * limit; // ✅ Correct offset calculation

  useEffect(() => {
    setLoading(true);
    fetchProducts(limit, offset) // ✅ Fetch products with correct args
      .then((data) => setProducts(data)) // ✅ Store the fetched products
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div>
      <h2>Product List</h2>
      
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
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))} disabled={page === 0 || loading}>
          Prev
        </button>
        <button onClick={() => setPage((prev) => prev + 1)} disabled={loading}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
