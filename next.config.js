/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  future: {
    // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
    webpack5: true,   
  },
  rewrites: async () => [
    {
      source: "/anthropic/:path*",
      destination: "https://api.anthropic.com/:path*"
    },
  ],
  webpack(config) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,  

      fs: false, // the solution
    };
    
    return config;
  },
}

module.exports = nextConfig
