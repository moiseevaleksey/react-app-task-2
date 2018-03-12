import { CLEAR_USER, SET_USER } from "actions/user";

const initialState = {};

const user = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_USER:
      return {};
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};

export default user;
