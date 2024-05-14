import React from 'react';

import Progect from 'components/Progect/Progect';
import { progects } from '../Helpers/progectsList';

const Progects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {progects.map((progect, index) => {
            return (
              <Progect
                key={index}
                title={progect.title}
                img={progect.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Progects;
