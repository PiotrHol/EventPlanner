import {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export function useUserStatus() {
    const [checkAuth, setCheckAuth] = useState({isLogIn: false, userId: ""});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => setCheckAuth({isLogIn: !!user, userId : user ? user.uid : ""}));
        return () => unsubscribe();
    },[]);

    return checkAuth;
}