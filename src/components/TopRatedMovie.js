import React, { useEffect } from "react";
import {TopRatedMovieInfo} from "../Store/Slice/TopRatedSlice";
import { useDispatch, useSelector } from "react-redux";
const TopRatedMovie = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(TopRatedMovieInfo());
    }, []);
    const { TopMoviedata, TopmovieLoading } = useSelector((store) => store.TopMovieinfo);
  return (
    <div>
         <p>Top movies</p>
      <div className="flex items-center group">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {TopmovieLoading == false &&
            TopMoviedata?.results.map((obj) => (
              <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${obj?.backdrop_path}`}
                  alt={obj?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {obj?.title}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TopRatedMovie