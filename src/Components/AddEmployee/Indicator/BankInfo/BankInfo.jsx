import React from "react";
import NavigationButton from "../NavigationButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BankInfoField from "./BankInfoField";
import * as yup from "yup";



export default function BankInfo({
  handleNext,
  handleBack,
  formData,
  setFormData,
}) {
  // schema validation
const schema = yup.object({
  bankName: yup
    .string()
    .trim()
    .required("Bank name is required")
    .matches(/^[a-zA-Z\s]+$/, "Invalid characters in bank name"),
  accName: yup
    .string()
    .trim()
    .required("Account holder's name is required")
    .matches(/^[a-zA-Z\s']+$/, "Invalid characters in the name"),
  accNumber: yup
    .string()
    .matches(
      /^[0-9]{12}$/, // Replace this with the correct regex pattern for ACLEDA account numbers
      "Invalid ACLEDA account number"
    )
    .required("Account number is required"),
  currency: yup
    .string()
    .trim()
    .required("Currency is required")
    .oneOf(["riel", "usd"], "Invalid currency"),
});

// on conditions change
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

          <div className="flex justify-end items-end mt-96  gap-x-2 ">
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
}
