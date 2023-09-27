import Product from 'types/product';
import { useProduct } from 'context/product.context';
import './favourites.css';
import { useEffect } from 'react';
import { saveLocalData } from '@/storage/dataStorage';

const Favorites: React.FC = () => {
    const { products: { product }, favorites: { favorite: { favorites } } } = useProduct();
    const myFavorites: Product[] = [];

    favorites.forEach((fav: number) => {
        const favorite = product.products.find(product => product.id === fav);
        if (favorite) {
            myFavorites.push(favorite);
        }
    });

    useEffect(() => {
        saveLocalData('favorites', favorites)
    }, [favorites])
    return (
        <section className='favorites'>
            <h2>My Favorite products</h2>
            {myFavorites.length ? (
                <ul>
                    {myFavorites.map((favorite) => (
                        <li key={favorite.id}>{favorite.title}</li>
                    ))}
                </ul>
            ) : (
                <div>No favorite product!</div>
            )}
        </section>
    );
};

export default Favorites;
