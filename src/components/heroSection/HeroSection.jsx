import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import "./heroimage.css";
import { useTypewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa6";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;
  const [text] = useTypewriter({
    words: ['code', 'tech', 'Blogs','learn'],
    loop: 0
  })
  return (
    <section >
      <div style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#ececec" ,  color: mode === "dark" ? "white" : "black"  }} className="flex justify-around items-center py-10 lg:py-0 border-y border-black xl:border-hidden ">
      {/* Hero content */}
      
          <div className="px-10 space-y-5 lg:py-6">
        <h1 className=" text-6xl md:text-7xl max-w-xl font-rohit w-11/12 sm:w-9/12">
          <span className="underline decoration-red-500 decoration-4 font-avi">
            Coderox
          </span> {" "}
           is {" "}all about <br></br>:{" "}<span className="font-sfs">{text}</span>
        </h1>
        <h2 className="w-9/12 font-avi">
          Read various articles on coding,latest technology ,get free content and many more
        </h2>
        <button onClick={()=> navigate('/allblogs')} className="flex border gap-2 border-black  px-4 py-2 rounded-full font-rohit active:scale-90  bg-red-600 text-white group transition-all duration-300 ease-in-out" >                         
          <span>Explore </span><FaArrowRight className="my-auto hidden group-hover:block"/>
        </button>
      </div>
      {/* Hero image */}
      <img
        className="hidden sm:inline-flex h-40 lg:h-80 xl:h-full"
        src="https://imgur.com/BVDaRBZ"
        alt=""
      />
    </div>
    </section>
  );
}

export default HeroSection;
