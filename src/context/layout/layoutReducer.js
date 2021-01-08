import {TOGGLE_SIDEBAR} from '../types';

const handlers = {
  [TOGGLE_SIDEBAR]: state => ({...state, showSidebar: !state.showSidebar}),
  DEFAULT: state => state
};

export const layoutReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};