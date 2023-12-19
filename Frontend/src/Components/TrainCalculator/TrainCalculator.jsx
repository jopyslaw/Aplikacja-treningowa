import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Footer from "../Footer";
import Step6 from "./Step6";

function TrainCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    weight: "",
    height: "",
    activity: "",
    goal: "",
    job: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const BMI = useMemo(() => {
    const height = parseInt(formData.height);
    const weight = parseInt(formData.weight);

    if (!isNaN(height) && !isNaN(weight)) {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      return bmi;
    }
  }, [formData.height, formData.weight]);
  const indexOfBmi = () => {
    if (BMI < 16) {
      return "Wygłodzenie";
    } else if (BMI >= 16 && BMI <= 16.99) {
      return "Wychudzenie";
    } else if (BMI >= 17 && BMI <= 18.49) {
      return "Niedowaga";
    } else if (BMI >= 18.5 && BMI <= 24.99) {
      return "Prawidłowa Waga";
    } else if (BMI >= 25 && BMI <= 29.99) {
      return "Nadwaga";
    } else if (BMI >= 30 && BMI <= 34.99) {
      return "Otyłość 1 stopnia";
    } else if (BMI >= 35 && BMI <= 39.99) {
      return "Otyłość 2 stopnia";
    } else if (BMI > 40) {
      return "Skrajna otyłość";
    } else {
      return "Nieprawidłowa wartość BMI";
    }
  };

  const updateStep = useCallback((newData) => {
    setCurrentStep(newData);
  }, []);

  const updateData = useCallback(
    (newForm) => {
      setFormData({ ...formData, ...newForm });
    },
    [formData],
  );
  return (
    <>
      <div className="bg-gradient-to-b w-full flex-col flex from-indigo-500 to-purple-400 ...">
        <Navbar />
        <div className="relative">
          {currentStep === 0 && (
            <Step0 onData={updateData} onUpdate={updateStep} />
          )}
          {currentStep === 1 && (
            <Step1 onData={updateData} onUpdate={updateStep} />
          )}
          {currentStep === 2 && (
            <Step2 onData={updateData} onUpdate={updateStep} />
          )}
          {currentStep === 3 && (
            <Step3
              indexOfBMI={indexOfBmi(BMI)}
              BMI={BMI}
              onUpdate={updateStep}
            />
          )}
          {currentStep === 4 && (
            <Step4 onData={updateData} onUpdate={updateStep} />
          )}
          {currentStep === 5 && <Step5 onUpdate={updateStep} data={formData} />}
          {currentStep === 6 && <Step6 onUpdate={updateStep} data={formData} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TrainCalculator;
