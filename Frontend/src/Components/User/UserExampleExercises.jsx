import React from "react";
import { jwtDecode } from "jwt-decode";

function UserExampleExercises() {
  const role = jwtDecode(localStorage.getItem("token")).role;
  return (
    <>
      <div className="mt-10">
        <p className="font-bold text-center">
          Przygotowaliśmy dla początkujących kilka prostych ćwiczeń i rad
        </p>
        {role === "user" && (
          <div className="w-full gap-y-5 flex flex-col my-4">
            <div className="w-[350px]">
              <p className="leading-6">
                1. Zanim pójdziesz na siłownię, ubierz się <b>wygodnie</b>
              </p>
            </div>
            <div className="w-[350px]">
              <p className="leading-6">2. Przygotuj sobie plan treningowy</p>
            </div>
            <div className="w-[350px]">
              <p className="leading-6">
                3. Weź znajomego, aby czuć się raźniej
              </p>
            </div>
            <div className="w-[350px]">
              <p className="leading-6">
                4. Nie bój się, że ktoś będzie patrzeć na Ciebie i się śmiać
              </p>
            </div>
          </div>
        )}
        {role === "trainer" && (
          <div className="w-full gap-y-5 flex flex-col my-4">
            <div className="w-[350px]">
              <p className="leading-6">
                1. Do każdego podopiecznego podchodź <b>indywidualnie</b>
              </p>
            </div>
            <div className="w-[350px]">
              <p className="leading-6">
                2. Bądź wyrozumiały, <b>każdy kiedyś zaczynał</b>
              </p>
            </div>
            <div className="w-[350px]">
              <p className="leading-6">
                3. <b>Technika</b> ważniejsza od ciężaru
              </p>
            </div>
            <div className="w-[350px]">
              <p className="leading-6">
                4. <b>Rozgrzewka</b> jest kluczowa do sukcesu
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserExampleExercises;
