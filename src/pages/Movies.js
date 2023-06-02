import React, { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import { addMovie } from '../store/movieSlice';
import { useDispatch } from 'react-redux';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";


const Movies = () => {
    const [movie, setMovie] = useState([])
    const dispatch = useDispatch()
    //  Api Fatching
    useEffect(() => {
        const fetchMovie = async () => {
            try {

                const data = await fetch(`https://api.tvmaze.com/search/shows?q=all`)
                const res = await data.json()

                setMovie(res)
                // console.log(res[0].show);

            }
            catch (err) {
                console.log(err);
            }

        }
        fetchMovie()
    }, [])

    const handleMovie = (movieShow)=>{
        dispatch(addMovie(movieShow))

    }


    return (
        <>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                
                {movie.map((item, i) => {
                    return (
                        <SwiperSlide><div className='w-full h-full bg-gradient-to-t from-gray-800 to-gray-600'><img src={item.show.image.original} className='w-full h-[80vh] rounded-xl  object-contain' alt="" /></div></SwiperSlide>

                    )
                })}
            </Swiper>
            <div className='h-[300vh] bg-gradient-to-t from-gray-800 to-gray-600 md:h-[120vh]'>
                <div className='  grid    h-full w-full items-start md:grid-cols-5 '>
                    {movie.map((item, i) => {
                        
                        return (
                            <div key={i} className=' flex items-center space-x-4 justify-start  md:flex-col md:mx-auto md:my-auto md:justify-center md:space-y-3'>
                                {<img src={item.show.image.medium} className='w-32 md:w-52' alt="" />}

                                {<p className='text-white mt-2 text-lg '>{item.show.name}</p>}
                                {<p className='text-white mt-2 hidden md:block'>Language: {item.show.language}</p>}
                                <Link to='/movie' onClick={()=>handleMovie(item)}  className='text-white bg-red-500 px-6 py-2 rounded-lg'>Show More</Link>
                            </div>
                        )

                    })}
                </div>



            </div>
        </>


    )
}

export default Movies