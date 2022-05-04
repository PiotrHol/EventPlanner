const actionsType = {
  setUser: "events/setUser",
  setEvents: "events/setEvents",
  clearEvents: "events/clearEvents",
  addEvent: "events/addEvent",
};

const setUser = (payload) => {
  return {
    type: actionsType.setUser,
    payload,
  };
};

const setEvents = (payload) => {
  return {
    type: actionsType.setEvents,
    payload,
  };
};

const clearEvents = () => {
  return {
    type: actionsType.clearEvents,
  };
};

const addEvent = (payload) => {
  return {
    type: actionsType.addEvent,
    payload,
  };
};

export { actionsType, setUser, setEvents, clearEvents, addEvent };
