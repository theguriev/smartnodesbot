/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    baseUrl: "https://smart-nodes-api-stg.azurewebsites.net",
  },
};

module.exports = nextConfig;
