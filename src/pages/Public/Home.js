import React, {useEffect, useRef, useState} from 'react';
import Card from "../../components/Public/Card";

const Home = () => {

    const [products, setProducts] = useState([]);
    const flag = useRef(false);


    let prodactList = [
        {
            id : 1,
            name : "prod1",
            referance : "prod0001",
            description : "good product",
            unitPrice : 100,
            quantity : 100,
            creationDate : "2O23-09-10T14:02:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 2,
            name : "prod2",
            referance : "prod0002",
            description : "very expensive product ",
            unitPrice : 20000,
            quantity : 10,
            creationDate : "2O23-09-10T14:05:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 3,
            name : "prod3",
            referance : "prod0003",
            description : "an expensive product ",
            unitPrice : 5000,
            quantity : 90,
            creationDate : "2O23-09-10T14:07:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 4,
            name : "prod4",
            referance : "prod0004",
            description : "good product",
            unitPrice : 100,
            quantity : 100,
            creationDate : "2O23-09-10T14:02:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 5,
            name : "prod5",
            referance : "prod0005",
            description : "very expensive product ",
            unitPrice : 20000,
            quantity : 10,
            creationDate : "2O23-09-10T14:05:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 6,
            name : "prod6",
            referance : "prod0006",
            description : "an expensive product ",
            unitPrice : 5000,
            quantity : 90,
            creationDate : "2O23-09-10T14:07:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 7,
            name : "prod7",
            referance : "prod0007",
            description : "good product",
            unitPrice : 100,
            quantity : 100,
            creationDate : "2O23-09-10T14:02:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 8,
            name : "prod8",
            referance : "prod0008",
            description : "very expensive product ",
            unitPrice : 20000,
            quantity : 10,
            creationDate : "2O23-09-10T14:05:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 9,
            name : "prod9",
            referance : "prod0009",
            description : "an expensive product ",
            unitPrice : 5000,
            quantity : 90,
            creationDate : "2O23-09-10T14:07:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 10,
            name : "prod10",
            referance : "prod00010",
            description : "good product",
            unitPrice : 100,
            quantity : 100,
            creationDate : "2O23-09-10T14:02:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 11,
            name : "prod11",
            referance : "prod00011",
            description : "very expensive product ",
            unitPrice : 20000,
            quantity : 10,
            creationDate : "2O23-09-10T14:05:14",
            updateDate : "2O23-09-13T14:04:14",
        },
        {
            id : 12,
            name : "prod12",
            referance : "prod00012",
            description : "an expensive product ",
            unitPrice : 5000,
            quantity : 90,
            creationDate : "2O23-09-10T14:07:14",
            updateDate : "2O23-09-13T14:04:14",
        }
    ];

    useEffect(() => {
        if(flag.current === false) {
            setProducts(prodactList) ;
        }

        return () => flag.current =true;
    },[]);


    return (
        <div className="home" style={{ }}>
            {
                products.map((product, id) =>(
                    <article key={id} className='productArticle' >
                        <Card key={id} product={product} img={"https://picsum.photos/20"+id}/>
                    </article>
                ))
            }
        </div>
    );
};

export default Home;
