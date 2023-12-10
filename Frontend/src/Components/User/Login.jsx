import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Login() {
  return (
    <>
      <div className="relative bg-gradient-to-b w-full h-[800px] flex-col flex from-indigo-500 to-purple-400">
        <Navbar />
        <div className="mt-[40px] justify-center flex w-full">
          <div className=" flex flex-col items-center w-3/4">
            <p className="text-white font-bold text-[40px]">
              TrainForce - Zaloguj się
            </p>
            <div className="mt-10 py-5 w-1/2 flex justify-center bg-opacity-50 bg-black rounded-lg">
              <div className="w-1/2 flex flex-col gap-y-4">
                <div className=" flex flex-col">
                  <label className="text-white">Email</label>
                  <input className="rounded-lg" type="email" />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Hasło</label>
                  <input className="rounded-lg" type="password" />
                </div>
                <button className="bg-black text-white rounded-full bg-opacity-50">
                  Zaloguj się
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
