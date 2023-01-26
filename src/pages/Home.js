import React,{useEffect} from "react";
import Header from "../components/Header";
import Tab from "../components/tabs/index";
import Footer from "../components/Footer";
import Store from "../Store/store";


const HOME = () => {
 
  return (
    <div>
      <Header />
      <Tab />
      <Footer/>
    </div>
  );
};
export default HOME;
