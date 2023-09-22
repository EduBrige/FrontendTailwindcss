import React from "react";
import Notification from "..//assets/notification.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col px-24 py-5 ">
      <div className="flex font-playfairDisplay  justify-between uppercase font-semibold">
        <div>
          <p className="text-lg cursor-pointer ">EduBridge</p>
        </div>
        <div className="flex gap-4 uppercase cursor-pointer">
          <p>Home</p>
          <p>Contact</p>
          <div>
            <img className="h-6" src={Notification} />
          </div>
          <p>Profile</p>
        </div>
      </div>
      <div className="flex justify-center pt-2 px-5">
        <hr className="w-full bg-black h-1/2" />
      </div>
    </nav>
  );
};

export default Navbar;
