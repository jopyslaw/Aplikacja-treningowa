import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function UserHistory() {
  const [history, setHistory] = useState([]);
  const userId = jwtDecode(localStorage.getItem("token")).userId;
  const role = jwtDecode(localStorage.getItem("token")).role;

  const getStatus = (active) => {
    if (active === true) {
      return "Aktywny";
    }
    if (active === false) {
      return "Zakończony";
    }
  };

  useEffect(() => {
    const url =
      role === "user"
        ? `http://localhost:4200/api/assignedCustomers/trainers/${userId}`
        : `http://localhost:4200/api/assignedCustomers/users/${userId}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setHistory(response.data);
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania danych:", error);
      });
  }, []);

  return (
    <>
      <div className="mt-10">
        <p className="font-bold text-center">
          Twoja historia zgłoszeń jako{" "}
          {role === "trainer" ? "trener" : "podopieczny"}
        </p>
        <div className="w-full flex flex-col">
          {history.map((value, index) => (
            <div key={index} className="bg-white rounded-full px-10">
              <div className="w-full flex justify-between">
                <p className="font-bold">Status zgłoszenia</p>
                <p>{getStatus(value.active)}</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-bold">Imię</p>
                <p>{value.name}</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-bold">Nazwisko</p>
                <p>{value.surname}</p>
              </div>
              <div className="w-full flex justify-between">
                <p className="font-bold">Email</p>
                <p>{value.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserHistory;
