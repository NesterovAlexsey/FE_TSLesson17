import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../../types/Product';

export default function ProductPage(): JSX.Element {
    const { productId } = useParams();
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => res.json())
            .then((json) => setProduct(json));
    }, [productId]);
    return (
        <>
            <div>ProductPage</div>
            <div>
                <h2>{product?.title}</h2>
                <img src={product?.image} alt="" />
                <p>{product?.description}</p>
                <Link to="..">Back</Link>
            </div>
        </>
    );
}
