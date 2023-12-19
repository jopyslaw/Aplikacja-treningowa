import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function UserData() {
  const role = jwtDecode(localStorage.getItem("token")).role;
  const trainerType = jwtDecode(localStorage.getItem("token")).trainerType;
  const name = jwtDecode(localStorage.getItem("token")).name;
  const email = jwtDecode(localStorage.getItem("token")).email;
  const getTrainerType = () => {
    if (trainerType === "functional") {
      return "Funkcjonalny";
    }
    if (trainerType === "reducing") {
      return "Redukcyjny";
    }
    if (trainerType === "strengthening") {
      return "Wzmacniający";
    }
    if (trainerType === "generalDevelopment") {
      return "Ogólnorozwojowy";
    }
    if (trainerType === "forWomenDuringAndAfterPregnancy") {
      return "Dla kobiet w trakcie i po ciąży";
    }
    if (trainerType === "relaxingTheSenses") {
      return "Relaksujący";
    }
    return "";
  };

  useEffect(() => {
    console.log(trainerType);
  }, [trainerType]);

  return (
    <>
      <div className="mt-10">
        <p className="font-bold text-center">Oto twoje dane</p>
        <div className="flex flex-col gap-y-5">
          <div className="flex-row flex justify-between">
            <p className="font-bold">Rola</p>
            <p className="font-bold text-white">
              {role === "trainer" ? "Trener" : "Podopieczny"}
            </p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Specjalizacja</p>
            <p className="font-bold text-white">{getTrainerType()}</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Imię</p>
            <p className="font-bold text-white">{name}</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Nazwisko</p>
            <p className="font-bold text-white">Maćkowy</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Login</p>
            <p className="font-bold text-white">maciekpl</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Email</p>
            <p className="font-bold text-white">{email}</p>
          </div>
          <div className="flex-row flex justify-center">
            <button className="rounded-full bg-red-600 px-5 py-1 text-white font-bold">
              Usuń konto
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserData;
