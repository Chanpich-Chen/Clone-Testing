import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import BasicInfo from "./BasicInfo/BasicInfo";
import BankInfo from "./BankInfo/BankInfo";
import SalaryInfo from "./SalaryInfo";
import PositionalInformation from "./PositionalInformation";
import Benefit from "./Benefit";
import BiographicInfo from "./BiographicInfo";
import AdditionalAddress from "./AdditionalAddress";
import EmergencyContact from "./EmergencyContact";
import Custom from "./Custom";
export default function Steppers() {
  const steps = [
    "Basic Info",
    "Bank Info",
    "Salary Info",
    "Positional Information",
    "Benefit",
    "Biographic info",
    "Additional Address",
    "Emergency Contact",
    "Custom",
  ];
  // form all data
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    city: "",
    countries: "",
    attendanceTime: "",
    employeeType: "",
    alternativePhone: "",
    street: "",
    bankName: "",
    accName: "",
    accNumber: "",
    currency: "",
  });
  console.log(formData);

  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  function showStep(step) {
    switch (step) {
      case 1:
        return (
          <BasicInfo
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <BankInfo
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return <SalaryInfo handleNext={handleNext} handleBack={handleBack} />;
      case 4:
        return (
          <PositionalInformation
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 5:
        return <Benefit handleNext={handleNext} handleBack={handleBack} />;
      case 6:
        return (
          <BiographicInfo handleNext={handleNext} handleBack={handleBack} />
        );
      case 7:
        return (
          <AdditionalAddress handleNext={handleNext} handleBack={handleBack} />
        );
      case 8:
        return (
          <EmergencyContact handleNext={handleNext} handleBack={handleBack} />
        );
      case 9:
        return <Custom handleNext={handleNext} handleBack={handleBack} />;
    }
  }
  return (
    <div className="w-full px-10 mt-24 ">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep - 1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>{showStep(activeStep)}</div>
    </div>
  );
}
