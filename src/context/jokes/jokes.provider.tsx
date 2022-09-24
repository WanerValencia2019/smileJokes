import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { IJoke } from '../../models/jokes';
import authContext from '../auth/auth.context';
import { handleGetNewJoke } from './jokes.actions';
import JokesContext from './jokes.context';


interface IJokesProviderProps {
    children: React.ReactNode
}

const JokesProvider: React.FC<IJokesProviderProps> = ({ children }) => {
    const [myJokes, setMyJokes] = useState<IJoke[]>([]);
    const { user } = useContext(authContext);

    const getNewJoke = async () => {
      const response = await handleGetNewJoke(user?.token)

      if(response.status !== 200) {
        toast.error(response.data?.message)
        return  null;
      }

      const newJoke: IJoke = response.data;

      return newJoke;
    }

    return (
      <JokesContext.Provider value={{ myJokes, getNewJoke }}>
        { children}
      </JokesContext.Provider>
    )
}

export default JokesProvider;