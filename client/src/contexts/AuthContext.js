import { useState, useEffect } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getNotifications } from "../services/service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userNotifications, setUserNotifications] = useState([]);
    const [user, setUser] = useLocalStorage('user', {});

    const logoutUserHandler = () => {
        setUser({});
    };

    const AuthUserHandler = (userData) => {
        setUser(userData);
    };

    useEffect(() => {

        if (Object.entries(user).length !== 0) {
            getNotifications(user._id)
                .then(n =>
                    setUserNotifications(n)
                );
        };
    }, [user]);

    return (
        <AuthContext.Provider value={{
            user,
            userNotifications,
            setUserNotifications,
            AuthUserHandler,
            logoutUserHandler,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
