import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl mb-5">Find Us On</h1>
      <div className="">
        <div className="join join-vertical w-full">
           <button className="btn join-item bg-base-100 justify-start hover:bg-secondary"><FaFacebook size={20}/> Facebook</button>
          <button className="btn join-item bg-base-100 justify-start hover:bg-primary"><FaTwitter size={20}/> Twitter</button>
          <button className="btn join-item bg-base-100 justify-start hover:bg-primary"><FaInstagram size={20}/> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
