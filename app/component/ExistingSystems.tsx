import React from "react";
import Image from "next/image";
const ExistingSystems = () => {
  return (
    <div className=" container mx-auto md:flex-row items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4  ">
        Existing Systems
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div><Image src={"/gumtree.png"} width={200} height={300} alt={"gumtree"}></Image></div>
        <div><Image src={"/craiglist.png"} alt={"gumtree"} width={300} height={300}></Image></div>
        <div><Image src={"/facebook.png"} width={300} height={300} alt={"gumtree"}></Image></div>
        <div><Image src={"/ikman.png"} alt={"gumtree"} width={300} height={200}></Image></div>
        <div><Image src={"/oodle.png"} width={300} height={300} alt={"gumtree"}></Image></div>
        <div><Image src={"/trovit.png"} alt={"gumtree"} width={300} height={200}></Image></div>
      </div>
    </div>
  );
};

export default ExistingSystems;
