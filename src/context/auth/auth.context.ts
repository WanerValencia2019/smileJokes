import { createContext } from "react";
import { IUser } from "../../models/users";

interface IAuthContext {
    user: IUser,
    isAuthenticated: boolean,
    login: () => void
}

export default createContext<IAuthContext>({
    user: {} as IUser,
    isAuthenticated: false,
    login: () => null,
})
