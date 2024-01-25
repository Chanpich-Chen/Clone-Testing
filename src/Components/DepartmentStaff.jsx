import React from "react";


export default function DepartmentStaff({department }) {
  
  return (
    <div className=" bg-white shadow-md rounded-lg w-11/12 h-full grid grid-cols-1 md:grid-cols-2  gap-y-5 gap-x-26 py-5">
    {department.map((dept, index) =>(
      <div key={index} className=" px-14">
      <p className="text-xl font-medium px-1 mb-4">{dept.name}</p>

      <div className="flex m-2">
        <div className="bg-white rounded-2xl h-24  p-2 border-2 border-lightBlue flex items-center">
          <div className="text-center px-12 m-2 ">
            <div className="text-lightBlue text-2xl ">Total</div>
            <div className="text-4xl text-lightBlue ">{dept.total}</div>
          </div>
          <div className="" >
            <div className="flex justify-between  ">
              <div className=" text-center px-3 border-r  border-lightBlue">
                <p className="text-lightBlue font-medium  ">Female</p>
                <div className="text-3xl font-medium text-lightBlue">{dept.females}</div>
              </div>
              <div className=" mr-8 px-4 text-center">
                <p className="text-lightBlue font-medium ">Male</p>
                <div className="text-3xl font-medium text-lightBlue">{dept.males}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#afd7f7] border-2 border-lightBlue  rounded-xl shadow-md  flex items-center ml-8">
          <div className=" text-center px-12  ">
            <div className="text-lightBlue font-battambang font-semibold text-xl h-12  ">សុំច្បាប់</div>
            <div className="text-4xl text-lightBlue -mt-6 ">{dept.permission}</div>
          </div>
        </div>
      </div>
      </div>
    ))}
     
    </div>
  );
}
