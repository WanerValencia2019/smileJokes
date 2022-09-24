import React, { useContext, useState } from 'react'
import Layout from '../../components/layout'
import { HeartIcon } from '@heroicons/react/24/outline'
import jokesContext from '../../context/jokes/jokes.context'
import { IJoke } from '../../models/jokes'
import { toast } from 'react-toastify'
export default function Home() {
  const [newJoke, setNewJoke] = useState<IJoke | null>(null)
  const [favorite, setFavorite] = useState(false);
  const { getNewJoke } = useContext(jokesContext)


  const handleGetNewJoke = async () => {
    const joke = await getNewJoke()

    if (!joke) {
      toast.error("Sorry, we can't get a new joke")
    } else {
      setNewJoke(joke)
    }
  }

  const handleAddFavoriteJoke = () => {
    console.log('====================================');
    console.log("AGREGANDO");
    console.log('====================================');
  }

  const handleRemoveFavoriteJoke = () => {
    console.log('====================================');
    console.log("REMOVIENDO");
    console.log('====================================');
  }

  const handleChangeFavoritedSelection = () => {
    if (!favorite && newJoke) {
      setFavorite(true);
    }

    if (favorite && newJoke) {
      setFavorite(false);
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
            <article className="overflow-hidden w-8/12 mt-10 border p-3 rounded flex flex-col">
              <p className="font-light text-2xl text-justify text-white">
                {newJoke?.value}
              </p>
              <HeartIcon className="h-8 w-8 mt-2 flex self-end cursor-pointer hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-hidden="true" aria-label="Add to favorite" />
            </article>
          }
        </div>
      </section>
    </Layout>
  )
}
