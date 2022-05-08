import { collection, getDocs, getFirestore } from "firebase/firestore";
import { actionsType, setEvents } from "../actions/eventsActions";

const initialState = {
  user: "",
  events: [],
  archive: [],
};

const fetchEvents = async (dispatch, getState) => {
  const dataBase = getFirestore();
  const userId = getState().user;
  const allEvents = await getDocs(
    collection(dataBase, "users", userId, "events")
  );
  const allArchive = await getDocs(
    collection(dataBase, "users", userId, "archive")
  );
  const allEventsArray = [];
  allEvents.forEach((event) =>
    allEventsArray.push({
      ...event.data(),
      id: event.id,
      tasks: event.data().tasks.sort((a, b) => a.id - b.id),
    })
  );
  const allArchiveArray = [];
  allArchive.forEach((event) =>
    allArchiveArray.push({
      ...event.data(),
      id: event.id,
      tasks: event.data().tasks.sort((a, b) => a.id - b.id),
    })
  );
  dispatch(setEvents({ allEventsArray, allArchiveArray }));
};

const eventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsType.setUser:
      return {
        ...state,
        user: payload,
      };
    case actionsType.setEvents:
      return {
        ...state,
        events: payload.allEventsArray.sort((a, b) => a.id - b.id),
        archive: payload.allArchiveArray.sort((a, b) => a.id - b.id),
      };
    case actionsType.clearEvents:
      return {
        ...state,
        events: [],
        archive: [],
      };
    case actionsType.addEvent:
      return {
        ...state,
        events: [...state.events, payload].sort((a, b) => a.id - b.id),
      };
    case actionsType.moveToArchive:
      return {
        ...state,
        events: state.events
          .filter((event) => event.id !== payload.id)
          .sort((a, b) => a.id - b.id),
        archive: [...state.archive, payload].sort((a, b) => a.id - b.id),
      };
    case actionsType.moveToEvents:
      return {
        ...state,
        events: [...state.events, payload].sort((a, b) => a.id - b.id),
        archive: state.archive
          .filter((event) => event.id !== payload.id)
          .sort((a, b) => a.id - b.id),
      };
    case actionsType.deleteFromArchive:
      return {
        ...state,
        archive: state.archive
          .filter((event) => event.id !== payload)
          .sort((a, b) => a.id - b.id),
      };
    case actionsType.updateEventData:
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === payload.id) {
            return {
              ...event,
              [payload.variableName]: payload.value,
            };
          } else {
            return event;
          }
        }),
      };
    case actionsType.addNewTask:
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === payload.id) {
            return {
              ...event,
              tasks: [...event.tasks, payload.task],
            };
          } else {
            return event;
          }
        }),
      };
    case actionsType.setIsDoneTask:
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === payload.eventId) {
            return {
              ...event,
              tasks: event.tasks.map((task) => {
                if (task.id === payload.taskId) {
                  return payload.task;
                } else {
                  return task;
                }
              }),
            };
          } else {
            return event;
          }
        }),
      };
    default:
      return state;
  }
};

export { eventsReducer, fetchEvents };
