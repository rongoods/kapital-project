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
    let lastScrollY = window.scrollY;
    let velocity = 0;
    let rafId = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      velocity = Math.min(delta, 100); // Cap velocity for stability
      lastScrollY = currentScrollY;

      document.body.style.setProperty('--scroll-y', `${currentScrollY}px`);
      document.body.style.setProperty('--scroll-pct', `${currentScrollY / (document.body.scrollHeight - window.innerHeight)}`);
      document.body.style.setProperty('--scroll', currentScrollY);
      document.body.style.setProperty('--scroll-vel', velocity);
    };

    const updateVelocity = () => {
      // Smooth decay for velocity to create the "settle" effect
      if (velocity > 0.1) {
        velocity *= 0.92; // Viscosity factor
        document.body.style.setProperty('--scroll-vel', velocity);
      } else if (velocity !== 0) {
        velocity = 0;
        document.body.style.setProperty('--scroll-vel', 0);
      }
      rafId = requestAnimationFrame(updateVelocity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId = requestAnimationFrame(updateVelocity);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
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
