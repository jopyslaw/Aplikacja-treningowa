import React from "react";

function Footer() {
  return (
    <>
      <div className=" w-full bg-black px-5">
        <div className="w-full justify-between flex flex-row">
          <p className="text-white">All Rights Reserved </p>
          <div className="flex flex-col gap-y-4 flex justify-center w-[100px]">
            <div className="flex justify-center gap-y-2 flex-col"></div>
          </div>
          <p className="text-white">TrainForce 2023</p>
        </div>
      </div>
    </>
  );
}
export default Footer;
