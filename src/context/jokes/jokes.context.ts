import { createContext } from "react";
import { IJoke } from "../../models/jokes";


interface IJokeContext {
    myJokes: IJoke[];
    getMyJokes: () => void;
    getNewJoke: () =>Promise<IJoke | null>;
    createJoke: (value:string, icon_url: string) =>Promise<IJoke | null>;
    removeJoke: (jokeId:string) =>Promise<string | null>;
}

export default createContext<IJokeContext>({
    myJokes: [],
    getMyJokes:  async () => null,
    getNewJoke:  async () => null,
    createJoke:  async () => null,
    removeJoke:  async () => null,
})
