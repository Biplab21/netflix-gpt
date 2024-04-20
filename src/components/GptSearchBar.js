import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai"
import { API_OPTIONS, GEMINI_KEY } from '../utils/constants';
import {addGptMovieResult} from "../utils/gptSlice"
import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);
// const genAI = new GoogleGenerativeAI(GEMINI_KEY);

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.language)
    const searchText = useRef(null)
    const dispatch = useDispatch()

    const handleGptSearchClick = async () => {
        // Make an api call to GPT API and get movie results
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Dunkey, Main Hoon Na"

        const gptResults = await openai.chat.completions.create({
            messages: [ { role: 'user', content: gptQuery } ],
            model: 'gpt-3.5-turbo',
        });

        console.log("gptResults", gptResults.choices);
    }

    //Search movie in TMDB
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        return json.results
    }

    const handleBardSearch = async () => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const query =
          "Act as a Movie Recommendation system and suggest some movies for the query : " +
          searchText.current.value +
          ". Only give me names of 5 Movies , comma seperated like the example result given ahead. Example Result: Veeram, Mangatha, Jilla, Viswasam";
        const result = await model.generateContent(query);
        const response = await result.response;
        const text = await response.text();
        const movies = text.split(",");
        console.log("movies", movies);
        const promise = movies.map((movie) => searchMovieTMDB(movie));
        const bardResults = await Promise.all(promise);
        console.log("bardResults", bardResults);
        dispatch(
            addGptMovieResult({movieNames: movies, movieResults:bardResults})
        );
    };

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={ (e) => e.preventDefault() }>
                <input
                    ref={ searchText }
                    type="text"
                    className='p-4 m-4 col-span-9'
                    placeholder={ lang[ langKey ].gptSearchPlaceHolder } />
                <button
                    onClick={ handleBardSearch }
                    className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                    { lang[ langKey ].search }
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar