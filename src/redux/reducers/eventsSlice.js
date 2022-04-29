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
        events: payload.allEventsArray,
        archive: payload.allArchiveArray,
      };
    case actionsType.clearEvents:
      return {
        ...state,
        events: [],
        archive: [],
      };
    default:
      return state;
  }
};

export { eventsReducer, fetchEvents };
