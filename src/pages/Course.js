import React, {useContext, useEffect, useState} from 'react';
import {Sidebar} from '../components/Sidebar';
import {InnerHeader} from '../components/InnerHeader';
import {BigTitle} from '../components/BigTitle';
import {LayoutContext} from "../context/layout/layoutContext";
import background1 from '../images/adorable-brown-white-dog-licking-his-nose-close-up-isolated-white.jpg';
import background2 from '../images/friendly-smart-basenji-dog-giving-his-paw-close-up-isolated-white.jpg';
import background3 from '../images/first.jpg';
import {CourseContext} from "../context/course/courseContext";

export const Course = () => {
  const {layout} = useContext(LayoutContext);
  const {course, activateCourse} = useContext(CourseContext);

  const [steps, setSteps] = useState([
    {
      id: 1,
      title: 'Как очень мощно дрессировать собика',
      subtitle: 'Курсы для пацанов и девчат',
      featuredImageUrl: background1,
      stepNumber: 1,
      content: '<p class="copy w-75">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin et massa tortor. Pellentesque vel neque massa. Praesent fermentum quam ligula, eget congue lectus scelerisque et. In scelerisque condimentum tellus, et convallis libero porttitor et. Donec rhoncus neque nibh. Vivamus id laoreet diam. In eleifend sit amet mauris at maximus. Ut vitae mauris sed purus pulvinar ornare eu ac tortor.</p><p class="copy w-75">Donec consectetur consectetur mauris vel luctus. Phasellus quis odio lacus. Integer quis facilisis massa. Sed eu neque at arcu accumsan hendrerit id vitae odio. Praesent sed accumsan lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut elit at nisl molestie finibus. Nam ornare mauris at nulla auctor, sed congue nunc congue. Sed non ipsum nec nibh laoreet malesuada ac non magna. Aliquam a posuere lectus, eu viverra quam. Maecenas purus nisi, vestibulum at purus id, porta sagittis nisl.</p><p class="copy w-75">Nam sagittis libero id tellus vestibulum, in viverra quam rutrum. Fusce rutrum turpis eget turpis feugiat venenatis. In posuere purus quis mi sodales, vel gravida quam interdum. Proin ut quam eleifend, volutpat elit eu, vestibulum nibh. Suspendisse potenti. Integer at purus mauris. Aenean sollicitudin aliquam lacus id vehicula. Etiam at porttitor turpis. Suspendisse suscipit velit sit amet massa mattis venenatis. Morbi dignissim, eros sit amet fermentum tincidunt, erat lectus euismod arcu, vel varius metus dolor vel arcu. Aenean finibus dui a leo pulvinar, at gravida elit fermentum. Pellentesque ac sodales dolor, id tincidunt mi. Donec at dui imperdiet, interdum enim quis, commodo eros.</p>',
      done: false
    },
    {
      id: 2,
      title: 'Как очень мощно сидеть',
      subtitle: 'Курсы для пацанов и девчат',
      featuredImageUrl: background2,
      stepNumber: 2,
      content: '<p class="copy w-75">Собик будет бегать.</p>',
      done: false
    },
    {
      id: 3,
      title: 'Как очень мощно лежать',
      subtitle: 'Курсы для пацанов и девчат',
      featuredImageUrl: background3,
      stepNumber: 3,
      content: '<p class="copy w-75">И прыгать!</p>',
      done: false
    }
  ]);

  const nextStep = (e) => {
    const steps2 = steps;
    for (var i in steps2) {
      if (steps2[i].stepNumber === parseInt(e.target.getAttribute('data-course-number'))) {
        steps2[i].done = true;
        break; //Stop this loop, we found it!
      }
    }
    setSteps(steps2);
    activateCourse(parseInt(e.target.getAttribute('data-course-number')) + 1);
  };

  const finishHandler = (e) => {
    const steps2 = steps;
    steps2[steps2.length - 1].done = true;
    setSteps(steps2);
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
    htmlObject.innerHTML = steps.filter(s_course => s_course.stepNumber == course.activeCourse )[0].content;
    document.getElementById("main-content").appendChild(htmlObject);
  }, [course]);

  return (
    <div className="row h-100">
      <Sidebar steps={steps}/>
      <div id="main-wrapper" className="col-md-9 p-0">
        <InnerHeader/>
        <BigTitle course={steps.filter(s_course => s_course.stepNumber == course.activeCourse )[0]}/>
        <div id="main-content" className="main-content pt-5 pb-3">
        </div>
        <div className="w-75 m-auto">
          {
            (steps.length !== steps.filter(s_course => s_course.stepNumber == course.activeCourse )[0].stepNumber) ?
              <button className="btn btn-primary mb-5" onClick={nextStep} data-course-number={steps.filter(s_course => s_course.stepNumber == course.activeCourse )[0].stepNumber}>Done</button> :
              <button className="btn btn-primary mb-5" onClick={finishHandler}>Finish</button>
          }
        </div>
      </div>
    </div>
  );
}