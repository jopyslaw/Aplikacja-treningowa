import React, { useEffect, useState } from "react";

function Step1(props) {
  const updateStep = (currentStep, gender) => {
    props.onUpdate(currentStep);
    props.onData({ gender: gender });
  };

  return (
    <>
      <div className="mt-[80px] pb-10 justify-center flex w-full">
        <div className="flex flex-col items-center w-3/4">
          <p className="text-white font-bold text-[40px]">
            TrainForce - Kalkulator Treningowy
          </p>
          <div className="gap-5 flex items-center pb-10 flex-col mt-10">
            <p className="font-bold">Wybierz płeć</p>
            <div className="w-full flex gap-x-[300px] flex-row">
              <div className="flex gap-2 flex-col">
                <p className="font-bold text-center">Mężczyzna</p>
                <div
                  onClick={() => {
                    updateStep(2, "man");
                  }}
                  className="cursor-pointer bg-man bg-cover h-[350px] w-[350px]"
                />
              </div>
              <div className="flex gap-2 flex-col">
                <p className="font-bold text-center">Kobieta</p>
                <div
                  onClick={() => {
                    updateStep(2, "woman");
                  }}
                  className="cursor-pointer bg-woman bg-cover h-[350px] w-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;
