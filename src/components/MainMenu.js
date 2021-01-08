import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

export const MainMenu = () => {

  const showDropdownMenu = (element) => {
    const id = element.getAttribute('data-bs-toggle');
    document.getElementById(id).classList.toggle('show');
  };

  return (
    <Fragment>
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
    </Fragment>
  )
};