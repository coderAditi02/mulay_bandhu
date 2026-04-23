import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CustomOrder from './pages/CustomOrder';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// Pages (to be implemented)
const About = () => <div className="p-10 flex-grow">About Us</div>;
const Contact = () => <div className="p-10 flex-grow">Contact Page</div>;
const Wishlist = () => <div className="p-10 flex-grow">Wishlist</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="custom-order" element={<CustomOrder />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<div className="p-10 flex-grow text-center text-4xl">404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
