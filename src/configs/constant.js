const isDevelopment = import.meta.env.VITE_NODE_ENV === "development" || !import.meta.env.VITE_NODE_ENV;

const constants = {
  // API URL with proper fallbacks
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  googleClientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
  baseURL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:5173",
  profileUrl: import.meta.env.VITE_API_URL_PROFILE,
  productUrl: import.meta.env.VITE_API_URL_PRODUCT,
  isDevelopment,
};

export default constants;
