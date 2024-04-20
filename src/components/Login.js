import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice';
import { BG_IMAGE, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [ isSignIn, setIsSignIn ] = useState(true)
    const [ errorMessage, setErrorMessage ] = useState("")
    const dispatch = useDispatch()

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn)
    }

    const handleButtonClick = (e) => {

        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)

        if (message) return

        if (!isSignIn)
        {
            //Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: USER_AVATAR
                      }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL}))
                      }).catch((error) => {
                        setErrorMessage(error.message)
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        } else
        {
            //Sign in logic
            signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='h-screen object-cover' src={BG_IMAGE} alt="background image" />
            </div>
            <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80" onSubmit={ e => e.preventDefault() }>
                <h1 className='font-bold text-3xl py-4'>{ isSignIn ? "Sign In" : "Sign Up" }</h1>
                { !isSignIn && <input ref={name} className='p-4 my-4 w-full bg-gray-700' type="text" placeholder='Full Name' /> }
                <input
                    className='p-4 my-4 w-full bg-gray-700'
                    type="text"
                    ref={ email }
                    placeholder='Email address' />
                <input
                    className='p-4 my-4 w-full bg-gray-700'
                    type="password"
                    ref={ password }
                    placeholder='Password' />
                <p className='text-red-500 font-bold text-lg py-2'>{ errorMessage }</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={ handleButtonClick }>{ isSignIn ? "Sign In" : "Sign Up" }</button>
                <p className='py-4 cursor-pointer' onClick={ toggleSignInForm } >{ isSignIn ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now " }</p>
            </form>
        </div>
    )
}

export default Login