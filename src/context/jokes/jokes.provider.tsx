import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { IJoke } from '../../models/jokes';
import authContext from '../auth/auth.context';
import loaderContext from '../loader/loader.context';
import { handlecreateJoke, handleGetNewJoke } from './jokes.actions';
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
    const response = await handlecreateJoke(user?.token, value, icon_url);

    if (response.status !== 200) {
      toast.error(response.data?.message)
      return null;
    }

    const newJoke: IJoke = response.data;
    stopLoading();
    return newJoke;
  }

  return (
    <JokesContext.Provider value={{ myJokes, getNewJoke }}>
      {children}
    </JokesContext.Provider>
  )
}

export default JokesProvider;