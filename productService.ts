export async function fetchProducts() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  return await response.json();
}
