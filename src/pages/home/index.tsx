import React, { useContext } from 'react'
import Layout from '../../components/layout'
import { HeartIcon } from '@heroicons/react/24/outline'
import jokesContext from '../../context/jokes/jokes.context'
export default function Home() {

  const { getNewJoke } = useContext(jokesContext)


  const handleGetNewJoke = async () => {
      const joke = await getNewJoke()

      console.log(joke);
      
  }

  return (
    <Layout>
      <section className="flex flex-col  items-center pt-10  h-screen w-full mx-auto my-auto">
        <div className="flex flex-col justify-center items-center w-10/12 bg-gray-600 rounded-sm shadow-2xl p-10">
          <button onClick={handleGetNewJoke} className="p-4 bg-blue-600 rounded-sm font-medium shadow-2xl
            transition ease-in-out delay-150  hover:bg-blue-500 duration-200 text-white">
            Get New Joke!!! 
          </button>
          <article className="overflow-hidden w-8/12 mt-10 border p-3 rounded flex flex-col">
            <p className="font-light text-lg text-justify text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci maxime cumque provident tempore fugit pariatur voluptas. Commodi maiores quod molestias at! Deserunt ut explicabo officiis, quam est culpa tempore facilis!
            </p>
            <HeartIcon className="h-6 w-6 mt-2 flex self-end" aria-hidden="true" aria-label="Add to favorite" />
          </article>
        </div>
      </section>
    </Layout>
  )
}
