import React from 'react'
import { useSelector } from 'react-redux'


const More = () => {
  const movies = useSelector((state) => state)
  var currunt = movies.movie.slice(-1)
  console.log(currunt)
  const Movie = {...currunt}
  console.log(Movie[0])
  return (
    // <div>
    //   {/* {
    //     currunt.map((item)=>{
    //       <img src={item.show.image.medium} alt="" />

    //     }) */}
    //     {
    //     <img src={Movie[0].show.image.medium} alt="" />
        
    //   }

    // </div>



    <div className='h-[250vh] flex flex-col py-10 px-20  w-full bg-gradient-to-t from-gray-800 to-gray-600 space-y-20  items-center md:flex-row md:h-screen  md:space-y-0 md:space-x-16' >
        <div className='bg-gray-900 rounded-md shadow-black shadow-md'>
            <img src={Movie[0].show.image.original} className='w-96 rounded-md p-5' alt="" />

        </div>
        <div className='bg-gradient-to-r from-slate-300 to-slate-500 w-full p-12 rounded-md md:h-1/2'>
          <div className='flex flex-col space-y-4'>
          <h1 className='text-6xl moviename'>{Movie[0].show.name}</h1>
          <p>{Movie[0].show.summary} </p> 
          <p className='3xl moviename'>Genres: {Movie[0].show.genres[0]}</p>
          <p className='3xl moviename'>Genres: {Movie[0].show.language}</p>

          </div>

        </div>

    </div>
  )
}

export default More