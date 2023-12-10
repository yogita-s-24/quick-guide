import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

function Card({ data }) {
  return (
    <div className="relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.name}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose color="#000" />
            ) : (
              <LuDownload size=".7em" color="#000" />
            )}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div className="tag w-full py-3 bg-red-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download Now</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
