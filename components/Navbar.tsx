import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faBars);


type MenuItem = {
  url: string;
  label: string;
};

type NavbarProps = {
  logo: string;
  menu: MenuItem[];
  contactText: string;
};

const Navbar: React.FC<NavbarProps> = ({ logo, menu, contactText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4">
      <div className="flex items-center justify-between mx-10">
        <div className="flex items-center">
          {/* <img src={logo} alt="Logo" className="w-16 mr-4" /> */}
          <h1 className="text-white font-bold text-lg">RDGR</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center">
            {menu.map((item, index) => (
              <li key={index} className="mx-4">
                <a
                  href={item.url}
                  className="text-white hover:text-gray-300 font-semibold text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-white" />
          </button>
        </div>
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {contactText}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mx-10 mt-4">
          <ul className="bg-gray-800 rounded-lg">
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="block py-2 px-4 text-white font-semibold hover:bg-gray-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {contactText}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
