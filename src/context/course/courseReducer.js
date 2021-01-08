import {ACTIVATE_COURSE} from "../types";

const handlers = {
  [ACTIVATE_COURSE]: (state, {payload}) => ({
    ...state,
    activeCourse: payload
  }),
  DEFAULT: state => state
};

export const courseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}