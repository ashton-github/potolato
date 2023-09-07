import React from 'react';
import { useParams} from "react-router-dom";

const ProductEdit = () => {

    let params = useParams();


    return (
        <div className="ProductEdit">
            ici edit product : id = { params.productId }
        </div>
    );
};

export default ProductEdit;
