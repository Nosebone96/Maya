import React from "react";

const Card = ({title, description, imgUrl, price}) => {
    return (

        <div className="card" style={{ maxWidth: "300px" }}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imgUrl} alt={title} className="is-rounded" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>

                    </div>

                </div>
                <div className="content">{description}</div>
                <p className="title is-3 has-text-danger has-text-centered">{price}</p>

            </div>

        </div>

    )
}

export default Card;