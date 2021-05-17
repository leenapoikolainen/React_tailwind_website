/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/landing"
            >
              PUUAPUA
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-green-900 bg-opacity-50 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg  " : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
              <Link
                to="/metsapalvelut" className={
                "lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                }>Metsapalvelut </Link>
              </li>

              <li className="flex items-center">
              <Link
                to="/metsapalvelut" className={
                "lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                }>Klapikone</Link>
              </li>

              <li className="flex items-center">
              <Link
                to="/metsapalvelut" className={
                "lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                }>Puun myynti</Link>
              </li>

              <li className="flex items-center">
              <Link
                to="/metsapalvelut" className={
                "lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                }>Lisatietoja</Link>
              </li>

             

              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
