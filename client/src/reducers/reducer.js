import { actions } from "../actions/useraction";

export const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return {
        ...state,
        user: action.value,
      };

    case actions.LOG_OUT:
      return {
        ...state,
        user: false,
      };

    default:
      return state;
  }
};

export default reducer;
