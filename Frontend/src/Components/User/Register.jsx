import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    login: "",
    password: "",
    role: "user",
    trainerType: "",
  });
  const [trainerType, setTrainerType] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4200/api/trainerType/get").then((response) => {
      setTrainerType(response.data);
    });
  }, []);

  const handleSubmnit = () => {
    axios
      .post("http://localhost:4200/api/user/create", {
        ...formData,
        trainerType: formData.role === "trainer" ? formData.trainerType : null,
      })
      .then((response) => {
        nav("/");
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania danych:", error);
      });
  };

  return (
    <>
      <div className="relative bg-gradient-to-b w-full flex-col flex from-indigo-500 to-purple-400">
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
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="rounded-lg"
                  >
                    <option value="user">Podopieczny</option>
                    <option value="trainer">Trener</option>
                  </select>
                </div>
                {formData.role === "trainer" && (
                  <div className=" flex flex-col">
                    <label className="text-white">Specjalizacja</label>
                    <select
                      value={formData.trainerType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          trainerType: e.target.value,
                        })
                      }
                      className="rounded-lg"
                    >
                      {trainerType.map((value, index) => (
                        <option key={index} value={value._id}>
                          {value.trainerType}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className=" flex flex-col">
                  <label className="text-white">Login</label>
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        login: e.target.value,
                      })
                    }
                    className="rounded-lg"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Imię</label>
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="rounded-lg"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Nazwisko</label>
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        surname: e.target.value,
                      })
                    }
                    className="rounded-lg"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Email</label>
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="rounded-lg"
                    type="email"
                  />{" "}
                </div>
                <div className=" flex flex-col">
                  <label className="text-white">Hasło</label>
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    className="rounded-lg"
                    type="password"
                  />
                </div>
                <button
                  onClick={() => handleSubmnit()}
                  className="bg-black text-white rounded-full bg-opacity-50"
                >
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
