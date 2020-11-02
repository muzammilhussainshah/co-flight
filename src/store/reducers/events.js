import Types from "../constants/auth";

var defaultState = {
  events: [],
};

var authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.setEvents: {
      let newState = Object.assign({}, state);
      newState.events = action.payload;
      return newState;
    }

    default:
      return state;
  }
};
export default authReducer;
