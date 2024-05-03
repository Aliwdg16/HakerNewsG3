import { useState } from "react";
import Login from "./Login";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";



export const Header = ({ onsearchchange }) => {

  return (
    <nav>
      <div className="mb-4 md:w-200 bg-gray-100  flex  ">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <h4 className=" text-1xl font-bold text-left mr-2 mt-1 ">
            Hacker News
          </h4>
          <input
            type="search"
            className="relative m-0  mb-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={onsearchchange}
          />

          {/* <!--Search icon--> */}
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
        </div>

        <div>
          <NavLink to="login">Login</NavLink>
        </div>

        {/* <button
          type="button"
          className="inline-block rounded bg-primary-100 px-6 pb-1 pt-1 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
       >
         Login
        </button> */}
      </div>
    </nav>
  );
};
