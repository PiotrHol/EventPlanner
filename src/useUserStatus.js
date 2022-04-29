import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, clearEvents } from "./redux/actions/eventsActions";

export function useUserStatus() {
  const [checkAuth, setCheckAuth] = useState({ isLogIn: false, userId: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setCheckAuth({ isLogIn: !!user, userId: user ? user.uid : "" });
      if (user) {
        dispatch(setUser(user.uid));
      }
      else {
        dispatch(setUser(""));
        dispatch(clearEvents());
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return checkAuth;
}
