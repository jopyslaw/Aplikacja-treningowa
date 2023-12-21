import React from "react";

function Step0(props) {
  const currentStep = 1;
  const updateStep = () => {
    props.onUpdate(currentStep);
  };
  return (
    <>
      <div className="mt-[80px] justify-center flex w-full">
        <div className="flex flex-col items-center w-3/4">
          <p className="text-white font-bold text-[40px]">
            TrainForce - Kalkulator Treningowy
          </p>
          <div className="gap-5 flex pb-10 flex-col mt-10">
            <p className="font-bold">
              Odpowiedz na kilka prostych pytań, a dobierzemy trening pasujący
              najbardziej pod Ciebie!
            </p>
            <div className="w-full flex justify-center">
              <button
                onClick={() => updateStep(currentStep)}
                className="bg-white px-5 rounded-full font-bold border-2 border-black"
              >
                Zaczynamy!
              </button>
            </div>
            <div className="w-full scale-20 h-[400px] bg-cover bg-no-repeat bg-image2 rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Step0;
