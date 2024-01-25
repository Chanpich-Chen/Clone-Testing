import React from "react";
import NavigationButton from "./NavigationBUtton";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//validation schema
const validationSchema = Yup.object({
  dateOfBirth: Yup.string().required("Condition is required"),
  gender: Yup.string().required("Condition is required"),
  maritalStatus: Yup.string().required("Condition is required"),
  ethnicGroup: Yup.string().required("Condition is required"),
  sos: Yup.string().required("Condition is required"),
  workInCity: Yup.string().required("Condition is required"),
  cityOfResidence: Yup.string().required("Condition is required"),
  workPermit: Yup.string().required("Condition is required"),
});

export default function BiographicInfo({ handleNext, handleBack }) {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          dateOfBirth: "",
          gender: "",
          maritalStatus: "",
          ethnicGroup:"",
          sos: "",
          workInCity:"",
          cityOfResidence:"",
          workPermit:"",
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
                    htmlFor="dateOfBirth"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date of birth
                  </label>
                  <Field
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Re hired date "
                    required
                  />
                   <ErrorMessage name="dateOfBirth">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    for="gender"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">Male</option>
                    <option value="CA">Female</option>
                  </select>
                  <ErrorMessage name="gender">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 ">
                <div className="mb-5 w-6/12 ">
                  <label
                    for="maritalStatus"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Marital Status
                  </label>
                  <select
                    id="maritalStatus"
                    name="maritalStatus"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">Single</option>
                    <option value="CA">Married</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="maritalStatus">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    for="Ethnic"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Ethnic Group
                  </label>
                  <Field
                    type="text"
                    id="ethnicGroup"
                    name="ethnicGroup"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ethnic Group "
                    required
                  />
                    <ErrorMessage name="ethnicGroup">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
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
                  <Field
                    type="text"
                    id="sos"
                    name="sos"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Work in city "
                    required
                  />
                   <ErrorMessage name="sos">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    for="workInCity"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Work in city
                  </label>
                  <Field
                    type="text"
                    id="workInCity"
                    name="workInCity"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Work in city "
                    required
                  />
                  <ErrorMessage name="workInCity">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5  ">
                <div className="mb-5 w-6/12 ">
                  <label
                    for="cityOfResidence"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City of Residence
                  </label>
                  <select
                    id="cityOfResidence"
                    name="cityOfResidence"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">Yes</option>
                    <option value="CA">No</option>
                  </select>
                  <ErrorMessage name="cityOfResidence">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    for="workPermit"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Work Permit
                  </label>
                  <select
                    id="workPermit"
                    name="workPermit"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">Yes</option>
                    <option value="CA">No</option>
                  </select>
                  <ErrorMessage name="workPermit">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
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
      {/* <form className=" py-10 ">
     
    </form> */}
    </div>
  );
}
