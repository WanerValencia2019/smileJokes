import React, { useContext, useState } from 'react'
import Layout from '../../components/layout'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

import jokesContext from '../../context/jokes/jokes.context'
import { IJoke } from '../../models/jokes'
import { toast } from 'react-toastify'
import JokeCard from '../../components/jokeCard'



export default function Home() {
  const [newJoke, setNewJoke] = useState<IJoke | null>(null)
  const [favorite, setFavorite] = useState(false);
  const { getNewJoke, createJoke, removeJoke } = useContext(jokesContext)


  const handleGetNewJoke = async () => {
    setFavorite(false);
    setNewJoke(null);

    const joke = await getNewJoke()

    if (!joke) {
      toast.error("Sorry, we can't get a new joke")
    } else {
      setNewJoke(joke)
    }
  }

  const handleAddFavoriteJoke = async () => {
    const createdJoke = await createJoke(newJoke?.value || "", newJoke?.icon_url || "")
    if (createdJoke) {
      setNewJoke(createdJoke)
      toast.success("Added to favorites")
      setFavorite(true);
    } else {
      toast.error("Error, you can't add to favorites")
    }
  }

  const handleRemoveFavoriteJoke = async () => {
    const removedJoke = await removeJoke(newJoke?.id || "")

    if (removedJoke) {
      toast.info("Joke delete successfully")
      setFavorite(false);
    } else {
      toast.error("Joke delete failed")
    }
  }

  const handleChangeFavoritedSelection = () => {
    if (!favorite && newJoke) {
      handleAddFavoriteJoke();
    }

    if (favorite && newJoke) {
      handleRemoveFavoriteJoke()
    }
  }

  return (
    <Layout>
      <section className="flex flex-col  items-center pt-10  h-screen w-full mx-auto my-auto">
        <div className="flex flex-col justify-center items-center w-10/12 bg-gray-600 rounded-sm shadow-2xl p-10">
          <button onClick={handleGetNewJoke} className="p-4 bg-blue-600 rounded-sm font-medium shadow-2xl
            transition ease-in-out delay-150  hover:bg-blue-500 duration-200 text-white">
            Get New Joke!!!
          </button>
          {
            newJoke &&
            <JokeCard
              isFavorite={favorite}
              text={newJoke.value}
              removeFromFavorite={handleChangeFavoritedSelection}
              addToFavorite={handleChangeFavoritedSelection}
            />
          }
        </div>
      </section>
    </Layout>
  )
}
