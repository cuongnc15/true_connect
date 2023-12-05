import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/homePage/HomePage';
import About from './page/about/About';
import Product from './page/product/Product';

function App() {
  return (
   <>
    <Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/product" element={<Product/>} />
    </Routes>
   </>
  );
}

export default App;
