import React, { useEffect, useState } from "react";

function Step3(props) {
  const updateStep = (currentStep) => {
    props.onUpdate(currentStep);
  };

  return (
    <>
      <div className="mt-[80px] justify-center flex w-full">
        <div className="flex flex-col items-center w-3/4">
          <p className="text-white font-bold text-[40px]">
            TrainForce - Kalkulator Treningowy
          </p>
          <div className="gap-5 flex items-center pb-10 flex-col mt-10">
            <p className="font-bold">Twoje wyniki</p>
            <div className="w-full flex gap-x-[150px] flex-row">
              <div className="flex gap-2 flex-col">
                <p className="font-bold">BMI</p>
                <p>{props.BMI}</p>
              </div>
              <div className="flex gap-2 flex-col">
                <p className="font-bold">Interpretacja wyniku</p>
                <p>{props.indexOfBMI}</p>
              </div>
              <div className="flex  gap-2 flex-col">
                <p className="font-bold">Optymalne BMI</p>
                <p>18.5 - 24.99</p>
              </div>
            </div>
            <div className="border-black w-1/2 bg-white flex flex-row gap-x-4 border-2">
              <button
                onClick={() => updateStep(4)}
                className={`
                      hover:bg-black hover:text-white w-full`}
              >
                Dalej
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Step3;
