//import React from 'react'
import { createContext, useState } from "react";
import RequireAuth from "../../common/RequireAuth";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const userInfo = localStorage.getItem('userInfo');
    const [user, setUser] = useState(userInfo);

    const login = (user) =>{
        setUser(user)
    }
    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{ 
            user,
            login,
            logout
         }}>
            {children}
        </AuthContext.Provider>
    )
}

