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
      <h1>Lista de Productos</h1>
      <ul>
        {products.map(({ node }) => (
          <Card title={node.name} description={node.description} imageUrl={node.imageUrl} price={node.price} />
        ))}
      </ul>
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
          price
          category
        }
      }
    }
  }
`;

export default Manillas;
