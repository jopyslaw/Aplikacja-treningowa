import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Step6(props) {
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
        console.log("Odpowiedź serwera:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania danych:", error);
      });
  }, []);

  useEffect(() => {
    console.log(userId);
  }, [userId]);

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
        console.log("Masno");
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania danych:", error);
      });
  };

  useEffect(() => {
    console.log(props.data);
    console.log(data);
  }, [props.data, data]);
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
            <div className="mt-5 flex flex-row flex-wrap justify-center pb-10 w-full">
              {data.map((value, index) => (
                <div className="w-1/2 px-5 bg-white rounded-lg" key={index}>
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
                  <button
                    className="w-full"
                    onClick={() => chooseTrainer(value._id)}
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
