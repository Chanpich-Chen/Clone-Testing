import React from "react";
import SearchFilter from "./SearchFilter";
import { Link, useNavigate } from "react-router-dom";
export default function SearchBar() {

  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mt-24 text-3xl p-8 text-[#195aab] font-semibold">
        Employee List
        {/* button add employee */}

        <button
          onClick={()=>{navigate("/steppers")}}
          type="button"
          className="px-6 py-3.5 text-base font-medium text-white bg-lightBlue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        Add Employee 
        </button>
      </div>

      {/* search bar position */}
      <div className="ml-5 flex ">
        <form className="max-w-sm px-4">
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-96 py-3 pl-12 pr-4 text-gray-500 border border-gray-300 rounded-md outline-none bg-gray-50  "
            />
          </div>
        </form>

        {/* drop down filter  */}

        <div className="inline-flex  ">
          <SearchFilter />
        </div>
      

       

      </div>
    </div>
  );
}
