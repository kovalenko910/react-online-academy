import React, {useReducer} from 'react';
import {CourseContext} from "./courseContext";
import {courseReducer} from "./courseReducer";
import {ACTIVATE_COURSE} from '../types';

export const CourseState = ({children}) => {
  const [state, dispatch] = useReducer(courseReducer, {activeCourse: 1});

  const activateCourse = courseNumber => {
    const payload = courseNumber;

    dispatch({
      type: ACTIVATE_COURSE,
      payload
    })
  };

  return (
    <CourseContext.Provider value={{
      course: state,
      activateCourse
    }}>
      {children}
    </CourseContext.Provider>
  );
};