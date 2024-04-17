import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='pt-10 bg-black overflow-hidden'>
            <h1 className="text-2xl py-4 text-white">{ title }</h1>
            <div className='flex overflow-x-auto'>
                <div className='flex'>
                    { movies?.map((movie) => (
                        <MovieCard key={ movie.id } posterPath={ movie.poster_path } />
                    )) }
                </div>
            </div>
        </div>
    )
}

export default MovieList