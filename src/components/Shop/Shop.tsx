import React, { useEffect, useState } from 'react';
import type Product from '../../types/Product';
import styles from './Shop.module.css';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function Shop(): JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);
    const { productId } = useParams();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);
    return (
        <>
            {productId ? (<Outlet />) :
            (<><div>Shop</div><div>
                    <ul className={styles.cardsList}>
                        {products.map((product) => (
                            <li className={styles.card} key={product.id.toString()}>
                                <span>{product.title}</span>
                                <div className={styles.imgContainer}>
                                    <img className={styles.img} src={product.image} alt="" />
                                </div>
                                <p>{product.price}</p>
                                <Link to={product.id.toString()}>To product</Link>
                            </li>
                        ))}
                    </ul>
                </div></>)
            }
        </>
    );
}
