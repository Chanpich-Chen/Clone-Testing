import React from 'react'

export default function NavigationButton({ handleNext, handleBack }) {
  return (
    <div >
        <button
            type="button"
            onClick={handleBack}
            class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={handleNext}
            class="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Next
          </button>
    </div>
  )
}
