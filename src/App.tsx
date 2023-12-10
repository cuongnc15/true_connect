import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/homePage/HomePage';
import AboutPage from './page/about/AboutPage';
import ProductPage from './page/product/ProductPage';
import NewsPage from './page/news/NewsPage';
import ArticlePage from './page/article/ArticlePage';
import ContactPage from './page/contact/ContactPage';
import ProductItemPage from './page/productItem/ProductItemPage';

function App() {
  return (
   <>
    <Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route  path="/about" element={<AboutPage/>} />
      <Route  path="/product" element={<ProductPage/>} />
      <Route  path="/news" element={<NewsPage/>} />
      <Route  path="/article" element={<ArticlePage/>} />
      <Route  path="/contact" element={<ContactPage/>} />
      <Route  path="/productItem" element={<ProductItemPage/>} />
    </Routes>
   </>
  );
}

export default App;
