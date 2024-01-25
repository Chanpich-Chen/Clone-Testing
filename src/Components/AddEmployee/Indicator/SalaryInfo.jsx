import React from "react";
import NavigationButton from "./NavigationBUtton";

export default function SalaryInfo({ handleNext, handleBack }) {
  return (
    <div className="w-full">
      <form className=" py-10 ">
        <div className="text-base font-semibold mb-7 underline underline-offset-4 ">
          Salary Information
        </div>
        <div className=" flex w-12/12 gap-x-5 mb-6">
          <div className="mb-5 w-4/12">
            <label
              htmlFor="Basic"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Basic
            </label>
            <input
              type="number"
              id="Basic"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="4463157"
              required
            />
          </div>

          <div className="mb-5 w-4/12 ">
            <label
              htmlFor="transportallowance"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Transport Allowance
            </label>
            <input
              type="number"
              id="transportallowance"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="2587453"
              required
            />
          </div>

          <div className="mb-5 w-4/12">
            <label
              htmlFor="grosssalary"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Gross Salary
            </label>
            <input
              type="number"
              id="grosssalary"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="548411"
              required
            />
          </div>
        </div>

        <div className="text-base font-semibold  underline underline-offset-4 ">
          Tax Information
        </div>
        <div className="flex w-full gap-x-5 py-7 ">
          <div className="mb-5 w-4/12 ">
            <label
              htmlFor="tinno"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              TIN No
            </label>
            <input
              type="number"
              id="tinno"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="120101"
              required
            />
          </div>
        </div>

        <div className="flex justify-end items-end mt-32 gap-x-2 ">
          <NavigationButton handleNext={handleNext} handleBack={handleBack} />
        </div>
      </form>
    </div>
  );
}
