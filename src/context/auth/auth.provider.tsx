import React, { useContext } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { IUser } from '../../models/users';
import { handleLogin } from './auth.actions';
import { toast } from 'react-toastify';

import authContext from "./auth.context";
import loaderContext from '../loader/loader.context';

interface IAuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
    const [user, setUser] = useLocalStorage<IUser>('user', {} as IUser)
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage('smileJokeIsAuthenticated', false)
    const { startLoading, stopLoading } = useContext(loaderContext);


    const login = async (email: string, password: string) => {
        startLoading()
        const { error, user, session } = await handleLogin(email, password)

        if (error) {
            toast.error(error.message)
        } else {
            toast.success("Welcome")
        }

        setUser({
            email: user?.email || "",
            token: session?.access_token || "",
            refreshToken: session?.refresh_token || "",
        })

        setIsAuthenticated(true)
        stopLoading()
    }

    const logout = () => {
        startLoading()
        setIsAuthenticated(false)
        setUser({} as IUser)
        stopLoading()
    }


    return (
        <authContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;