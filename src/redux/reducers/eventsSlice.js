import { actionsType } from "../actions/eventsActions";

const initialState = {
  user: "",
  events: [],
  archive: [],
};

const eventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsType.setUser:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export { eventsReducer };
