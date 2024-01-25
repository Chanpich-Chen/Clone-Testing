import React from 'react'
import NavigationButton from './NavigationBUtton'

export default function AdditionalAddress({ handleNext, handleBack }) {
  return (
    <div className="w-full">
    <form className=" py-10 ">
      <div className=" flex w-12/12 gap-x-5 ">
        <div className="mb-5 w-6/12">
        <label
              htmlFor="homeemail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Home Email
            </label>
            <input
              type="email"
              id="homeemail"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Re hired date "
              required
            />
        </div>

        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="businessemail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Business Email
            </label>
            <input
              type="email"
              id="businessemail"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Re hired date "
              required
            />
        </div>


        

       
      </div>

     
      <div className="flex w-full gap-x-5 ">
        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="businessemail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Home Phone
            </label>
            <input
              type="number"
              id="homenumber"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Re hired date "
              required
            />
        </div>

        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="businessnumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Business Phone
            </label>
            <input
              type="number"
              id="businessnumber"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Re hired date "
              required
            />
        </div>
      </div>

      <div className="flex w-full gap-x-5 ">
        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="cellphone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Cell Phone
            </label>
            <input
              type="number"
              id="cellphone"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Re hired date "
              required
            />
        </div>

        
      </div>

      

      <div className="flex justify-end items-end mt-32 gap-x-2 ">
        <NavigationButton handleNext={handleNext} handleBack={handleBack} />
      </div>
    </form>
  </div>
  )
}
