import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div className="bg-gradient-to-b w-full flex-col flex from-indigo-500 to-purple-400 ...">
        <Navbar />
        <div className="mt-[80px] h-[600px] justify-center flex w-full">
          <div className="flex flex-col items-center w-3/4">
            <p className="text-white font-bold text-[40px]">
              TrainForce - Kontakt
            </p>
            <div className="gap-5 flex pb-10 flex-col mt-10">
              <p className="text-center font-bold">
                Jeśli masz jakieś pytania, napisz na email poniżej
              </p>
              <div className="w-full flex justify-center">
                <p className="text-center text-black font-bold text-[40px]">
                  Kontakt@TrainForce.pl
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
