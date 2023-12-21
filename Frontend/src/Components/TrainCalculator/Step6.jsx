import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Step6(props) {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const userId = jwtDecode(localStorage.getItem("token")).userId;
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/user/get-trainers-by-trainer-type", {
        params: { goal: props.data.goal },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania danych:", error);
      });
  }, []);

  const chooseTrainer = (_id) => {
    axios
      .post(
        "http://localhost:4200/api/assignedCustomers/create",
        {
          userId: userId,
          trainerId: _id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      )
      .then((response) => {
        nav("/");
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania danych:", error);
      });
  };

  return (
    <>
      <div className="mt-[80px] justify-center flex w-full">
        <div className="flex flex-col items-center w-3/4">
          <p className="text-white font-bold text-[40px]">
            TrainForce - Kalkulator Treningowy
          </p>
          <div className="mt-10">
            <p className="font-bold text-[30px]">
              O to lista trenerów dopasowanych do twoich preferencji
            </p>
            <div className="mt-5 flex gap-x-5 flex-row flex-wrap justify-center pb-10 w-full">
              {data.map((value, index) => (
                <div
                  className="w-[500px] px-5 flex flex-col bg-white rounded-lg"
                  key={index}
                >
                  <div className="flex flex-row w-full justify-between">
                    <p>Email</p>
                    <p>{value.email}</p>
                  </div>
                  <div className="flex flex-row w-full justify-between">
                    <p>Imię</p>
                    <p>{value.name}</p>
                  </div>
                  <div className="flex flex-row w-full justify-between">
                    <p>Nazwisko</p>
                    <p>{value.surname}</p>
                  </div>
                  <div className="mt-5 w-full flex flex-col justify-center">
                    <p className="text-center">Przykładowe treningi</p>
                    <div className="w-full flex flex-col gap-y-5">
                      {value.trainings.map((value1, index1) => (
                        <div key={index1}>
                          <p>Numer treningu: {index1 + 1}</p>
                          <p>{value1.description}</p>
                          <p>
                            Dla kogo:{" "}
                            {value1.sex === "Women" ? "Kobiety" : "Mężczyzny"}
                          </p>
                          <p className="font-bold">
                            Tytuł treningu: {value1.title}
                          </p>
                          {value1.exercise.map((value2, index) => (
                            <div key={index}>
                              <p>{value2.description}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="mt-2 mb-5 bg-blue-300 px-5 rounded-full "
                    onClick={() => {
                      chooseTrainer(value._id);
                    }}
                  >
                    Wybierz trenera
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step6;
