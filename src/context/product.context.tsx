import React, { createContext, useContext, useReducer } from 'react';
import products from 'constants/products';
import ProductData from 'types/productData';
import FavoriteData from 'types/favoritesData';
import { ProductAction, FavoriteAction } from 'context/actions';
import { productReducer, favoriteReducer } from 'context/reducer';
import { getLocalData } from 'storage/dataStorage';

const productsData = getLocalData('products').length > 0 ? getLocalData('products') : products;
const favoritesData = getLocalData('favorites');

const defaultValues: ProductData = {
    products: productsData,
};

const defaultFavoriteData: FavoriteData = {
    favorites: favoritesData
}

const myProduct = {
    product: defaultValues,
};

const mySetProduct = {
    setProduct: (action: ProductAction): void => {},
}

const myFavorite = {
    favorite: defaultFavoriteData,
    setFavorite: (action: FavoriteAction): void => {}
}

const ProductContext = createContext<{product: ProductData}>(myProduct)
const FavoritesContext = createContext<{favorite: FavoriteData; setFavorite: React.Dispatch<FavoriteAction>}>(myFavorite)
const ProductDispatchContext = createContext<{setProduct: React.Dispatch<ProductAction>}>(mySetProduct)

interface Props {
    children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
    const [product, setProduct] = useReducer(productReducer, defaultValues);
    const [favorite, setFavorite] = useReducer(favoriteReducer, defaultFavoriteData)

    return (
        <ProductContext.Provider value={{ product }}>
            <FavoritesContext.Provider value={{ favorite, setFavorite }}>
                <ProductDispatchContext.Provider value={{ setProduct }}>
                    {children}
                </ProductDispatchContext.Provider>
            </FavoritesContext.Provider>
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    return {
        products: useContext(ProductContext),
        setProducts: useContext(ProductDispatchContext),
        favorites: useContext(FavoritesContext)
    }
};
