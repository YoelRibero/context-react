import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import products from 'constants/products';
import ProductData from 'types/productData';
import FavoriteData from 'types/favoritesData';
import { ProductAction, FavoriteAction } from 'context/actions';
import { productReducer, favoriteReducer } from 'context/reducer';
import { getLocalData, saveLocalData } from 'storage/dataStorage';

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
    setProduct: (action: ProductAction): void => {action},
}

const myFavorite = {
    favorite: defaultFavoriteData,
    setFavorite: (action: FavoriteAction): void => {action}
}

const ProductContext = createContext<{product: ProductData}>(myProduct)
const FavoritesContext = createContext<{favorite: FavoriteData; setFavorite: React.Dispatch<FavoriteAction>}>(myFavorite)
const ProductDispatchContext = createContext<{setProduct: React.Dispatch<ProductAction>}>(mySetProduct)

interface Props {
    children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
    const [product, setProduct] = useReducer(productReducer, defaultValues)
    const [favorite, setFavorite] = useReducer(favoriteReducer, defaultFavoriteData)

    useEffect(() => {
        saveLocalData('products', product.products)
    }, [product.products])

    useEffect(() => {
        saveLocalData('favorites', favorite.favorites)
    }, [favorite.favorites])

    return (
        <ProductDispatchContext.Provider value={useMemo(() => ({ setProduct }), [setProduct])}>
            <ProductContext.Provider value={useMemo(() => ({ product }), [product])}>
                <FavoritesContext.Provider value={useMemo(() => ({ favorite, setFavorite }), [favorite, setFavorite])}>
                    {children}
                </FavoritesContext.Provider>
            </ProductContext.Provider>
        </ProductDispatchContext.Provider>
    );
};

export const useProductSeparate = () => useContext(ProductContext)
export const useProductDispatch = () => useContext(ProductDispatchContext)
export const useFavorite = () => useContext(FavoritesContext)
