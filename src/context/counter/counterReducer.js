import { INCREMENT, RESET } from "./counterType";

export const counterReset = () => {
  return counterInitialState;
};

export const counterInitialState = { count: 1 };

export const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case RESET:
      return counterReset();

    default:
      return state;
  }
};
