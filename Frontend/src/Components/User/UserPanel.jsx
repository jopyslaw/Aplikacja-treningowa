import React, { useState } from "react";
import Navbar from "../Navbar";
import UserData from "./UserData";
import Footer from "../Footer";
import UserExampleExercises from "./UserExampleExercises";
import UserHistory from "./UserHistory";
import { useNavigate } from "react-router-dom";

function UserPanel() {
  const [activeItem, setActiveItem] = useState("user-data");
  const nav = useNavigate();
  return (
    <>
      <div className="pb-10 bg-gradient-to-b w-full flex-col flex from-indigo-500 to-purple-400 ...">
        <Navbar />
        <div className="mt-[40px] justify-center flex w-full">
          <div className=" flex flex-col items-center w-3/4">
            <p className="text-white font-bold text-[40px]">
              TrainForce - Panel klienta!
            </p>
            <div className="mt-[40px]">
              <p className="font-bold text-4xl">Witaj w panelu klienta!</p>
            </div>
            <div className="mt-10 flex justify-center w-full">
              <button
                className="bg-gray-600 bg-opacity-30 px-5 text-white font-bold border-2 border-black"
                onClick={() => {
                  localStorage.removeItem("token");
                  nav("/");
                }}
              >
                Wyloguj się
              </button>
            </div>
            <div className="flex w-3/4 bg-purple-100 bg-opacity-50 rounded-lg flex-row  mt-[40px]">
              <button
                onClick={() => setActiveItem("user-data")}
                className={`font-bold w-full ${
                  activeItem === "user-data" && "rounded-l-lg bg-purple-500"
                }`}
              >
                Dane konta
              </button>
              <button
                onClick={() => setActiveItem("history")}
                className={`font-bold w-full ${
                  activeItem === "history" && "bg-purple-500"
                }`}
              >
                Historia zgłoszeń
              </button>
              <button
                onClick={() => setActiveItem("example-exercises")}
                className={`font-bold w-full ${
                  activeItem === "example-exercises" &&
                  "rounded-r-lg bg-purple-500"
                }`}
              >
                Wskazówki dla Ciebie!
              </button>
            </div>
            <div className="w-3/4 flex-col flex">
              {activeItem === "user-data" && <UserData />}
              {activeItem === "history" && <UserHistory />}
              {activeItem === "example-exercises" && <UserExampleExercises />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserPanel;
