import React, { createContext, useEffect } from 'react'
import { useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [InitalValue, setInitalValue] = useState([])
    // const [user, setUser] = useState(null)
    // setInitalValue()
    useEffect(() => {
        setInitalValue([{ "taskName": "Development", "textColor": "red", "isChecked": false, strickLine: "",isEditable:false}])
        // setUser(InitalValue)
    }, [])


    return (
        <AuthContext.Provider value={{ InitalValue, setInitalValue }}>
            <div>{children}</div>
        </AuthContext.Provider>
    )
}

export default AuthProvider