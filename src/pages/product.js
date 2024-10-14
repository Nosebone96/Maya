import React from "react";
import { graphql } from "gatsby";
import Card from "../components/card";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { useLocation } from '@reach/router';


const View_product = ({ product }) => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const name = params.get('name');
    const description = params.get('description');
    const imgUrl = params.get('imgUrl');
    const price = params.get('price');

    if (!name || !description || !imgUrl || !price) {
        return <p>Error: algunos parámetros no están definidos.</p>;
    }

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


export default View_product;