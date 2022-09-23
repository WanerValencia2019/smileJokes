import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { IUser } from '../../models/users';
import { handleLogin } from './auth.actions';

import authContext from "./auth.context";

interface IAuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useLocalStorage<IUser>('user', {} as IUser)
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage('smileJokeIsAuthenticated', false)


    const login = async (email: string, password: string) => {
        const { error, user, session } = await handleLogin(email, password)

        console.log('====================================');
        console.log(error);
        console.log('====================================');
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        console.log('====================================');
        console.log(session);
        console.log('====================================');
    }


    return (
        <authContext.Provider value={{user, login, isAuthenticated}}>
        { children }
        </authContext.Provider> 
    )
}

export default AuthProvider;