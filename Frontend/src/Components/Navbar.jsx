import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
function Navbar() {
  const nav = useNavigate();
  const name = localStorage.getItem("token")
    ? jwtDecode(localStorage.getItem("token")).name
    : "";
  return (
    <div className="w-full pt-5 flex justify-center bg-transparent">
      <div className="w-full px-20">
        <div className="w-full h-10 items-center flex justify-between">
          <div className="flex gap-5 flex-row w-full">
            <NavLink to="/" className="font-bold text-[25px] text-white">
              Strona główna
            </NavLink>
            <NavLink
              to="/train-calculator"
              className="font-bold text-[25px] text-white"
            >
              Kalkulator treningowy
            </NavLink>
            <NavLink to="/contact" className="font-bold text-[25px] text-white">
              Kontakt
            </NavLink>
          </div>
          <div className="font-bold flex justify-end gap-5 flex-row w-full">
            {localStorage.getItem("token") ? (
              <p className="font-bold text-[25px] text-white">Witaj {name}</p>
            ) : (
              <NavLink to="/login" className="font-bold text-[25px] text-white">
                Zaloguj się
              </NavLink>
            )}
            {localStorage.getItem("token") ? (
              <div className="flex justify-center items-center">
                <NavLink
                  to="/user-panel"
                  className="bg-user bg-cover bg-no-repeat w-[30px] h-[30px]"
                />
              </div>
            ) : (
              <NavLink
                to="/register"
                className="font-bold text-[25px] text-white"
              >
                Zarejestruj się
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
