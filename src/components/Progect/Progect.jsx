import React from 'react';
import { NavLink } from 'react-router-dom';
import './stules.css';

const Progect = ({ img, title, index }) => {
  return (
    <NavLink to={`/progect/${index}`}>
      <li className="project">
        <img src={img} alt="Project img" className="project__img" />

        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Progect;
