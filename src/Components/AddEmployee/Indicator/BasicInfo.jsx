import React, { useContext, useState } from "react";
import NavigationButton from "./NavigationBUtton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

  //validation schema 

const validationSchema = Yup.object({
  firstName: Yup.string().required("first name is Required"),
  middleName: Yup.string().required("middle name is Required"),
  lastName: Yup.string().required("last name is Required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  phone: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  city: Yup.string().required("Required"),
  attendanceTime: Yup.string().required("Required"),
  employeeType: Yup.string().required("Required"),
});

export default function BasicInfo({ handleNext, handleBack }) {

  // const handleFieldFormChange = (index, event) => {
  //   // Create a copy of the userData array
  //   let data = [...userData];

  //   // Update the specific property in the specified object
  //   data[index][event.target.name] = event.target.value;
  //   // Set the updated array in state
  //   SetUserData(data);
  //   console.log(userData);
  // };

  return (
    <div className="w-full">
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          maidenName: "",
          emailAddress: "",
          phone: "",
          alternativePhone: "",
          city: "",
          attendanceTime: "",
          employeeType: "",
        }}
        validationSchema= {validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div className=" py-10">
              <div className=" flex w-12/12 gap-x-5">
                <div className="mb-5 w-3/12">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    id="firstName"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    
                  />
                  <ErrorMessage name="firstName">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-3/12 ">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Middle Name
                  </label>
                  <Field
                    type="text"
                    name="middleName"
                    id="middleName"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Middle Name"
                  />
                  <ErrorMessage name="middleName">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-3/12">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                  />
                   <ErrorMessage name="lastName">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-3/12">
                  <label
                    htmlFor="maidenName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Maiden Name
                  </label>
                  <Field
                    type="text"
                    name="maidenName"
                    id="maidenName"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Maiden Name"
                  />
                  <ErrorMessage name="maidenName">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 py-4">
                <div className="mb-5 w-4/12 ">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="email@gmail.com"
                  />
                  <ErrorMessage name="emailAddress">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-4/12">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  <Field
                    type="number"
                    name="phone"
                    id="phone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="010XXXXXX"
                  />
                  <ErrorMessage  name="phone">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-4/12 ">
                  <label
                    htmlFor="alternativePhone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Alternative Phone
                  </label>
                  <Field
                    type="number"
                    name="alternativePhone"
                    id="alternativePhone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="010XXXXXX"
                  />
                 
                </div>
              </div>

              <div className="flex w-full gap-x-5 py-4">
                <div className="mb-5 w-4/12 ">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an option
                  </label>
                  <select
                    name="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a District</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                </div>

                <div className="mb-5 w-4/12 ">
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pnhom Penh"
                  />
                  <ErrorMessage  name="city">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                  
                </div>

                <div className="mb-5 w-4/12 ">
                  <label
                    htmlFor="attendanceTime"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Street
                  </label>
                  <Field
                    type="number"
                    name="attendanceTime"
                    id="attendanceTime"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="120101"
                  />
                   <ErrorMessage  name="attendanceTime">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 py-4 ">
                <div className="mb-5 w-4/12 ">
                  <label
                    htmlFor="attendanceTime"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Attendance Time
                  </label>
                  <Field
                    type="time"
                    name="attendanceTime"
                    id="attendanceTime"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="120101"
                  />
                  <ErrorMessage  name="attendanceTime">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-4/12 ">
                <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Employee Type
                  </label>
                  <select
                    name="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose Type</option>
                    <option value="US">Developer</option>
                    <option value="CA">Research</option>
                    <option value="FR">UX/UI</option>
                    <option value="DE">Graphic Design</option>
                  </select>
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
