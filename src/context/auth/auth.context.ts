import { createContext } from "react";
import { IUser } from "../../models/users";

interface IAuthContext {
    user: IUser,
    isAuthenticated: boolean,
    login: (email: string, password: string) => void
    register: (email: string, password: string) =>  Promise<boolean>
    logout: () => void
}

export default createContext<IAuthContext>({
    user: {} as IUser,
    isAuthenticated: false,
    login: () => null,
    register: async () => false,
    logout: () => null
})
