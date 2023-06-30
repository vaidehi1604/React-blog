import React, { useState } from "react";
import banner from "../assets/Images/blog10.jpeg";
const Content = () => {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Health",
    },
    {
      id: 3,
      name: "Books",
    },
    {
      id: 4,
      name: "Nature",
    },
    {
      id: 5,
      name: "Fashion",
    },
    {
      id: 6,
      name: "Cooking",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex relative justify-center flex-col">
      <div className="flex bg-fixed">
        <img src={banner} className="backdrop-invert blur-sm" />
      </div>
      <div className="flex absolute bg-white shadow-xl p-2 rounded-lg left-32 right-32 sm:left-44 sm:right-44 md:left-36 md:right-44 ">
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent"
        />
        <i className="flex p-1 text-slate-400 mr-5 absolute end-0 fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Content;
