import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
      <div className="relative w-60 h-72 rounded-[50px] bg-blue-100/90 text-black px-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="footer absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-between px-8 py-3 mb-5">
            <h5>.4mb</h5>
            <span className="w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center">
              <LuDownload size=".7em" color="#000" />
            </span>
          </div>
          <div className="tag w-full py-3 bg-sky-400 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download Now</h3>

          </div>
        </div>
      </div>
  );
}

export default Card;
