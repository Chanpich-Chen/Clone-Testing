import React from 'react'
import NavigationButton from './NavigationBUtton'

export default function BiographicInfo({ handleNext, handleBack }) {
  return (
    <div className="w-full">
    <form className=" py-10 ">
      <div className=" flex w-12/12 gap-x-5 ">
        <div className="mb-5 w-6/12">
        <label
              htmlFor="dob"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of birth
            </label>
            <input
              type="date"
              id="dob"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Re hired date "
              required
            />
        </div>

        <div className="mb-5 w-6/12 ">
        <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Gender
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select Options</option>
              <option value="US">Male</option>
              <option value="CA">Female</option>
            </select>
        </div>


        

       
      </div>

     
      <div className="flex w-full gap-x-5 ">
        <div className="mb-5 w-6/12 ">
        <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Marital Status
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select Options</option>
              <option value="US">Single</option>
              <option value="CA">Married</option>
              <option value="FR">France</option>
              <option value="DE">China</option>
            </select>
        </div>

        <div className="mb-5 w-6/12 ">
        <label
              for="Ethnic"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ethnic Group
            </label>
            <input
              type="text"
              id="Ethnic"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ethnic Group "
              required
            />
        </div>
      </div>

      <div className="flex w-full gap-x-5 ">
        <div className="mb-5 w-6/12 ">
        <label
              for="sos"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              SOS
            </label>
            <input
              type="text"
              id="sos"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Work in city "
              required
            />
        </div>

        <div className="mb-5 w-6/12 ">
        <label
              for="work"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Work in city
            </label>
            <input
              type="text"
              id="work"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Work in city "
              required
            />
        </div>
      </div>

      <div className="flex w-full gap-x-5  ">
        <div className="mb-5 w-6/12 ">
        <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City of Residence
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select Options</option>
              <option value="US">Yes</option>
              <option value="CA">No</option>
            </select>
        </div>

        <div className="mb-5 w-6/12 ">
        <label
              for="workpermit"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Work Permit
            </label>
            <select
              id="workpermit"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select Options</option>
              <option value="US">Yes</option>
              <option value="CA">No</option>
            </select>
        </div>
      </div>

      <div className="flex justify-end items-end mt-32 gap-x-2 ">
        <NavigationButton handleNext={handleNext} handleBack={handleBack} />
      </div>
    </form>
  </div>
  )
}
