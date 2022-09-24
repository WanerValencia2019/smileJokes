import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { IUser } from '../../models/users';
import { handleLogin } from './auth.actions';
import { toast } from 'react-toastify';

import authContext from "./auth.context";

interface IAuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useLocalStorage<IUser>('user', {} as IUser)
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage('smileJokeIsAuthenticated', false)


    const login = async (email: string, password: string) => {
        const { error, user, session } = await handleLogin(email, password)

        if(error) {
            toast.error(error.message)
        }else {
            toast.success("Welcome")
        }

        setUser({
            email: user?.email || "",
            token: session?.access_token || "",
            refreshToken: session?.refresh_token || "",
        })

        setIsAuthenticated(true)
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUser({} as IUser)
    }


    return (
        <authContext.Provider value={{user, login, logout, isAuthenticated}}>
        { children }
        </authContext.Provider> 
    )
}

export default AuthProvider;