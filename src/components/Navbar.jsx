import React, { useState } from "react";
import { FiTwitter, FiInstagram, FiCircle } from "react-icons/fi";

const Navbar = () => {
  // links in the Navbar
  let Links = [
    { name: "Learn", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Bookmarking", link: "/" },
    { name: "UI Kit", link: "/" },
    { name: "Lain nya", link: "/" },
  ];
  // Function to toggle the Navbar
  let [openNav, setOpenNav] = useState(false);
  // Styles for the Navbar and the links
  let style = {
    container:
      "w-[95%] h-20 border-b-2 border-gray-900 flex justify-between items-center mx-auto",
    link: "text-white text-l font-bold px-3 py-3 pb- hover:text-gray-500 uppercase sm:visible invisible md:visible invisible",
    icon: "text-white text-1xl font-bold cursor-pointer bg-gradient-to-r from-pink-500 via-red-700 to-orange-500 w-8 h-8 rounded-full flex justify-center items-center pt-[2px] position-absolute-fixed m-4",
    socialMediaIcon:
      "text-white text-2xl font-bold cursor-pointer sm:visible invisible hover:bg-gradient-to-r from-pink-500 via-red-700 to-orange-500 rounded",
    socialMediaIconContainer: "flex space-x-4 ",
  };

  return (
    <div className={style.container}>
      <div className={style.icon}>D</div>
      <div>
        {Links.map((link, index) => {
          return (
            <a href={link.link} key={index} className={style.link}>
              {link.name}
            </a>
          );
        })}
      </div>
      <div className={style.socialMediaIconContainer}>
        <FiTwitter className={style.socialMediaIcon} />
        <FiInstagram className={style.socialMediaIcon} />
        <FiCircle className={style.socialMediaIcon} />
        <div>
          <div
            onClick={() => {
              setOpenNav(!openNav);
            }}
            className="text-3xl relative right-8 cursor-pointer sm:hidden"
          >
            {openNav ? "X" : "="}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
