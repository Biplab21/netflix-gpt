import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMAGE } from '../utils/constants'

const GPTsearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={ BG_IMAGE } alt="background image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GPTsearch 