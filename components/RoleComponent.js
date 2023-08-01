"use client";
import Image from "next/image";
import React from 'react';

const RoleComponent = ({ handleClick, role }) => {
  return (
    <div className="flex lg:flex-row md:flex-row gap-3 flex-col w-full justify-between mx-auto mb-3">
      <div className={`flex align-center gap-2 justify-center lg:w-1/2 rounded w-full p-3 cursor-pointer ${role === "spaceseeker" ? "bg-gray-300" : "bg-primary-green"}`} onClick={() => handleClick("spaceseeker")}>
            <Image
                src={"/assets/user-solid.svg"}
                alt="User"
                width={10}
                height={10}/>

            <p className={`text-sm font-medium ${role === "spaceseeker" ? "text-primary-green" : "text-white"}`}>Space seekers</p>
      </div>

      <div className={`flex align-center justify-center rounded lg:w-1/2 w-full cursor-pointer ${role !== "spaceseeker" ? "bg-gray-300" : "bg-primary-green"}`} onClick={() => handleClick("spaceowner")}>
            <Image
                src={"/assets/warehouse-solid.svg"}
                alt="User"
                width={15}
                height={15}/>

            <p className={`text-sm font-medium p-3 ${role !== "spaceseeker" ? "text-primary-green" : "text-white"}`}>Space Owners</p>
      </div>
    </div>
  )
}

export default RoleComponent;
