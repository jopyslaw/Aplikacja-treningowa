import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Register() {
  const [role, setRole] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  useEffect(() => {
    console.log(role);
  }, [role]);
  return (
    <>
      <div className="bg-gradient-to-b w-full flex-col flex from-indigo-500 to-purple-400">
        <Navbar />
        <div className="my-[80px] justify-center flex w-full">
          <div className=" flex flex-col items-center w-3/4">
            <p className="text-white font-bold text-[40px]">
              TrainForce - Załóż konto
            </p>
            <div className="mt-10 py-5 w-1/2 flex justify-center bg-opacity-50 bg-black rounded-lg">
              <div className="w-1/2 flex flex-col gap-y-4">
                <div className=" flex flex-col">
                  <label className="text-white">Rola</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="rounded-lg"
                  >
                    <option value="mentee">Podopieczny</option>
                    <option value="trainer">Trener</option>
                  </select>
                </div>
                {role === "trainer" && (
                  <div className=" flex flex-col">
                    <label className="text-white">Specjalizacja</label>
                    <select
                      value={specialisation}
                      onChange={(e) => setSpecialisation(e.target.value)}
                      className="rounded-lg"
                    >
                      <option value="functional">Funkcjonalny</option>
                      <option value="personal">Personalny</option>
                    </select>
                  </div>
                )}
                <div className=" flex flex-col">
                  <label className="text-white">Imię</label>
                  <input className="rounded-lg" type="text" />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Nazwisko</label>
                  <input className="rounded-lg" type="text" />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Email</label>
                  <input className="rounded-lg" type="email" />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Hasło</label>
                  <input className="rounded-lg" type="password" />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Powtórz hasło</label>
                  <input className="rounded-lg" type="password" />
                </div>
                <button className="bg-black text-white rounded-full bg-opacity-50">
                  Załóż konto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
