import { Navbar } from "flowbite-react";
import React from "react";
import backgroundImg from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import app from "../../assets/images/app.png";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export default function LogInPage() {
  const navigate = useNavigate();

  return (
    // <div className=" min-h-screen w-full relative bg-opacity-80 ">
    //   <img
    //     src={backgroundImg}
    //     className="absolute h-full w-full mix-blend-overlay   "
    //     alt=""
    //   />

    //   {/* header text */}

    //   <div className="grid grid-cols-1 h-screen text-center ">
    //     <div class=" h-full flex items-center justify-center   ">
    //       <img src={logo} className="float-left  w-40 m-5 " alt="" />
    //       <div className=" font-Moul text-start text-white text-3xl">
    //         <h1>ក្រុមប្រឹក្សាជាតិសេដ្ធកិច្ច និង​សង្គមឌីជីថល </h1>
    //         <h2 className="text-xl font-sans font-medium  tracking-wider ">
    //           NATIONAL COUNCIL FOR DIGITAL ECONOMY AND SOCIETY
    //         </h2>

    //         <h3 className="text-2xl mt-8">
    //           គណៈកម្មាធិការសេដ្ឋកិច្ច និង ធុរកិច្ចឌីជីថល{" "}
    //         </h3>
    //         <h4 className="text-xl font-sans font-medium tracking-wider">
    //           DIGITAL ECONOMY AND BUSINESS COMMITTEE
    //         </h4>
    //       </div>
    //     </div>

    //     <div className="grid grid-span-3 font-battambang mt-3 h-full  ">
    //       <div className="">
    //         <p className="text-4xl text-white font-semibold  ">
    //           សូមស្វាគមន៍
    //           <p className="m-4">ប្រប្រព័ន្ធគ្រប់គ្រងបុគ្គលិក</p>
    //         </p>
    //       </div>

    //       <div className="-mt-14 flex items-center justify-center ">
    //         <Button
    //           onClick={() => {
    //             navigate("/");
    //           }}
    //           className="rounded-3xl h-28 w-[450px] bg-gradient-to-t from-[#051E6F] to-[#2F5AE2]"
    //           sx={{ borderRadius: "20px" }}
    //         >
    //           <img src={app} className="w-2/12 h-3/4 mr-4" alt="" />
    //           <p className="text-center text-white font-battambang text-3xl font-semibold">
    //             ចូលប្រើប្រាស់ជាមួយគណនី
    //             <p className="text-white font-serif text-lg  font-medium">
    //               Login with CAMDIGIKEY
    //             </p>
    //           </p>
    //         </Button>
    //       </div>
    //     </div>

    //     <div className="h-full flex items-center justify-center">
    //       <div className="">
    //         <p className="text-white mb-5 font-battambang text-2xl font-semibold -mt-8">
    //           ការណែនាំ
    //         </p>
    //         <div className="mb-10">
    //           <p className=" leading-10 text-start text-white font-medium font-battambang text-xl">
    //             ១. ទាញយកកម្មវិធី CamDigiKey៖ Android ឬ iOS។
    //             <p>២. ស្កែន QR Code ក្នុងកម្មវិធី CamDigiKey របស់លោកអ្នក។</p>
    //             <p>៣. បញ្ចូលលេខកូដ 6 ខ្ទង់ទៅក្នុងកម្មវិធីនោះ។</p>
    //             <p>៤. អ្នកនឹងត្រូវបានអនុញ្ញាតឱ្យចូលក្នុងប្រព័ន្ធ។</p>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-center items-center h-screen bg-cover relative">
  {/* Set the z-index to -1 to ensure the background is behind everything else */}
  <img
    src={backgroundImg}
    className="absolute h-full w-full mix-blend-overlay"
    alt=""
    style={{ zIndex: -1 }}
  />
  <div className="z-10 rounded-lg shadow-xl max-w-sm w-full"> {/* Add z-10 to ensure this div is above the background image */}
    <div className="flex flex-col items-center mb-11">
      <img src={logo} alt="Logo" className="w-72 h-72 mb-12" />
      <h1 className="text-5xl text-center text-white font-semibold mt-2 font-battambang mb-6">
        ប្រព័ន្ធគ្រប់គ្រងបុគ្គលិក
      </h1>
    </div>
    <div className="flex flex-col items-stretch ">
      <button onClick={() => {navigate("/dashboard") }}
        className="flex items-center justify-center rounded-2xl h-28 text-white py-2 px-4 bg-[#2248c0]"
      >
        <img src={app} alt="CAMDIGKEY Icon" className="w-16 h-16 mr-3" />
        <p className="text-3xl font-battambang font-semibold leading-10 ">
          ចូលប្រើប្រាស់គណនី
          <span className="block text-xl font-serif">Login with CAMDIGKEY</span>
        </p>
      </button>
    </div>
  </div>
</div>

  

  );
}
