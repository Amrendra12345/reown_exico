/** @type {import('next').NextConfig} */

const nextConfig = {
    sassOptions: {
        additionalData: `$var: red;`,
      },
      images:{
         loader: "default",
         domains: ["localhost"],
      }
};

export default nextConfig;
