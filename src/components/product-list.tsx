import React, { useEffect } from "react";
import { useProduct } from 'context/product.context';
import ProductDetails from "./product-details";
import { saveLocalData } from "@/storage/dataStorage";

const ProductList: React.FC = () => {
    const { products: { product } } = useProduct();

    useEffect(() => {
        saveLocalData('products', product.products)
    }, [product.products])
    return (
        <section className="product-container">
            {product.products.map((product) => (
                <ProductDetails key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductList;
