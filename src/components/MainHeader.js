import React, {Fragment} from 'react';
import {MainMenu} from "./MainMenu";

export const MainHeader = () => {

  return (
    <Fragment>
      <header className="py-2 d-flex sticky-top bg-white">
        <span>&nbsp;</span>
        <MainMenu/>
      </header>
      <hr className="mt-0 mb-0"/>
    </Fragment>
  );
};