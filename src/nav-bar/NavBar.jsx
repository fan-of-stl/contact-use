import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const MenuIcons = ({ open, onClick }) => {
  return (
    <FontAwesomeIcon
      className="text-2xl cursor-pointer md:hidden"
      icon={open ? faXmark : faBars}
      onClick={onClick}
    />
  );
};

const NavBar = () => {
  let links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevValue) => !prevValue);
  };

  return (
    <nav className="flex justify-between items-center w-[90%]  mx-auto bg-white px-2 py-2">
      <div className="brand-image ">
        <img
          src="/images/Frame 2 1.png"
          alt=""
          className="object-cover h-12 w-12"
        />
      </div>

      <div className="nav-links flex flex-row gap-4">
        <div
          className={`md:static duration-500 md:duration-500 absolute bg-white md:min-h-fit min-h-[30vh] left-0 ${
            open ? "top-[8.4%]" : "top-[-100%]"
          } md:w-auto w-full flex md:flex-col flex-row items-center px-5`}
        >
          <ul className="flex md:gap-10 gap-8 md:flex-row flex-col">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="buttons">
          <MenuIcons open={open} onClick={handleClick} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
