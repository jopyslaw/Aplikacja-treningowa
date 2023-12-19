import React from "react";

function UserHistory() {
  const role = "trainer";
  return (
    <>
      <div className="mt-10">
        <p className="font-bold text-center">
          Twoja historia zgłoszeń jako{" "}
          {role === "trainer" ? "trener" : "podopieczny"}
        </p>
      </div>
    </>
  );
}

export default UserHistory;
