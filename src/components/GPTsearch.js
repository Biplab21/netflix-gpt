import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMAGE } from '../utils/constants'

const GPTsearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='h-screen w-screen object-cover' src={ BG_IMAGE } alt="background image" />
      </div>
    <div className=''>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
  )
}

export default GPTsearch 