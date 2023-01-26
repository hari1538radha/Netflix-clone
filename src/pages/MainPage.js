import React, { useEffect, useState } from "react";
import { MoviedbInfo } from "../Store/Slice/TrendingSlice";
import { TopRatedMovieInfo } from "../Store/Slice/TopRatedSlice";
import { useDispatch, useSelector } from "react-redux";
import MovieMapper from "../components/MovieMapper";
import FrontPoster from "../components/FrontPoster";
import Footer from "../components/Footer";
const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MoviedbInfo());
  }, []);
  const { MovieData, Loading } = useSelector((store) => store.movieinfo);

  
  return (
    <>
      <FrontPoster />
      <div className="bg-black gap-y-20 pl-12 pt-10">
        <p className="text-white font-medium text-3xl pb-4">Popular</p>
        <div className="flex items-center group">
          <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {Loading == false &&
              MovieData?.results.map((obj) => (
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
        <MovieMapper />
      </div>
      <Footer/>
    </>
  );
};

export default MainPage;
