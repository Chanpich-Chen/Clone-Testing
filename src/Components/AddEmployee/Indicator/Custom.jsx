import React from "react";
import NavigationButton from "./NavigationBUtton";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//validation schema
const validationSchema = Yup.object({
  customFieldName: Yup.string().required(" Required"),
  customFieldType: Yup.string().required(" Required"),
  customValue:Yup.string().required(" Required"),
});

export default function Custom({ handleNext, handleBack }) {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          customFieldName: "",
          customFieldType: "",
          customValue: "",
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
                    htmlFor="custom-field-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Custom Field Name
                  </label>
                  <Field
                    type="name"
                    id="customFieldName"
                    name="customFieldName"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Shin Chang "
                  />
                   <ErrorMessage name="customFieldName">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    for="customFieldType"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Custom Field Type
                  </label>
                  <select
                    id="customFieldType"
                    name="customFieldType"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Options</option>
                    <option value="US">United States</option>
                    <option value="CA">Cambodia</option>
                    <option value="FR">France</option>
                    <option value="DE">China</option>
                  </select>
                  <ErrorMessage name="customFieldType">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex w-full gap-x-5 ">
                <div className="mb-5 w-full ">
                  <label
                    htmlFor="customValue"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Custom Value
                  </label>
                  <Field
                    type="text"
                    id="customValue"
                    name="customValue"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                  />
                  <ErrorMessage name="customValue">
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
