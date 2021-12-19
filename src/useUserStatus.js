import {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export function useUserStatus() {
    const [isLogIn, setIsLogIn] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                setUserId(user.uid);
                setIsLogIn(true);
            } else {
                setUserId("");
                setIsLogIn(false);
            }
        });
        return () => unsubscribe();
    },[]);

    return {
        isLogIn,
        userId
    }
}