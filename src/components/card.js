import { Link, navigate } from "gatsby";
import React from "react";

const Card = ({name, description, imgUrl, price}) => {


    return (

        <div 
            className="card" 
            style={{ maxWidth: "300px", cursor:"pointer", minWidth: "200px" }} 
            onClick={() => window.location.href = `/product?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&imgUrl=${encodeURIComponent(imgUrl)}&price=${price}`}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imgUrl} alt={name} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-5">{name}</p>

                    </div>

                </div>
                <div className="content">{description}</div>
                <p className="title is-3 has-text-danger has-text-centered">{price}</p>

            </div>

        </div>

    )
}

export default Card;