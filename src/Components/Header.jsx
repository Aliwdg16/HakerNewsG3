import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const Header = ({ onLogin, onSearchChange }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); // Aufruf der übergebenen onLogin-Funktion
    navigate("/login"); // Navigieren zur Login-Seite
  };

  const handelsearch1 =(e)=>{
      onSearchChange(e.target.value);
    
  }

  return (
    <div className="mb-0 px-6 md:w-200 bg-gray-100  flex  ">
      <div className="relative mt-4  mb-4 flex w-full flex-wrap items-stretch">
        
               
              <NavLink to='/' className="inline-block rounded  mr-1 px-6 pb-2 pt-2.5 text-xl hover:text-black  font-medium uppercase leading-normal text-black      " >
              <div className="flex flex-row"> <img className="  w-8 mr-4" src="https://wallpapercave.com/wp/wp7819542.jpg" ></img>
          Hacker News  </div>
        </NavLink>
      

        <input
          type="search"
          className="relative m-0  mb-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={handelsearch1}
        />

        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
          id="basic-addon2"
        >
          <svg
            xmlns="https://hn.algolia.com/api/v1/search?query='react'"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 cursor-pointer "
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <button
          onClick={handleLogin}
          type="button"
          className="inline-block rounded bg-blue-500 px-4 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
         SIGN UP
        </button>
      </div>
    </div>
  );
};
Header.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onsearchchange: PropTypes.func.isRequired,
};
