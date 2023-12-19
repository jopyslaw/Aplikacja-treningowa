import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const nav = useNavigate();
  const handleSubmnit = () => {
    axios
      .post("http://localhost:4200/api/user/auth", formData)
      .then((response) => {
        console.log("Odpowiedź serwera:", response.data.token);
        localStorage.setItem("token", response.data.token);
        nav("/");
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania danych:", error);
      });
  };
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
                  <label className="text-white">Login</label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, login: e.target.value })
                    }
                    value={formData.login}
                    className="rounded-lg"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Hasło</label>
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    value={formData.password}
                    className="rounded-lg"
                    type="password"
                  />
                </div>
                <button
                  onClick={() => handleSubmnit()}
                  className="bg-black text-white rounded-full bg-opacity-50"
                >
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
