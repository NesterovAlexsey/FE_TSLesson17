import React, { useEffect, useState } from 'react';
import Product from '../../types/Product';

export default function Shop(): JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json))
    },[]);
    return (
        <div>Shop</div>
    );
}
