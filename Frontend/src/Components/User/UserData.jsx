import React from "react";
import Footer from "../Footer";

function UserData() {
  return (
    <>
      <div className="mt-10">
        <p className="font-bold text-center">Oto twoje dane</p>
        <div className="flex flex-col gap-y-5">
          <div className="flex-row flex justify-between">
            <p className="font-bold">Rola</p>
            <p className="font-bold text-white">Podopieczny</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Specjalizacja</p>
            <p className="font-bold text-white">Brak</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Imię</p>
            <p className="font-bold text-white">Maciek</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Nazwisko</p>
            <p className="font-bold text-white">Maćkowy</p>
          </div>
          <div className="flex-row flex justify-between">
            <p className="font-bold">Login</p>
            <p className="font-bold text-white">maciekpl</p>
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
