import ProductData from 'types/productData';
import FavoriteData from 'types/favoritesData';
import { ProductAction, FavoriteAction } from 'context/actions';

const productReducer = (
    state: ProductData,
    action: ProductAction
  ): ProductData => {
    switch (action.type) {
        case 'PRODUCTS':
            return { ...state, products: action.products };
        case 'CREATE':
            return { ...state, products: [...state.products, action.product]}
        case 'DELETE': {
            const {products} = state;
            const newProducts = products.filter(product => product.id !== action.delete);
            return { ...state, products: newProducts}
          }
        default:
            return state;
        }
    };

const favoriteReducer = (
    state: FavoriteData,
    action: FavoriteAction
  ): FavoriteData => {
    switch (action.type) {
        case 'FAVORITES': {
            let { favorites } = state;
            if (state.favorites.includes(action.favorites)) {
                favorites = favorites.filter((fav) => fav !== action.favorites);
            } else {
                favorites = [...state.favorites, action.favorites];
            }
            return { ...state, favorites }
          }
        case 'DELETE': {
            const { favorites } = state;
            const newFavorites = favorites.filter(favorite => favorite !== action.delete)
            return { ...state,  favorites: newFavorites }
        }
        default:
            return state
    }
  }

export { productReducer, favoriteReducer};
