/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Ensures images work properly in static export
    },
  };
  
  module.exports = nextConfig;