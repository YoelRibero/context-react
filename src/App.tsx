import './App.css'

import ProductList from './components/product-list';
import Favorites from './components/favorites';
import CreateProduct from './components/create-product';
import { ProductProvider } from './context/product.context';

const App = () => {
  return (
    <div className='container'>
      <main className='main-content'>
        <ProductProvider>
          <Favorites />
          <CreateProduct />
          <ProductList />
        </ProductProvider>
      </main>
    </div>
  );
};

export default App
