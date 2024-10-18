import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";


const ProductTemplate = ({ data }) => {

    const {name, description, price, imgUrl} = data.productsJson;



    return (
        <Layout>
            <section className="section">
            <div className="container">
                <div className="columns is-vcentered">
                {/* Columna para la imagen */}
                <div className="column is-half">
                    <figure className="image">
                    <img src={imgUrl} alt={name} style={{ maxHeight: '100%', objectFit: 'cover' }} />
                    </figure>
                </div>
        
                {/* Columna para las especificaciones del producto */}
                <div className="column is-half">
                    <h1 className="title has-text-danger">{name}</h1>
                    <h2 className="subtitle">Precio: ${price}</h2>
                    <p>{description}</p>
                    {/* Aquí puedes añadir más especificaciones si lo deseas */}
                </div>
                </div>
            </div>
            </section>
        </Layout>
      );
};

export const query = graphql`
query($jsonId: String!) {
  productsJson(jsonId: { eq: $jsonId }) {
    name
    description
    price
    imgUrl
  }
}
`;


export default ProductTemplate;