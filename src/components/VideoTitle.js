import React from 'react'

export const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 w-10 px-16 text-lg rounded-lg font-bold hover:bg-opacity-50'> Play</button>
            <button className='bg-white text-black p-4 w-10 px-16 text-lg rounded-lg font-bold hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}
