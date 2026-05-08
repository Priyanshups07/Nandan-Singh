import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Connect from './pages/Connect';
import Scheduler from './pages/Scheduler';
import Services from './pages/Services';
import ScrollToTop from './components/layout/ScrollToTop';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
