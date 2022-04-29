const actionsType = {
  setUser: "events/setUser",
  setEvents: "events/setEvents",
  clearEvents: "events/clearEvents",
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

export { actionsType, setUser, setEvents, clearEvents };
