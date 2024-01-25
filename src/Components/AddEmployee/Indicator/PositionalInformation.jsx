import React from "react";
import NavigationButton from "./NavigationBUtton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//validation schema
const validationSchema = Yup.object({
  subDepartment: Yup.string().required("Sub-Department is required"),
  position: Yup.string().required("position is Required"),
  dutyType: Yup.string().required("position is Required"),
  hireDate: Yup.date().required("Hire date is required"),
  joiningDate: Yup.date().required("Joining date is required"),
  terminationDate: Yup.date().nullable(),
  terminationReason: Yup.string()
    .trim()
    .required("Termination reason is required")
    .matches(/^[a-zA-Z0-9\s]+$/, "Invalid characters in termination reason"),
  voluntaryTermination: Yup.boolean().required("Termination type is required"),
  reHireDate: Yup.date().required("re hire date is required"),
  dutyType: Yup.string().required("position is Required"),
});

export default function PositionalInformation({ handleNext, handleBack }) {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          subDepartment: "",
          position: "",
          dutyType: "",
          hireDate: "",
          joiningDate: "",
          terminationDate: "",
          terminationReason: "",
          voluntaryTermination: "",
          reHireDate: "",
          dutyType: "",
          rate: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div className=" py-10">
              <div className=" flex w-12/12 gap-x-5">
                <div className="mb-5 w-6/12">
                  <label
                    for="subDepartment"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sub Department
                  </label>
                  <select
                    id="subDepartments"
                    name="subDepartment"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Department</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="subDepartment">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12">
                  <label
                    for="position"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Position
                  </label>
                  <select
                    id="position"
                    name="position"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Developer</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                </div>
              </div>

              <div className=" flex w-12/12 gap-x-5">
                <div className="mb-5 w-6/12">
                  <label
                    for="dutyType"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Duty Type
                  </label>
                  <select
                    id="dutyType"
                    name="dutyType"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a duty</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="dutyType">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="hireDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Hire Date
                  </label>
                  <input
                    type="date"
                    id="hireDate"
                    name="hireDate"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pnhom Penh"
                    
                  />
                   <ErrorMessage name="hireDate">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 py-4">
                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor=" joiningDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    joining Date
                  </label>
                  <input
                    type="date"
                    id=" joiningDate"
                    name=" joiningDate"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                   
                  />
                  <ErrorMessage name="joiningDate">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="terminationDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Termination Date
                  </label>
                  <input
                    type="date"
                    id="terminationDate"
                    name="terminationDate"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                  />
                    <ErrorMessage name="terminationDate">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 py-1 ">
                <div className="mb-5 w-full ">
                  <label
                    for="terminationReason"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Termination Reason
                  </label>
                  <textarea
                    id="terminationReason"
                    name="terminationReason"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                    <ErrorMessage name="terminationReason">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 py-2 ">
                <div className="mb-5 w-6/12">
                  <label
                    for="voluntaryTermination"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Voluntary Termination
                  </label>
                  <select
                    id="voluntaryTermination"
                    name="voluntaryTermination"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="voluntaryTermination">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="reHireDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Re Hire Date
                  </label>
                  <input
                    type="date"
                    id="reHireDate"
                    name="reHireDate"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Re hired date "
                  />
                  <ErrorMessage name="reHireDate">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 py-2 ">
                <div className="mb-5 w-6/12">
                  <label
                    for="dutyType"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Duty Type
                  </label>
                  <select
                    id="dutyType"
                    name="dutyType"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a duty</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="dutyType">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="rate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Rate
                  </label>
                  <input
                    type="number"
                    id="rate"
                    name="rate"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pnhom Penh"
                   
                  />
                </div>
              </div>

              <div className="flex justify-end gap-x-2 mt-5 ">
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
