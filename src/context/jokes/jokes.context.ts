import { createContext } from "react";
import { IJoke } from "../../models/jokes";


interface IJokeContext {
    myJokes: IJoke[];
    getNewJoke: () =>Promise<IJoke | null>;
    createJoke: () =>Promise<IJoke | null>;
}

export default createContext<IJokeContext>({
    myJokes: [],
    getNewJoke:  async () => null,
    createJoke:  async () => null
})
