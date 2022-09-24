import React, { useContext, useEffect, useId, useState } from 'react'
import { toast } from 'react-toastify'
import JokeCard from '../../components/jokeCard'
import Layout from '../../components/layout'
import jokesContext from '../../context/jokes/jokes.context'
import { randomString } from '../../utils'

export default function MyJokes() {
  const { myJokes, getMyJokes, removeJoke } = useContext(jokesContext)
  const [logId, setLogId] = useState(randomString())


  useEffect(() => {
    getMyJokes();
  }, [logId])

  const handleRemoveFavoriteJoke = async (id: string) => {
    const removedJoke = await removeJoke(id)

    if (removedJoke) {
      toast.info("Joke delete successfully")
      setLogId(randomString())
    } else {
      toast.error("Joke delete failed")
    }
  }

  return (
    <Layout>
      <section className="flex flex-col  items-center pt-10  h-screen w-full mx-auto my-auto">
        <div className="flex flex-col justify-center items-center w-10/12 bg-gray-600 rounded-sm shadow-2xl p-10">
          <h1 className="text-white">My Favorite Jokes</h1>
          {
            myJokes.length > 0 ?
              myJokes.map((joke) => (
                <JokeCard
                  isFavorite={true}
                  text={joke.value}
                  removeFromFavorite={() => handleRemoveFavoriteJoke(joke.id)}
                  addToFavorite={() => null}
                />
              ))
              : <a href='/'>You don't have jokes, go to home for add</a>
          }
        </div>
      </section>
    </Layout>
  )
}
