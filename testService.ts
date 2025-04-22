import api from "../utils/api";

export const testApiConnection = async () => {
  try {
    const response = await api.get("/products"); // Test with a valid endpoint
    console.log("API Response:", response.data);
  } catch (error) {
    console.error("API Error:", error);
    console.log("🚀 Axios request is about to be sent!");
  }
};
