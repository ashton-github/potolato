import React from 'react';
import {useNavigate} from "react-router-dom";

const Product = () => {
    let navigate = useNavigate();

    const products = [
        {
            "id": "1",
            "name": "product 1"
        },
        {
            "id": "2",
            "name": "product 2"
        },
        {
            "id": "3",
            "name": "product 3"
        },
        {
            "id": "4",
            "name": "product 4"
        }
    ];

    const editProduct = (productId) => {
        navigate("../edit/"+productId, {replace: true})
    }

    const productList = () => products.map((product) =>
        <li>{product.name} <button onClick={() => editProduct(product.id)}>Modifier</button></li>
    );

    return (
        <div className="Product">
            <ul className="product_list">
                {productList()}
            </ul>
        </div>
    );
};

export default Product;
