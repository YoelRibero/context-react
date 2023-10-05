import Product from 'types/product';
import { useProductSeparate, useFavorite } from 'context/product.context';
import './favourites.css';

const Favorites: React.FC = () => {
    const { product } = useProductSeparate();
    const { favorite: { favorites } } = useFavorite();
    const myFavorites: Product[] = [];

    favorites.forEach((fav: number) => {
        const favorite = product.products.find(product => product.id === fav);
        if (favorite) {
            myFavorites.push(favorite);
        }
    });

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
