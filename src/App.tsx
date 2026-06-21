import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HealthCoaching from './pages/HealthCoaching';
import BusinessCoaching from './pages/BusinessCoaching';
import Events from './pages/Events';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToTop from './components/layout/ScrollToTop';
import './index.css';

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/health-coaching" element={<HealthCoaching />} />
          <Route path="/business-coaching" element={<BusinessCoaching />} />
          <Route path="/events" element={<Events />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
