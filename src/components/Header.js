import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const user = useSelector(store => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user)
      {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }))
        navigate("/browse")
      } else
      {
        dispatch(removeUser())
        navigate("/")
        // User is signed out
      }
    });

    // Unsubscribe when component unmount
    return () => unsubscribe()
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO}
        alt="netflix logo" />
      { user && <div className='flex'>
        <img
          className='w-12 h-12'
          src={ user?.photoURL }
          alt="user icon"
        />
        <button className='p-2 m-2 font-bold text-white' onClick={ handleSignOut }>Sign Out</button>
      </div> }
    </div>
  )
}

export default Header