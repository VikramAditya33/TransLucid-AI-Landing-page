"use client";
import Silk from "@/components/Silk";

export default function BackgroundSilk() {
  return (
    <div className="pointer-events-none fixed -inset-4 -z-10">
      <Silk className="absolute inset-0 w-full h-full" speed={4.5} scale={1} color="#1D4ED8" noiseIntensity={1.0} rotation={0.06} />
    </div>
  );
}


