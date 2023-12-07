import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/homePage/HomePage';
import About from './page/about/About';
import Product from './page/product/Product';
import News from './page/news/News';
import Article from './page/article/Article';
import ContactPage from './page/contact/ContactPage';

function App() {
  return (
   <>
    <Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/product" element={<Product/>} />
      <Route  path="/news" element={<News/>} />
      <Route  path="/article" element={<Article/>} />
      <Route  path="/contact" element={<ContactPage/>} />
    </Routes>
   </>
  );
}

export default App;
