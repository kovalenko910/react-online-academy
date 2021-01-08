import React, {Fragment} from 'react';
import {MainHeader} from '../components/MainHeader';

export const About = () => (
  <Fragment>
    <MainHeader/>
    <div className="bg-light row p-5">
      <div className="container">
        <div className="display-4">Это лукшая академия!!!</div>
      </div>
    </div>
  </Fragment>
);