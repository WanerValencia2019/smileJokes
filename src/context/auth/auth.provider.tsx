import React, { useContext } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';
import { IUser } from '../../models/users';
import { handleLogin, handleRegister } from './auth.actions';
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

        try {
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
        } catch (error) {
            toast.error("Error, contact administrator")
        }
        finally {
            stopLoading()
        }
    }

    const register = async (email: string, password: string) => {
        startLoading()
        try {
            const { error } = await handleRegister(email, password)

            if (error) {
                toast.error(error.message)
                return false
            } else {
                toast.success("Review your email address and confirm your account")
                return true
            }

        } catch (err) {
            toast.error("Error processing email")
            return false
        } finally {
            stopLoading()
        }
    }

    const logout = () => {
        startLoading()
        setIsAuthenticated(false)
        setUser({} as IUser)
        stopLoading()
    }


    return (
        <authContext.Provider value={{ user, login, logout, isAuthenticated, register }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;