import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function UserHistory() {
  const [history, setHistory] = useState([]);
  const userId = jwtDecode(localStorage.getItem("token")).userId;
  const role = jwtDecode(localStorage.getItem("token")).role;

  useEffect(() => {
    console.log(history);
  }, [history]);

  useEffect(() => {
    axios
      .get(`http://localhost:4200/api/assignedCustomers/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Odpowiedź serwera:", response.data);
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
        <div className="w-3/4 flex flex-col">
          {history.map((value, index) => (
            <div key={index}>
              <p>{value.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserHistory;
