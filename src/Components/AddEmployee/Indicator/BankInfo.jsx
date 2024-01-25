import React from "react";
import NavigationButton from "./NavigationBUtton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//validation schema
const validationSchema = Yup.object({
  bankName: Yup.string()
    .trim()
    .required("Bank name is required")
    .matches(/^[a-zA-Z\s]+$/, "Invalid characters in bank name"),
  accName: Yup.string()
    .trim()
    .required("Account holder's name is required")
    .matches(/^[a-zA-Z\s']+$/, "Invalid characters in the name"),
  accNumber: Yup.string()
    .matches(
      /^[0-9]{12}$/, // Replace this with the correct regex pattern for ACLEDA account numbers
      "Invalid ACLEDA account number"
    )
    .required("Account number is required"),
  currency: Yup.string()
    .trim()
    .required("Currency is required")
    .oneOf(["riel", "usd"], "Invalid currency"),
});

export default function BankInfo({ handleNext, handleBack }) {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          bankName: "",
          accName: "",
          accNumber: "",
          currency: "",
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
                <div className="mb-5 w-3/12">
                  <label
                    htmlFor="bankName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bank Name
                  </label>
                  <Field
                    type="text"
                    name="bankName"
                    id="bankName"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bank Name"
                    
                  />
                  <ErrorMessage name="bankName">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-3/12 ">
                  <label
                    htmlFor=" accName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Account Name
                  </label>
                  <Field
                    type="text"
                    name="accName"
                    id="accName"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Account Name"
                    
                  />
                  <ErrorMessage name="accName">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-3/12">
                  <label
                    htmlFor="accNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Account Number
                  </label>
                  <Field
                    type="number"
                    name="accNumber"
                    id="accNumber"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Account Number"
                  />
                   <ErrorMessage name="accNumber">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-3/12">
                  <label
                    for="currency"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Currency
                  </label>
                  <select
                    name="currency"
                    id="currency"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose currency</option>
                    <option value="Riel">Riel</option>
                    <option value="USD">USD</option>
                  </select>
                  <ErrorMessage name="currency">
                    {(msg) => <div className="text-red-500 ">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>

              <div className="flex justify-end items-end mt-96  gap-x-2 ">
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
