"use client";
import React from "react";
import Rive from "@rive-app/react-canvas";

export default function RiveContainer() {

  return (
    <div className="flex justify-center">
      <div className="h-[300px] w-[300px] xmd:h-[450px] xmd:w-[450px] md:h-[500px] md:w-[500px]">
        <Rive src="rocket-animation.riv" />
      </div>
    </div>
  );
}
