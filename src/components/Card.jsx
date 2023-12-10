import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      //   drag
      //   drageConstraints={reference}
      //   whileDrag={{ scale: 1.1 }}
      //   dragElastic={0.1}
      //   dragTransition={{ bounceStiffness: 600, bounceDamping: 100 }}
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      
      className="relative flex shrink-0 w-60 h-72 rounded-[10px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
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
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-red-600" : "bg-blue-700"
            } flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
