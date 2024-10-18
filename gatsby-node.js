exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const productTemplate = require.resolve("./src/templates/product-Template.js");

    const result = await graphql(`
      {
        allProductsJson {
          edges {
            node {
              jsonId
              category
            }
          }
        }
      }
    `);

    console.log(result.data.allProductsJson.edges);

    result.data.allProductsJson.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.category}/${node.jsonId}/`,
        component: productTemplate,
        context: {
          jsonId: node.jsonId
        }
      });
    });
  };