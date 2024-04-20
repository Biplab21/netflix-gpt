import React, { useRef } from 'react'
import "../css/movieList.css"
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    const containerRef = useRef(null);

    const handleScroll = (event) => {
        const container = containerRef.current;
        const scrollAmount = 200;
        container.scrollLeft += event.deltaY > 0 ? scrollAmount : -scrollAmount;
    };
    return (
        <div className='pt-10 bg-black overflow-hidden'>
            <h1 className="text-lg md:text-3xl py-4 text-white">{ title }</h1>
            <div
                className='flex overflow-x-scroll scrollbar-hidden'
                onWheel={ handleScroll }
                ref={ containerRef }
            >
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