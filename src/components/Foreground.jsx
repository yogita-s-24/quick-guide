import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);
const data = [
    {
      name: "This is the background color that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen:true, tagTitle: "Download Now", tagColor : "blue" },
    },
    {
      name: "This is the background color that will be displayed.",
      filesize: ".5mb",
      close: true,
      tag: { isOpen:false, tagTitle: "Download Now", tagColor : "green" },
    },
    {
      name: "This is the background color that will be displayed.",
      filesize: ".8mb",
      close: true,
      tag: { isOpen:true, tagTitle: "Upload Now", tagColor : "blue" },
    },
    {
      name: "This is the background color that will be displayed.",
      filesize: ".6mb",
      close: true,
      tag: { isOpen:true, tagTitle: "Download Now", tagColor : "red" },
    },
  ];

  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
      
      </div>
    
  );
}

export default Foreground;
