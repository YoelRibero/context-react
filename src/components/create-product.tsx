import { useRef } from 'react';
import { useProductDispatch, useProductSeparate } from 'context/product.context';
import './create-product.css';

const CreateProduct: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { product } = useProductSeparate();
    const { setProduct } = useProductDispatch();

    const handleCreateProduct = () => {
        if (inputRef.current !== null && inputRef.current.value) {
            const newProductId = product.products.length > 0 ? (product.products[product.products.length - 1].id + 1) : 1;
            const newProduct = {
                title: inputRef.current.value,
                id: newProductId,
            }
            setProduct({ type: 'CREATE', product: newProduct});
            inputRef.current.value = '';
        }
    }
    return (
        <div className="product-form">
            <input type="text" placeholder="Create your custom product" ref={inputRef} />
            <button onClick={handleCreateProduct}>+</button>
        </div>
    )
}

export default CreateProduct;