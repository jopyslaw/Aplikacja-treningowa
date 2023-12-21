import React, { useEffect, useState } from "react";

function Step5(props) {
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
            <p className="font-bold">Oto twoje dane!</p>
            <div className="w-full py-2 bg-gray-300 rounded-lg flex gap-y-4 flex-col">
              <div className="flex flex-row px-10 gap-x-40">
                <p className="font-bold">Płeć</p>
                <div className="w-full flex justify-end">
                  <p>{props.data.gender === "man" ? "Meżczyzna" : "Kobieta"}</p>
                </div>
              </div>
              <div className="flex flex-row px-10 gap-x-40">
                <p className="font-bold">Wiek</p>
                <div className="w-full flex justify-end">
                  <p>{props.data.age}</p>
                </div>
              </div>
              <div className="flex flex-row px-10 gap-x-40">
                <p className="font-bold">Waga</p>
                <div className="w-full flex justify-end">
                  <p>{props.data.weight}</p>
                </div>
              </div>
              <div className="flex flex-row px-10 gap-x-40">
                <p className="font-bold">Wzrost</p>
                <div className="w-full flex justify-end">
                  <p>{props.data.height}</p>
                </div>
              </div>
              <div className="flex flex-row px-10 gap-x-40">
                <p className="font-bold">Aktywność</p>
                <div className="w-full flex justify-end">
                  <p>
                    {props.data.activity === "no"
                      ? "Brak"
                      : props.data.activity === "low"
                      ? "Niska"
                      : props.data.activity === "mid"
                      ? "Średnia"
                      : "Wysoka"}
                  </p>
                </div>
              </div>
              <div className="flex flex-row px-10 gap-x-40">
                <p className="font-bold">Cel</p>
                <div className="w-full flex justify-end">
                  <p>
                    {props.data.goal === "put"
                      ? "Przytyć"
                      : props.data.goal === "lose"
                      ? "Schudnąć"
                      : props.data.goal === "injury"
                      ? "Powrót po kontuzji"
                      : props.data.goal === "stability"
                      ? "Generalny rozwój"
                      : props.data.goal === "moveForPregnancy"
                      ? "Dla kobiet w trakcie i po ciąży"
                      : "Relaksujący"}
                  </p>
                </div>
              </div>
              <div className="flex flex-row px-10 gap-x-40">
                <p className="font-bold">Praca</p>
                <div className="w-full flex justify-end">
                  <p>
                    {props.data.job === "sit"
                      ? "Siedząca"
                      : props.data.job === "mix"
                      ? "Mieszana"
                      : "Fizyczna"}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => updateStep(6)}
              className="px-5 bg-white rounded-full"
            >
              Dobierz trening przy użyciu systemu SmartTrain!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step5;
