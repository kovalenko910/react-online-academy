import React, {useContext, useEffect} from 'react';
import {Keypoints} from "./Keypoints";
import {LayoutContext} from "../context/layout/layoutContext";


export const Sidebar = ({steps}) => {

  const {layout} = useContext(LayoutContext);

  useEffect(() => {
    if(!layout.showSidebar) {
      document.getElementById('sidebar').classList.add('d-none');
    } else {
      document.getElementById('sidebar').classList.remove('d-none');
    }
  }, [layout]);

  return (
    <div id="sidebar" className="bg-light">
      <h2 className="mt-2">Как мощно дрессировать собика</h2>
      <hr className="mt-1"/>
      <Keypoints steps={steps}/>
    </div>
  );
};