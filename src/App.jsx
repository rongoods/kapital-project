import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Marketing from './pages/Marketing';
import ITProduct from './pages/ITProduct';
import Design from './pages/Design';
import Investment from './pages/Investment';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/it-product" element={<ITProduct />} />
        <Route path="/design" element={<Design />} />
        <Route path="/investment" element={<Investment />} />
      </Routes>
    </Layout>
  );
}

export default App;
