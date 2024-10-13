/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/content/products/`, // Asegúrate de que esta ruta sea correcta
      },
    },
    `gatsby-transformer-json`, // Este plugin es necesario para transformar JSON
  ],
};
