import React, { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import api from '../api';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [Authenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState([])

    function handleAuth(){
        const token = localStorage.getItem("access")
        if (token) {
            const decoded = jwtDecode(token)
            const expiry_date = decoded.exp
            const current_time = Date.now() / 1000
            if (expiry_date > current_time){
                setAuthenticated(true)
            } else {
                refreshToken();
            }
        }
    }

    function refreshToken(){
        const refreshToken = localStorage.getItem("refresh")
        api.post('api/user/auth/token/refresh/', {refresh: refreshToken})
        .then(res => {
            if (res.status === 200) {
                localStorage.setItem("access", res.data.access)
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
            }
        })
        .catch(err => {
            console.log(err.message)
            setAuthenticated(false)
        })
    }

    function get_user() {
        if(Authenticated){
            api.get('api/user/')
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
        }
        
    }

    useEffect(() => {
        handleAuth()
        get_user()        
    }, [Authenticated])

    const authValue = {Authenticated, user, setAuthenticated, get_user, refreshToken}

    return (
        <AuthContext.Provider value={authValue} >
            {children}
        </AuthContext.Provider>
    )
}