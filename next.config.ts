import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// const nextConfig = {
//   experimental: {
//     optimizePackageImports: ['lucide-react', '@hookform/resolvers'],
//   },
//   images: {
//     domains: ['localhost', 'api.yourapp.com'],
//   },
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY',
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff',
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'origin-when-cross-origin',
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;
