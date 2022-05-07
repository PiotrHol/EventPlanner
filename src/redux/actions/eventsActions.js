const actionsType = {
  setUser: "events/setUser",
  setEvents: "events/setEvents",
  clearEvents: "events/clearEvents",
  addEvent: "events/addEvent",
  moveToArchive: "events/moveToArchive",
  moveToEvents: "events/moveToEvents",
  deleteFromArchive: "events/deleteFromArchive",
  updateEventData: "events/updateEventData",
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

const moveToArchive = (payload) => {
  return {
    type: actionsType.moveToArchive,
    payload,
  };
};

const moveToEvents = (payload) => {
  return {
    type: actionsType.moveToEvents,
    payload,
  };
};

const deleteFromArchive = (payload) => {
  return {
    type: actionsType.deleteFromArchive,
    payload: payload.id,
  };
};

const updateEventData = (id, variableName, value) => {
  return {
    type: actionsType.updateEventData,
    payload: { id, variableName, value },
  };
};

export {
  actionsType,
  setUser,
  setEvents,
  clearEvents,
  addEvent,
  moveToArchive,
  moveToEvents,
  deleteFromArchive,
  updateEventData,
};
