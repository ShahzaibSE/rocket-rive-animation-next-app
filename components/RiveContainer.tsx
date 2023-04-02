"use client";
import React from "react";
import Rive, {
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";

export default function RiveContainer() {
  const { rive, RiveComponent } = useRive({
    src: "rocket-animation.riv",
    artboard: "flying-rocket",
    autoplay: true,
  });

  // const trigger = useStateMachineInput(rive, "State Machine 1", "State Machine 1");

  return (
    <div className="flex justify-center">
      <div className="h-[300px] w-[300px] xmd:h-[450px] xmd:w-[450px] md:h-[500px] md:w-[500px]">
        {/* <Rive src="rocket-animation.riv"/> */}
        <RiveComponent />
      </div>
    </div>
  );
}
