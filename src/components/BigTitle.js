import React, {Fragment} from 'react';
import Background from '../images/adorable-brown-white-dog-licking-his-nose-close-up-isolated-white.jpg';

export const BigTitle = ({course}) => {
  return (
    <div
      className="big-title"
      style={{backgroundImage: `url(${course.featuredImageUrl})`}}
    >
      <div className="position-absolute h-100 w-100 text-white">
        <div className="subtitle w-75">
          <span className="rounded-highlight px-3 mb-3">{course.subtitle}</span>
        </div>
        <h1 className="w-75 pr-5">{course.title}</h1>
      </div>
    </div>
  );
};