import React from "react";
import NavigationButton from "./NavigationBUtton";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//validation schema

const validationSchema = Yup.object({
  emergencyContactPerson: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  emergencyContactRelationship: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  emergencyContact: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  alterEmergencyContact:Yup.string()
  .matches(
    /^(?:\+855|0)\d{8,9}$/,
    "Invalid phone number. Please use the Cambodian phone number format."
  )
  .required("Required"),
  emergencyHomePhone: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  alterEmergencyHomePhone:Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  emergencyWorkPhone: Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  alterEmergencyWorkPhone:Yup.string()
    .matches(
      /^(?:\+855|0)\d{8,9}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
});

export default function EmergencyContact({ handleNext, handleBack }) {
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          emergencyContactPerson: "",
          emergencyContactRelationship: "",
          emergencyContact: "",
          alterEmergencyContact: "",
          emergencyHomePhone: "",
          alterEmergencyHomePhone: "",
          emergencyWorkPhone: "",
          alterEmergencyWorkPhone: "",
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
                    htmlFor="emergencyContactPerson"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Emergency Contact Person
                  </label>
                  <Field
                    type="text"
                    id="emergencyContactPerson"
                    name="emergencyContactPerson"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                  />
                   <ErrorMessage name="emergencyContactPerson">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="emergency-contact-relationship"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Emergency Contact Relationship
                  </label>
                  <Field
                    type="text"
                    id="emergencyContactRelationship"
                    name="emergencyContactRelationship"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                   
                  />
                   <ErrorMessage name="emergencyContactRelationship">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
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
                  <Field
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                    
                  />
                  <ErrorMessage name="emergencyContact">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="alter-emergency-contact"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Alter Emergency Contact
                  </label>
                  <Field
                    type="text"
                    id="alterEmergencyContact"
                    name="alterEmergencyContact"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                  
                  />
                   <ErrorMessage name="alterEmergencyContact">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
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
                  <Field
                    type="text"
                    id="emergencyHomePhone"
                    name="emergencyHomePhone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                  
                  />
                  <ErrorMessage name="emergencyHomePhone">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="alter-emergency-home-phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Alter Emergency Home Phone
                  </label>
                  <Field
                    type="text"
                    id="alterEmergencyHomePhone"
                    name="alterEmergencyHomePhone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                    
                  />
                   <ErrorMessage name="alterEmergencyHomePhone">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
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
                  <Field
                    type="text"
                    name="emergencyWorkPhone"
                    id="emergencyWorkPhone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                   
                  />
                  <ErrorMessage name="emergencyWorkPhone">
                    {(msg) => <div className="text-red-500">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-5 w-6/12 ">
                  <label
                    htmlFor="alter-emergency-work-phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Alter Emergency Work Phone
                  </label>
                  <Field
                    type="number"
                    id="alterEmergencyWorkPhone"
                    name="alterEmergencyWorkPhone"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="012XXXXXX "
                    
                  />
                   <ErrorMessage name="alterEmergencyWorkPhone">
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
