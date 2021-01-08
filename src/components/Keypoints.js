import React, {useContext, useEffect} from 'react';
import {CourseContext} from "../context/course/courseContext";

export const Keypoints = ({steps}) => {
  const keypoints = new Array(3).fill('');

  const {course, activateCourse} = useContext(CourseContext);

  const toggleActive = (element) => {
    activateCourse(element.getAttribute('data-course-number'));
  };

  useEffect(() => {
    const keypointsList = document.getElementById('keypoints-list');
    for (const el of keypointsList.children) {
      if(course.activeCourse != el.getAttribute('data-course-number')) {
        console.log(el.getAttribute('data-course-number'));
        el.classList.remove('current');
      } else {
        console.log('EEEE');
        el.classList.add('current');
      }
    }
  }, [course]);

  return (
    <ul id="keypoints-list" className="list-group">
      {
        steps.map((e,i) => (
          <li className={!e.done ? "list-group-item" : "list-group-item done"} onClick={event => (toggleActive(event.currentTarget))} key={e.id} data-course-number={e.id}>
            <div className="heart icon"></div>
            <span>{e.title}</span>
          </li>
        ))
      }
    </ul>
  );
};