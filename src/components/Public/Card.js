import React from 'react';
import "./Card.css"
import {Link} from "react-router-dom";

const Card = (props) => {

    let {product, img} = props;
    return (
        <Link className="card_link" to={`/service/${product.id}`}>
            <article className="card_article">
                <img src={img} alt={product.name} />
                <div>{product.name}</div>
            </article>
        </Link>
    );
};

export default Card;
