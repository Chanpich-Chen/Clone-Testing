import React from "react";
import NavigationButton from "./NavigationBUtton";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//validation schema

const validationSchema = Yup.object({
  medical: Yup.string().required("Medical condition is required"),
  family: Yup.string().required("Family condition is required"),
  transportation: Yup.string().required("Condition is required"),
});

export default function Benefit({ handleNext, handleBack }) {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          medical: "",
          family: "",
          transportation: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div className=" py-10">
              <div className=" flex w-12/12 gap-x-5 ">
                <div className="mb-5 w-6/12">
                  <label
                    for="medical"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Medical
                  </label>
                  <select
                    id="medical"
                    name="medical"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="medical">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    for="family"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Family
                  </label>
                  <select
                    id="family"
                    name="family"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="family">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 py-7 ">
                <div className="mb-5 w-6/12 ">
                  <label
                    for="transportation"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Transportation
                  </label>
                  <select
                    id="transportation"
                    name="transportation"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="transportation">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Other
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
              
                </div>
              </div>

              <div className="flex justify-end items-end mt-32 gap-x-2 ">
                <NavigationButton
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
