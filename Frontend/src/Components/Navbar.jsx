import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
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
            <NavLink to="/login" className="font-bold text-[25px] text-white">
              Zaloguj się
            </NavLink>
            <NavLink
              to="/register"
              className="font-bold text-[25px] text-white"
            >
              Załóż konto
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
