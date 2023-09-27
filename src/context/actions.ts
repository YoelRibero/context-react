import Product from 'types/product';

type ProductAction =
| {
    type: 'PRODUCTS';
    products: Product[];
  }
| {
      type: 'CREATE';
      product: Product;
  }
| {
      type: 'DELETE';
      delete: number;
  }

type FavoriteAction =
  | {
    type: 'FAVORITES';
    favorites: number;
  }
  | {
    type: 'DELETE';
    delete: number;
}

export type {ProductAction, FavoriteAction};