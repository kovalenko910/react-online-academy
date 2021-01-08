import React, {useContext, useEffect} from 'react';
import {Sidebar} from '../components/Sidebar';
import {InnerHeader} from '../components/InnerHeader';
import {BigTitle} from '../components/BigTitle';
import {LayoutContext} from "../context/layout/layoutContext";
import {CourseContext} from "../context/course/courseContext";

export const Course = () => {
  const {layout} = useContext(LayoutContext);
  const {course, activateCourse, doneStep} = useContext(CourseContext);

  const nextStep = (e) => {
    doneStep(parseInt(e.target.getAttribute('data-course-number')));
    activateCourse(parseInt(e.target.getAttribute('data-course-number')) + 1);
  };

  const finishHandler = (e) => {
    doneStep(course.steps.length);
    alert('Поздравляем! Вы только что прошли курс по собикам!!!!');
  };

  useEffect(() => {
    if(!layout.showSidebar) {
      document.getElementById('main-wrapper').classList.remove('col-md-9');
      document.getElementById('main-wrapper').classList.add('col-md-12');
    } else {
      document.getElementById('main-wrapper').classList.add('col-md-9');
      document.getElementById('main-wrapper').classList.remove('col-md-12');
    }
  }, [layout]);

  useEffect(() => {
    document.getElementById("main-content").innerHTML = '';
    var htmlObject = document.createElement('div');
    htmlObject.innerHTML = course.steps.filter(s_course => s_course.stepNumber == course.activeCourse )[0].content;
    document.getElementById("main-content").appendChild(htmlObject);
  }, [course]);

  return (
    <div className="row h-100">
      <Sidebar/>
      <div id="main-wrapper" className="col-md-9 p-0">
        <InnerHeader/>
        <BigTitle course={course.steps.filter(s_course => s_course.stepNumber == course.activeCourse )[0]}/>
        <div id="main-content" className="main-content pt-5 pb-3">
        </div>
        <div className="w-75 m-auto">
          {
            (course.steps.length !== course.steps.filter(s_course => s_course.stepNumber == course.activeCourse )[0].stepNumber) ?
              <button className="btn btn-primary mb-5" onClick={nextStep} data-course-number={course.steps.filter(s_course => s_course.stepNumber == course.activeCourse )[0].stepNumber}>Done</button> :
              <button className="btn btn-primary mb-5" onClick={finishHandler}>Finish</button>
          }
        </div>
      </div>
    </div>
  );
}