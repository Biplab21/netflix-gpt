import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const user = useSelector(store => store.user)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix logo" />
      { user && <div className='flex'>
        <img
          className='w-12 h-12'
          src={ user?.photoURL }
          alt="user icon"
        />
        <button className='p-2 m-2 font-bold text-white' onClick={ handleSignOut }>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header