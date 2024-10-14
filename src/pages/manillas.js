import * as React from "react";
import { graphql } from 'gatsby';
import "../components/index.css";
import Layout from "../components/layout";
import Card from "../components/card";

const Manillas = ({ data }) => {
  // Ahora data es un argumento, por lo que puedes acceder directamente
  const products = data.allProductsJson.edges;

  return (
    <Layout>
      <h1>Lista de todas las manillas hasta el momento</h1>
      <div className="fixed-grid has-4-cols-desktop has-1-cols-mobile has-2-cols-tablet is-centered">
        <div className="grid is-centered">
          {products.map(({ node }) => (
              <div className="cell is-col-min-1">
                <Card name={node.name} description={node.description} imgUrl={node.imgUrl} price={node.price} />
              </div>
            ))}
        </div>
          
      </div>
    </Layout>
  );
};

// Consulta GraphQL
export const query = graphql`
  query {
    allProductsJson {
      edges {
        node {
          name
          description
          imgUrl
          price
          category
        }
      }
    }
  }
`;

export default Manillas;
