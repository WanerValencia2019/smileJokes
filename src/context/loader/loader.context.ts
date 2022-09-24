import { createContext } from "react";
import { IJoke } from "../../models/jokes";


interface ILoaderContext {
    loading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}

export default createContext<ILoaderContext>({
    loading: false,
    startLoading: () => null,
    stopLoading: () => null,
})
