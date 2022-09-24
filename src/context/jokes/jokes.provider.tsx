import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { IJoke } from '../../models/jokes';
import authContext from '../auth/auth.context';
import loaderContext from '../loader/loader.context';
import { handlecreateJoke, handleGetMyJokes, handleGetNewJoke, handleRemoveJoke } from './jokes.actions';
import JokesContext from './jokes.context';


interface IJokesProviderProps {
  children: React.ReactNode
}

const JokesProvider: React.FC<IJokesProviderProps> = ({ children }) => {
  const [myJokes, setMyJokes] = useState<IJoke[]>([]);
  const { user } = useContext(authContext);
  const { startLoading, stopLoading } = useContext(loaderContext);

  const getNewJoke = async () => {
    startLoading();
    const response = await handleGetNewJoke(user?.token)

    if (response.status !== 200) {
      toast.error(response.data?.message)
      return null;
    }

    const newJoke: IJoke = response.data;
    stopLoading();
    return newJoke;
  }

  const createJoke = async (value: string, icon_url: string) => {
    startLoading();
    try {

      const response = await handlecreateJoke(user?.token, value, icon_url);

      if (response.status !== 200) {
        toast.error(response.data?.message)
        stopLoading();
        return null;
      }

      const newJoke: IJoke = response.data;

      return newJoke;
    } catch (error) {
      return null;
    }
    finally {
      stopLoading();
    }
  }

  const removeJoke = async (jokeId: string) => {
    startLoading();
    try {
      const response = await handleRemoveJoke(user?.token, jokeId);

      if (response.status !== 200) {
        toast.error(response.data?.message)
        stopLoading();
        return null;
      }

      return jokeId;
    } catch (error) {
      return null;
    }
    finally {
      stopLoading();
    }
  }

  const getMyJokes = async () => {
    startLoading();
    try {
      const response = await handleGetMyJokes(user?.token)

      if (response.status !== 200) {
        toast.error(response.data?.message)
        stopLoading();
        return null;
      }

      const jokes: IJoke[] = response.data;
      setMyJokes(jokes)
    } catch (error) {
      toast.error("We can't get your jokes")
    }
    finally {
      stopLoading();
    }
  }

  return (
    <JokesContext.Provider value={{ myJokes, getNewJoke, createJoke, removeJoke, getMyJokes }}>
      {children}
    </JokesContext.Provider>
  )
}

export default JokesProvider;