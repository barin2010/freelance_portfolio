import './styles/main.css';

import NavBar from 'components/NavBar/NavBar';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Header />\
      <Main />
      <Footer />
    </div>
  );
};
