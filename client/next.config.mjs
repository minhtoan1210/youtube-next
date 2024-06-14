/** @type {import('next').NextConfig} */
// dùng để import các hình trên mạng vào 
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '/photos/**'
        }
      ]
    }
  }

export default nextConfig;
