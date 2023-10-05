import React from "react";
import { useProductSeparate } from "@/context/product.context";
import ProductDetails from "./product-details";

const ProductList: React.FC = React.memo(() => {
    const { product } = useProductSeparate();

    return (
        <section className="product-container">
            {product.products.map((product) => (
                <ProductDetails key={product.id} product={product} />
            ))}
        </section>
    );
});

export default ProductList;
