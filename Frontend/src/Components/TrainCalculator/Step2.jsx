import React, { useEffect, useState } from "react";

function Step2(props) {
  const [data, setData] = useState({
    age: "",
    height: "",
    weight: "",
  });
  const updateStep = (currentStep) => {
    props.onData({ ...data });
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
            <p className="font-bold">Podaj swoje pomiary</p>
            <div className="w-full flex gap-y-[70px] flex-col">
              <div className="flex gap-2 flex-col">
                <p>Wiek</p>
                <input
                  className="pl-5 rounded-full"
                  type="number"
                  value={data.age}
                  onChange={(e) =>
                    setData({ ...data, age: parseInt(e.target.value) })
                  }
                />
              </div>
              <div className="flex gap-2 flex-col">
                <p>Waga w KG</p>
                <input
                  className="pl-5 rounded-full"
                  type="number"
                  value={data.weight}
                  onChange={(e) =>
                    setData({ ...data, weight: parseInt(e.target.value) })
                  }
                />
              </div>
              <div className="flex  gap-2 flex-col">
                <p>Wzrost w CM</p>
                <input
                  className="pl-5 rounded-full"
                  type="number"
                  value={data.height}
                  onChange={(e) =>
                    setData({ ...data, height: parseInt(e.target.value) })
                  }
                />
              </div>
            </div>
            <div className="border-black w-1/2 bg-white flex flex-row gap-x-4 border-2">
              <button
                disabled={
                  !(!data.age <= 0 && !data.height <= 0 && !data.weight <= 0)
                }
                onClick={() => updateStep(3)}
                className={` ${
                  !(!data.age <= 0 && !data.height <= 0 && !data.weight <= 0) &&
                  "opacity-50 cursor-not-allowed"
                } hover:bg-black hover:text-white w-full`}
              >
                Dalej
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step2;
