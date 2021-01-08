import React, {Fragment, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {LayoutContext} from "../context/layout/layoutContext";

export const InnerHeader = () => {

  const {layout, toggleSidebar} = useContext(LayoutContext);

  const showDropdownMenu = (element) => {
    const id = element.getAttribute('data-bs-toggle');
    document.getElementById(id).classList.toggle('show');
  };

  return (
    <Fragment>
      <header className="py-2 d-flex sticky-top bg-white">
        <button className="ml-2 btn btn-outline-primary" onClick={toggleSidebar}>
          <div className="code icon"></div>
          <span className="pl-4">
            {layout.showSidebar ? 'Hide' : 'Show'} sidebar
          </span>
        </button>
        {/*<NavLink*/}
          {/*className="mx-auto"*/}
          {/*to="/"*/}
          {/*exact*/}
        {/*>Домой</NavLink>*/}
          <button className="btn float-right mr-2 position-relative dropdown-toggle" data-bs-toggle="dropdown-menu" onClick={(e) => (showDropdownMenu(e.currentTarget))}>
            &nbsp;
            <div className="menu icon"></div>
          </button>
          <ul id="dropdown-menu" className="dropdown-menu dropdown-menu-end">
            <li>
              <NavLink className="dropdown-item" to="/" exact>Домой</NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/courses" exact>Курсы</NavLink>
            </li>
            <li>
              <NavLink className="dropdown-item" to="/about" exact>Об академии</NavLink>
            </li>
            <li><hr className="dropdown-divider"/></li>
            <li>
              <NavLink className="dropdown-item" to="/dashboard">
                <div className="profile icon"></div>
                <span className="pl-4">Личный кабинет</span>
              </NavLink>
            </li>
          </ul>
      </header>
      <hr className="mt-0 mb-0"/>
    </Fragment>
  );
};