import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.css';

import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import Home from 'Pages/Home';
import Progects from 'Pages/Progects';
import Contacts from 'Pages/Contacts';
import Progect from 'Pages/Progect';
import ScrollToTop from 'utils/scrollToTop';

export const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progects" element={<Progects />} />
          <Route path="/progect/:id" element={<Progect />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};
