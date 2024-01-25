import React from 'react'
import NavigationButton from './NavigationBUtton'

export default function EmergencyContact({ handleNext, handleBack }) {
  return (
    <div className="w-full">
    <form className=" py-10 ">
      <div className=" flex w-12/12 gap-x-5 ">
        <div className="mb-5 w-6/12">
        <label
              htmlFor="emergency-contact-person"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Emergency Contact Person
            </label>
            <input
              type="number"
              id="emergency-contact-person"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="012XXXXXX "
              required
            />
        </div>

        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="emergency-contact-relationship"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Emergency Contact Relationship 
            </label>
            <input
              type="number"
              id="emergency-contact-relationship"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="012XXXXXX "
              required
            />
        </div>
      </div>

     
      <div className="flex w-full gap-x-5 ">
        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="emergency-contact"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Emergency Contact
            </label>
            <input
              type="number"
              id="emergency-contact"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="012XXXXXX "
              required
            />
        </div>

        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="alter-emergency-contact"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Alter Emergency Contact
            </label>
            <input
              type="number"
              id="alter-emergency-contact"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="012XXXXXX "
              required
            />
        </div>
      </div>

      <div className="flex w-full gap-x-5 ">
        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="emergency-home-phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Emergency Home Phone
            </label>
            <input
              type="number"
              id="emergency-home-phone"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="012XXXXXX "
              required
            />
        </div>
        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="alter-emergency-home-phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Alter Emergency Home Phone
            </label>
            <input
              type="number"
              id="alter-emergency-home-phone"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="012XXXXXX "
              required
            />
        </div>
      </div>

      <div className="flex w-full gap-x-5 ">
        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="emergency-work-phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Emergency Work Phone
            </label>
            <input
              type="number"
              id="emergency-work-phone"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="012XXXXXX "
              required
            />
        </div>
        <div className="mb-5 w-6/12 ">
        <label
              htmlFor="alter-emergency-work-phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
             Alter Emergency Work Phone
            </label>
            <input
              type="number"
              id="alter-emergency-work-phone"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="012XXXXXX "
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
