import React from "react";

export const Header = () => {
  let style = {
    //   create a border bottom like the navbar
    container: " border-b-2 border-gray-900 w-[95%] mx-auto",
    text: "text-white lg:text-[10rem] font-bold text-center md:text-[7rem] sm:text-[5rem] ",
  };
  return (
    <div className={style.container}>
      <div className={style.text}>THE BLOG</div>
    </div>
  );
};
