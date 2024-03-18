import React from "react";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  return (
    <div id="home" className="bg-blue-500 text-white items-center overflow-hidden">
      <div className="sm:container mx-auto px-6 sm:flex sm:flex-row flex-col py-16">
        <div className="sm:w-2/3 lg:w-3/6 flex flex-col">
          <span className="w-20 h-2 bg-white md:mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none">
            Live with
            <span className="text-5xl sm:text-7xl">Nature</span>
          </h1>
          <p className="text-sm sm:text-base">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          <div className="flex mt-8">
            <HashLink
              to="/home#services"
              className="uppercase py-2 px-4 rounded-lg bg-white border-2 border-transparent text-blue-500 text-md mr-4 hover:bg-gray-200"
            >
              Get started
            </HashLink>
            <HashLink
              to="/home#features"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-500 text-md"
            >
              Read more
            </HashLink>
          </div>
        </div>

        <div className="hidden sm:block sm:w-1/3 lg:w-3/6 ">
          <img
            src="/banner.png"
            alt="banner"
            className="max-w-xs md:max-w-lg m-auto"
          />
        </div>
        <div className="sm:hidden flex justify-center items-center my-4">
          <img src="/banner.png" alt="banner" className="max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
