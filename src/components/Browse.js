import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../utils/hooks/usePopularMovies'
import GPTSearch from './GPTsearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  // Fetch data from TMDB API and update store
  useNowPlayingMovies()
  usePopularMovies()

  const showGPTSearch = useSelector(store => store.gpt.showGptSearch)

  return (
    <div>
      <Header />
      {
        showGPTSearch ? <GPTSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
    </div>
  )
}

export default Browse