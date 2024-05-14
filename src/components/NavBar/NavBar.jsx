import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

import BtnDarkMode from 'components/BtnDarkMode/BtnDarkMode';

const activeLink = 'nav-list__link nav-list__link--active';
const normalLink = 'nav-list__link';

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Freelancer</strong> portfolio
            </NavLink>
            <BtnDarkMode />

            {/* <button className="dark-mode-btn">
              <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
              <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button> */}

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/progects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
