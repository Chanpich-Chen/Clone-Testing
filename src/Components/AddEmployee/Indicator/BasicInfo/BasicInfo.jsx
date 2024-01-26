import React from "react";
import NavigationButton from "../NavigationButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BankInfoField from "./BasicInfoField";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("first name is Required"),
  middleName: yup.string().required("middle name is Required"),
  lastName: yup.string().required("last name is Required"),
  emailAddress: yup
    .string()
    .email("Invalid email address")
    .required("Required"),
  phone: yup
    .string()
    .matches(
      /^(?:\+855|0)[1-9]\d{7,8}$/,
      "Invalid phone number. Please use the Cambodian phone number format."
    )
    .required("Required"),
  city: yup.string().required("Required"),
  countries: yup
    .string()
    .required("Country is required")
    .oneOf(["US", "CA", "FR", "DE"], "Invalid country"),
  attendanceTime: yup.string().required("Required"),
  employeeType: yup.string().required("Required"),
});

const BankInfo = ({ handleNext, handleBack, formData, setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
    console.log(data);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" py-10">
          <div className="flex flex-wrap w-12/12 ">
            {BankInfoField.map((item, i) => (
              <div key={i} className={`mb-8 w-${item?.size} pr-4`}>
                <label className="block mb-3 text-sm font-bold text-gray-900 dark:text-white">
                  {item?.label}
                </label>
                {item?.child ? (
                  <select
                    name={item?.field}
                    {...register(`${item?.field}`)}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [item?.field]: e.target.value,
                      })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {!formData[item?.field] && (
                      <option disabled>Select a {item?.label}</option>
                    )}
                    {item.child.map((data, i) => (
                      <option
                        key={i}
                        value={data?.key}
                        selected={formData[item?.field] === data?.key}
                      >
                        {data?.text}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={item.type}
                    {...register(`${item?.field}`)}
                    name={item?.field}
                    id={`${item?.field}-${i}`} // Unique id for each input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={item?.label}
                    value={formData[item?.field] ?? ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [item?.field]: e.target.value,
                      })
                    }
                  />
                )}

                <div className="text-red-500">
                  {errors[item?.field]?.message}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end items-end mt-20  gap-x-2 ">
            {!isValid ? (
              <button type="submit">
                <NavigationButton handleBack={handleBack} />
              </button>
            ) : (
              <button type="submit">
                <NavigationButton handleNext={handleNext} />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BankInfo;
