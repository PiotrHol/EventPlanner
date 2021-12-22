import {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export function useUserStatus() {
    const [checkAuth, setCheckAuth] = useState({isLogIn: false, userId: ""});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                setCheckAuth({isLogIn: true, userId: user.uid});
            } else {
                setCheckAuth({isLogIn: false, userId: ""});
            }
        });
        return () => unsubscribe();
    },[]);

    return checkAuth;
}