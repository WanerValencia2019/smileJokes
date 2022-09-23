import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { IUser } from '../../models/users';

import authContext from "./auth.context";

interface IAuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useLocalStorage<IUser>('user', {} as IUser)
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage('smileJokeIsAuthenticated', false)


    const login = () => {

    }


    return (
        <authContext.Provider value={{user, login, isAuthenticated}}>
        { children }
        </authContext.Provider> 
    )
}

export default AuthProvider;