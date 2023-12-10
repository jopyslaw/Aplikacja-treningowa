import React, { useEffect, useState } from "react";

function Step4(props) {
  const [data, setData] = useState({
    activity: "",
    goal: "",
    job: "",
  });
  const updateStep = (currentStep) => {
    props.onData({ ...data });
    props.onUpdate(currentStep);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <div className="mt-[80px] justify-center flex w-full">
        <div className="flex flex-col items-center w-3/4">
          <p className="text-white font-bold text-[40px]">
            TrainForce - Kalkulator Treningowy
          </p>
          <div className="gap-5 flex items-center pb-10 flex-col mt-10">
            <p className="font-bold">Wybierz swoją aktywność</p>
            <div className="w-full flex gap-x-[150px] flex-row">
              <div className="flex gap-4 flex-col">
                <p>Wykonywana praca</p>
                <button
                  onClick={() => setData({ ...data, job: "sit" })}
                  className={`${
                    data.job === "sit" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Siedząca
                </button>
                <button
                  onClick={() => setData({ ...data, job: "physics" })}
                  className={`${
                    data.job === "physics" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Fizyczna
                </button>
                <button
                  onClick={() => setData({ ...data, job: "mix" })}
                  className={`${
                    data.job === "mix" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Mieszana
                </button>
              </div>
              <div className="flex gap-4 flex-col">
                <p>Aktywność fizyczna w tygodniu</p>
                <button
                  onClick={() => setData({ ...data, activity: "no" })}
                  className={`${
                    data.activity === "no" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Brak
                </button>
                <button
                  onClick={() => setData({ ...data, activity: "low" })}
                  className={`${
                    data.activity === "low" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Niska
                </button>
                <button
                  onClick={() => setData({ ...data, activity: "mid" })}
                  className={`${
                    data.activity === "mid" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Średnia
                </button>
                <button
                  onClick={() => setData({ ...data, activity: "high" })}
                  className={`${
                    data.activity === "high" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Wysoka
                </button>
              </div>
              <div className="flex  gap-4 flex-col">
                <p>Twój cel treningowy</p>
                <button
                  onClick={() => setData({ ...data, goal: "lose" })}
                  className={`${
                    data.goal === "lose" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Schudnąć
                </button>
                <button
                  onClick={() => setData({ ...data, goal: "stability" })}
                  className={`${
                    data.goal === "stability" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Utrzymać wagę
                </button>
                <button
                  onClick={() => setData({ ...data, goal: "put" })}
                  className={`${
                    data.goal === "put" && "bg-black text-white"
                  } px-5 bg-white rounded-full`}
                >
                  Przytyć
                </button>
              </div>
            </div>
            <div className="border-black w-1/2 bg-white flex flex-row gap-x-4 border-2">
              <button
                disabled={
                  data.activity === "" || data.goal === "" || data.job === ""
                }
                onClick={() => updateStep(5)}
                className={` ${
                  (data.activity === "" ||
                    data.goal === "" ||
                    data.job === "") &&
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

export default Step4;
