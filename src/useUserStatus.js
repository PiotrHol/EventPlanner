import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/eventsActions";

export function useUserStatus() {
  const [checkAuth, setCheckAuth] = useState({ isLogIn: false, userId: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setCheckAuth({ isLogIn: !!user, userId: user ? user.uid : "" });
      user ? dispatch(setUser(user.uid)) : dispatch(setUser(""));
    });
    return () => unsubscribe();
  }, []);

  return checkAuth;
}
