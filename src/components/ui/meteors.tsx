import { cn } from "@/utils/cn";
import clsx from "clsx";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const horizontalMeteors = new Array(number || 10).fill(true);
  const verticalMeteors = new Array(number || 10).fill(true);

  const generateRandomCoordinate = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min) + "%";
  };

  const generateRandomPosition = () => {
    return {
      top: generateRandomCoordinate(0, 100),
      left: generateRandomCoordinate(0, 100),
    };
  };

  return (
    <div className={clsx("absolute inset-0 overflow-hidden", className)}>
      {horizontalMeteors.map((el, idx) => {
        const { top, left } = generateRandomPosition();
        return (
          <span
            key={"horizontalMeteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-1 w-1 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[80px] before:h-[3px] before:bg-gradient-to-r before:from-[#789dee]  before:to-transparent",
              className
            )}
            style={{
              top,
              left: idx % 2 === 0 ? left : generateRandomCoordinate(0, 50),
              animationDelay: Math.random() * (0.4 - 0.1) + 0.1 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            }}
          ></span>
        );
      })}
      {verticalMeteors.map((el, idx) => {
        const { top, left } = generateRandomPosition();
        return (
          <span
            key={"verticalMeteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-1 w-1 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[80px] before:h-[3px] before:bg-gradient-to-r before:from-[#86ffaa]  before:to-transparent",
              className
            )}
            style={{
              top: idx % 2 === 0 ? top : generateRandomCoordinate(0, 50),
              left,
              animationDelay: Math.random() * (0.6 - 0.1) + 0.1 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            }}
          ></span>
        );
      })}
    </div>
  );
};
