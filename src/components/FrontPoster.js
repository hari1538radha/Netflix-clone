import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { NetflixOriginalInfo } from "../Store/Slice/NetflixOriginal";
const FrontPoster = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      NetflixOriginalInfo(
        `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
      )
    );
  }, []);
  const { NetflixOriginalData, NetflixorgonalLoading } = useSelector(
    (store) => store.netflixoriginalinfo
  );
  let x = Math.floor(Math.random() * 20 + 1);
  console.log(x);

  return (
    NetflixorgonalLoading == false && (
      <div
        className="h-[800px] pl-12 bg-center  brightness-75 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${
            NetflixOriginalData?.results[`${x}`]?.backdrop_path
          })`,
        }}
      >
        <Navbar />

        <div className=" brightness-200 text-white">
          <h1 className="text-[100px] font-bold ">
            {NetflixOriginalData?.results[`${x}`].original_name}
          </h1>
          <h2 className="text-3xl font-bold pb-5">
            Netflix Originals Released on{" "}
            {NetflixOriginalData?.results[0].first_air_date}
          </h2>
          <p className="text-4xl w-2/5">
            {NetflixOriginalData?.results[`${x}`].overview}
          </p>
        </div>
      </div>
    )
  );
};

export default FrontPoster;
