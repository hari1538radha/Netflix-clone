import React, { useEffect } from "react";
import { MoviedbInfo } from "../Store/Slice/RequestSlice";
import { useDispatch, useSelector } from "react-redux";
const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MoviedbInfo());
  }, []);
  const { MovieData, Loading } = useSelector((store) => store.movieinfo);
  // console.log(MovieData?.results[0].poster_path)
  console.log(Loading);
  return (
    <div className="">
      <h2 className="">Trending now</h2>

      <div className="flex  gap-x-2 overflow-x-scroll">
        {Loading == false &&
          MovieData?.results.map((obj) => (
            <div className=" flex  w-auto">
              {/* <p>{obj?.title}</p> */}
              <img
                className=" h-24 w-52 "
                src={`https://image.tmdb.org/t/p/original${obj?.poster_path}`}
              ></img>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainPage;
