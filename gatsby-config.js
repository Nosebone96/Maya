require("dotenv").config({
  path: `.env`, // Asegúrate de que la ruta sea correcta
});
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/content/products`, // Asegúrate de que esta ruta sea correcta
      },
    },
    `gatsby-transformer-json`, // Este plugin es necesario para transformar JSON
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `gatsby-source-cloudinary/`
      }
    }
  ],
};
