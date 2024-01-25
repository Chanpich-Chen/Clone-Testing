import React, { useState } from "react";
import { Card } from "flowbite-react";

import DepartmentStaff from "./DepartmentStaff";
export default function Dashboard() {
  const [employee, SetEmployee] = useState([
    {
    total: 40,
    females: 10,
    males: 30,
    permission: 5,
    department : [
      { name: 'Department of Administration, Finance And Human Resource', total: 8, females: 3, males: 5, permission: 2 },
      { name: 'Department of Project Innovation And Programme Development', total: 7, females: 2, males: 5, permission: 1 },
      { name: 'Department of Traning, Dissemination And Cooperation', total: 8, females: 1, males: 7, permission: 1 },
      { name: 'Department of Research, Policy And Law ', total: 8, females: 2, males: 6, permission: 0 },
      { name: 'Department of Monitoring And Evaluation', total: 9, females: 2, males: 7, permission: 1 },

    ]
  }
]) 

  return (
    
    <div className="w-full">
      {employee.map((emps, index)=>(
        <div key={index} className="mt-32 ml-24 flex gap-x-9">
        <div className="w-8/12">
          <div className="bg-[#c9e1f5]  h-40 rounded-xl border-2 border-[#2463b0]">
            <div className="flex rounded-3xl overflow-hidden">
              <div
                className="flex flex-col justify-center items-center text-[#2463b0] p-3 "
                style={{ width: "35%" }}
              >
                <p className="mt-4 text-4xl font-normal">Total Employee</p>
                <p className="text-6xl font-normal">{emps.total}</p>
              </div>
              <div className="bg-[#d4e7f7] ml-24 mt-6 rounded-3xl w-1/2 h-28 p-1 inline-block">
                <div className="bg-whitesmoke flex items-center rounded-lg  ">
                  <div className="flex-1 text-center border-r border-[#7ca5d4] p-4">
                    <p className="text-3xl text-[#2463b0] font-medium">
                      Female
                    </p>
                    <p className="text-3xl text-[#2463b0] font-medium">{emps.females}</p>
                  </div>
                  <div className="flex-1 text-center p-4">
                    <p className="text-3xl text-[#2463b0] font-medium">Male</p>
                    <p className="text-3xl text-[#2463b0] font-medium">{emps.males}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#afd7f7] w-3/12 mr-28 h-40 border-2 border-[#2463b0] rounded-xl p-10">
          <div className="flex flex-col items-center justify-center text-blue-800">
            <p className="text-3xl text-[#2463b0] font-battambang font-semibold">
              សំណើរសុំច្បាប់
            </p>
            <div className="text-5xl text-[#2463b0] font-bold mt-2">{emps.permission}</div>
          </div>
        </div>
      </div>
      ))}
      


      <div className="mt-14 ml-24 ">
      {employee.map((employees, index) => (
          <DepartmentStaff key={index} department={employees.department} />
        ))}
      </div>
    </div>
  );
}
