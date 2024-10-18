import React from "react";

const Card = ({name, description, imgUrl, price, jsonId, category}) => {


    return (

        <div 
            className="card" 
            style={{ maxWidth: "500px", cursor:"pointer", minWidth: "200px" }} 
            onClick={() => window.location.href = `/products/${category}/${jsonId}`}>
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