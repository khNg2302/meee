/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'firebasestorage.googleapis.com',
          },
          {
            hostname:'www.shutterstock.com'
          }
        ],
      },
};

export default nextConfig;
