import React from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

interface IJokeCard {
    isFavorite: boolean;
    text: string;
    addToFavorite: () => void;
    removeFromFavorite: () => void;
}

export default function JokeCard({ isFavorite, addToFavorite, removeFromFavorite, text }:IJokeCard) {
  return (
    <article className="overflow-hidden md:w-8/12 sm:w-10/12 mt-10 border p-3 rounded flex flex-col">
    <p className="font-light md:text-2xl sm:text-lg text-justify text-white">
      {text}
    </p>
    {
      !isFavorite ?
        <HeartIcon
          onClick={addToFavorite}
          className="h-8 w-8 mt-2 flex self-end cursor-pointer
        hover:text-white focus:outline-none focus:ring-2 focus:ring-white 
          focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-hidden="true"
          aria-label="Add to favorite"
        />
        :
        <HeartIconSolid
          onClick={removeFromFavorite}
          color='red'
          className="h-8 w-8 mt-2 flex self-end 
           cursor-pointer focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-hidden="true"
          aria-label="Add to favorite"
        />
    }
  </article>
  )
}
