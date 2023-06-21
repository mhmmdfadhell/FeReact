import React, { useState } from "react";
import Label from "../../atom/Label";
import Button from "../../atom/Button";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleConfirmLogout = () => {
    setShowModal(false);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <nav className="flex justify-between bg-slate-500 items-center p-5 fixed top-0 w-full ">
      <img src="/images/test.jpg" alt="logo" className="w-20 h-5" />
      <p className="text-white font-bold text-xl">Project Kalik</p>

      <Button
        className="flex bg-black text-white border rounded-lg"
        onClick={handleLogout}
      >
        Logout
      </Button>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 backdrop-brightness-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <p>Are you sure you want to log out?</p>
            <div className="flex justify-center mt-4">
              <Button
                className="bg-red-500 text-white mr-2"
                onClick={handleConfirmLogout}
              >
                Yes
              </Button>
              <Button
                className="bg-gray-500 text-white"
                onClick={handleCancelLogout}
              >
                No
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
