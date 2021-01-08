import React, {useReducer} from 'react';
import {LayoutContext} from "./layoutContext";
import {layoutReducer} from "./layoutReducer";
import {TOGGLE_SIDEBAR} from '../types';

export const LayoutState = ({children}) => {
  const [state, dispatch] = useReducer(layoutReducer, {showSidebar: true});

  const toggleSidebar = () => {
    dispatch({
      type: TOGGLE_SIDEBAR
    })
  };

  return(
    <LayoutContext.Provider value={{
      toggleSidebar,
      layout: state
    }}>
      {children}
    </LayoutContext.Provider>
  )
};