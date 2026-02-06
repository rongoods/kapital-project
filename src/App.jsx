import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Marketing from './pages/Marketing';
import ITProduct from './pages/ITProduct';
import Design from './pages/Design';
import Investment from './pages/Investment';
import Contact from './pages/Contact';
import Partnership from './pages/Partnership';

function App() {
  React.useEffect(() => {
    const handleScroll = () => {
      document.body.style.setProperty('--scroll-y', `${window.scrollY}px`);
      document.body.style.setProperty('--scroll-pct', `${window.scrollY / (document.body.scrollHeight - window.innerHeight)}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/it-product" element={<ITProduct />} />
        <Route path="/design" element={<Design />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partnership" element={<Partnership />} />
      </Routes>
    </Layout>
  );
}

export default App;
