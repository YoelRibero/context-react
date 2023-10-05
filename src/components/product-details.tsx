import React from 'react';
import Product from 'types/product';
import { useProductDispatch, useFavorite } from 'context/product.context';
import './product-details.css'

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
    const { setProduct } = useProductDispatch();
    const { favorite: { favorites }, setFavorite } = useFavorite();

    const handleFavorite = (productId: number) => {
        setFavorite({ type: 'FAVORITES', favorites: productId})
    }
    const handleDelete = (productId: number) => {
        setProduct({ type: 'DELETE', delete: productId })
        setFavorite({ type: 'DELETE', delete: productId })
    }
    const isFavorite = favorites.includes(product.id);

    return (
        <div className='product-card'>
            <div className='product-details-container'>
                <div className='product-details'>
                    <div className='product-image'>{product.title}</div>
                </div>
                <div className='add-to-cart'>
                    <button
                        type='button'
                        className={`button${isFavorite ? ' favourite' : ''}`}
                        onClick={() => handleFavorite(product.id)}
                    >
                        <span>{isFavorite ? '❤️' : '❤︎'}</span>
                    </button>
                    <button type='button' className='button' onClick={() => handleDelete(product.id)}>
                        <span>🗑️</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
