import { AJAX_REQUEST_START, AJAX_REQUEST_END } from '../actions/app';

const initialState = false;

const callInProgress = (state = initialState, action) => {
  switch (action.type) {
    case AJAX_REQUEST_START:
      return { callInProgress: true };
    case AJAX_REQUEST_END:
      return { callInProgress: false };
    default:
      return state;
  }
};

export default callInProgress;
