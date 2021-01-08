import React, {useReducer} from 'react';
import {CourseContext} from "./courseContext";
import {courseReducer} from "./courseReducer";
import {ACTIVATE_STEP, DONE_STEP} from '../types';
import background1 from '../../images/adorable-brown-white-dog-licking-his-nose-close-up-isolated-white.jpg';
import background2 from '../../images/friendly-smart-basenji-dog-giving-his-paw-close-up-isolated-white.jpg';
import background3 from '../../images/first.jpg';

export const CourseState = ({children}) => {
  const steps = [
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
  ];

  const [state, dispatch] = useReducer(courseReducer, {activeCourse: 1, steps: steps});

  const activateCourse = stepNumber => {
    const payload = stepNumber;
    dispatch({
      type: ACTIVATE_STEP,
      payload
    });
  };

  const doneStep = stepNumber => {
    const payload = stepNumber;
    dispatch({
      type: DONE_STEP,
      payload
    });
  };

  return (
    <CourseContext.Provider value={{
      course: state,
      activateCourse,
      doneStep
    }}>
      {children}
    </CourseContext.Provider>
  );
};