import React, { useEffect } from "react";
import search from "../images/find.png"
import notification from "../images/bell.png";
import profile from "../images/user.png";

const Navbar = () => {
    const handleClickScroll = () => {
       
        const element = document.getElementById("section-1");
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
   
return (
    <div className="z-50 pt-8  flex justify-between pb-10 items-center">
      <div className="flex">
        <img
          className="w-20 h-6 mr-10"
          src="https://i.ibb.co/r5krrdz/logo.png"
          alt="logoimg"
        ></img>
        <div className="gap-x-6 flex text-2xl text-white">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a onClick={handleClickScroll}>TV shows</a>
          </div>
          <div>
            <a value="section-1">Movies</a>
          </div>
          <div>
            <a>Popular</a>
          </div>
        </div>
      </div>
      <div className="flex pr-12 ">
        <img className="w-8 mr-4" src={search}>
        </img>
        <img className="w-8 mr-4"  src={notification}></img>
        <img className="w-8 mr-4"  src={profile}></img>
      </div>
    </div>
  );
};

export default Navbar;
