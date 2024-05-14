import React from 'react';
import { useParams } from 'react-router-dom';
import BtnGitHub from 'components/BtnGitHub/BtnGitHub';
import { progects } from '../Helpers/progectsList';

const Progect = () => {
  const { id } = useParams();
  const progect = progects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{progect.title}</h1>

          <img src={progect.imgBig} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>{progect.skills}</p>
          </div>
          {progect.gitHub && <BtnGitHub link={progect.gitHub} />}
          {/* <BtnGitHub link={progect.gitHub} /> */}
        </div>
      </div>
    </main>
  );
};

export default Progect;
