import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from './AuthContext'

const PrivateRoute = ({ children }) => {
    const { Authenticated, setAuthenticated } = useContext(AuthContext)
    return Authenticated ? children : <Navigate to='/login' />;
}

export default PrivateRoute