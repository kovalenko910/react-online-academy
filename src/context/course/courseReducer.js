import {ACTIVATE_STEP, DONE_STEP} from "../types";

const handlers = {
  [ACTIVATE_STEP]: (state, {payload}) => ({
    ...state,
    activeCourse: payload
  }),
  [DONE_STEP]: (state, {payload}) => {
    console.log(state.steps);
    console.log(payload);

    const state2 = {
      ...state,
      steps: state.steps.map(s_course => { if(s_course.stepNumber == payload) {s_course.done = true} return s_course;})
    };

    console.log(state2.steps);

    state = state2;

    console.log(state.steps);

    return state;
    // ...state,
    // steps: state.steps.map(s_course => { if(s_course.stepNumber == payload) {s_course.done = false}})
  },
  DEFAULT: state => state
};

export const courseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};