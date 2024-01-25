import React from "react";
import NavigationButton from "./NavigationBUtton";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//validation schema
const validationSchema = Yup.object({
  homeEmail: Yup.string().email("Invalid email address").required("Required"),
  businessEmail: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  homePhone: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  businessPhone: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  cellPhone: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
});

export default function AdditionalAddress({ handleNext, handleBack }) {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          homeEmail: "",
          cellPhone: "",
          businessPhone: "",
          homePhone: "",
          businessEmail: "",
          homeEmail: "",
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
                    htmlFor="homeEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Home Email
                  </label>
                  <Field
                    type="email"
                    id="homeEmail"
                    name="homeEmail"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Re hired date "
                  />
                  <ErrorMessage name="homeEmail">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="businessEmail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Business Email
                  </label>
                  <Field
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="email.com"
                  />
                   <ErrorMessage name="businessEmail">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
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
                  <Field
                    type="text"
                    id="homePhone"
                    name="homePhone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Re hired date "
                  />
                   <ErrorMessage name="homePhone">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="businessPhone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Business Phone
                  </label>
                  <Field
                    type="text"
                    id="businessPhone"
                    name="businessPhone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Re hired date "
                  />
                   <ErrorMessage name="businessPhone">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 ">
                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="cellPhone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Cell Phone
                  </label>
                  <Field
                    type="number"
                    id="cellPhone"
                    name="cellPhone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Re hired date "
                  />
                   <ErrorMessage name="cellPhone">
                    {(msg) => <div className="text-red-500">{msg}</div>}
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
    </div>
  );
}
