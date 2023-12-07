import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/homePage/HomePage';
import Article from './page/article/Article';
import ContactPage from './page/contact/ContactPage';
import AboutPage from './page/about/AboutPage';
import ProductPage from './page/product/ProductPage';
import NewsPage from './page/news/NewsPage';

function App() {
  return (
   <>
    <Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route  path="/about" element={<AboutPage/>} />
      <Route  path="/product" element={<ProductPage/>} />
      <Route  path="/news" element={<NewsPage/>} />
      <Route  path="/article" element={<Article/>} />
      <Route  path="/contact" element={<ContactPage/>} />
    </Routes>
   </>
  );
}

export default App;
