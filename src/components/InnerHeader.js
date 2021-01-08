import React, {Fragment, useContext} from 'react';
import {LayoutContext} from "../context/layout/layoutContext";
import {MainMenu} from "./MainMenu";

export const InnerHeader = () => {

  const {layout, toggleSidebar} = useContext(LayoutContext);

  return (
    <Fragment>
      <header className="py-2 d-flex sticky-top bg-white">
        <button className="ml-2 btn btn-outline-primary" onClick={toggleSidebar}>
          <div className="code icon"></div>
          <span className="pl-4">
            {layout.showSidebar ? 'Hide' : 'Show'} sidebar
          </span>
        </button>
        <MainMenu/>
      </header>
      <hr className="mt-0 mb-0"/>
    </Fragment>
  );
};