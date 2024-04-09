import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [ isSignIn, setIsSignIn ] = useState(true)

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background image" />
            </div>
            <form className="absolute text-white p-12 bg-black w-1/2 mt-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
                <h1 className='font-bold text-3xl py-4'>{ isSignIn ? "Sign In" : "Sign Up" }</h1>
                { !isSignIn && <input className='p-4 my-4 w-full bg-opacity-50 bg-gray-500' type="text" placeholder='Full Name' /> }
                <input className='p-4 my-4 w-full bg-opacity-50 bg-gray-500' type="text" placeholder='Email address' />
                <input className='p-4 my-4 w-full bg-gray-500 bg-opacity-50' type="text" placeholder='Password' />
                <button className='p-4 my-6 w-full bg-red-700'>{ isSignIn ? "Sign In" : "Sign Up" }</button>
                <p className='py-4' onClick={ toggleSignInForm } >{ isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now " }</p>
            </form>
        </div>
    )
}

export default Login