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
    src: "rocket-animation.riv",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  if (rive?.contents) {
    console.log("Rendering rocket animation");
    console.log(rive?.animationNames);
  }

  return (
    <div className="rive-container">
      <RiveComponent />
    </div>
  );
}
