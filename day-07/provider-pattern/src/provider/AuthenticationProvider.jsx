import React, { useState } from "react";
import { AuthincationContext } from "../context";
import userDetails from "../mock-data/userDetails";

const AuthincationProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const userList = userDetails;

    const login = (userEmail, userPassword) => {
        setLoggedIn(true);
        const user = userList.find(
            (user) => user.email === userEmail && user.password === userPassword
        );
        setUserData(user);
    };

    const logout = () => {
        setLoggedIn(false);
        setUserData(null);
    };

    return (
        <AuthincationContext.Provider value={{ loggedIn, login, logout, userData }}>
            {children}
        </AuthincationContext.Provider>
    );
}

export default AuthincationProvider;
