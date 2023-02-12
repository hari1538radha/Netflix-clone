import React, { useEffect } from "react";
import { TopRatedMovieInfo } from "../Store/Slice/TopRatedSlice";
import { useDispatch, useSelector } from "react-redux";
import { upcominginfo } from "../Store/Slice/UpcomingSLice";
import { HorrorMovieInfo } from "../Store/Slice/HorrorSlice";
import { NetflixOriginalInfo } from "../Store/Slice/NetflixOriginal";
const TopRatedMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      TopRatedMovieInfo(
        `top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=5`
      )
    );
    dispatch(
      upcominginfo(
        `upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
    );
    dispatch(
      HorrorMovieInfo(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=horror&page=2&include_adult=false`
      )
    );
    dispatch(
      NetflixOriginalInfo(
        `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
      )
    );
  }, []);
  const { TopMoviedata, TopmovieLoading } = useSelector(
    (store) => store.TopMovieinfo
  );
  const { UpcommingmovieData, upcommingmovieLoading } = useSelector(
    (store) => store.upcominginfo
  );
  const { HorrorMovieData, HorrorMovieloading } = useSelector(
    (store) => store.horrormovieinfo
  );
  const { NetflixOriginalData, NetflixorgonalLoading } = useSelector(
    (store) => store.netflixoriginalinfo
  );
  
  return (
    <div>
      <p className="text-white font-medium pt-10 pb-4 text-3xl">Netflix Originals</p>
      <div className="flex items-center group  pb-10">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {NetflixorgonalLoading == false &&
            NetflixOriginalData?.results.map((obj) => (
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
      <p className="text-white font-medium text-3xl pb-4">Top movies</p>
      <div id="section-1" className="flex items-center group pb-10">
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
      <p className="text-white font-medium text-3xl pb-4">Upcomming Movies</p>
      <div className="flex items-center group pb-10">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {upcommingmovieLoading == false &&
            UpcommingmovieData?.results.map((obj) => (
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
      <p className="text-white font-medium text-3xl">Horror Movies</p>
      <div className="flex items-center group pb-10">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {HorrorMovieloading == false &&
            HorrorMovieData?.results.map((obj) => (
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
  );
};

export default TopRatedMovie;
