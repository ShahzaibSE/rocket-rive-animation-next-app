"use client";
import React from "react";
import Rive, {
  useRive,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";

export default function RiveContainer() {
  const { rive, RiveComponent } = useRive({
    src: "/rocket-animation.riv",
    autoplay: true,
    // layout: new Layout({
    //   fit: Fit.Cover,
    //   alignment: Alignment.Center,
    // }),
    artboard: "New Artboard",
    stateMachines: ["State Machine 1"],
  });

  if (rive?.contents) {
    console.log("Rendering rocket animation");
    console.log(rive?.animationNames);
  }

  return (
    <div className="flex justify-center">
      <div className="h-[300px] w-[300px] xmd:h-[450px] xmd:w-[450px] md:h-[500px] md:w-[500px]">
        <RiveComponent
          onMouseEnter={() => rive && rive.play()}
          onMouseLeave={() =>
            rive && rive.pause()
          }
        />
      </div>
    </div>
  );
}
