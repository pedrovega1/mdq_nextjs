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
  const meteors = new Array(number || 20).fill(true);
  return (
    <div
      className={clsx(
        "absolute inset-0 overflow-hidden", 
        className
      )}
    >
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-1 w-1 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[80px] before:h-[3px] before:bg-gradient-to-r before:from-[#789dee]  before:to-transparent",
            className
          )}
          style={{
            top: Math.floor(Math.random() * 100) + "%", 
            left: Math.floor(Math.random() * 95) + "%",
            animationDelay: Math.random() * (0.6 - 0.1) + 0.1 + "s", 
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </div>
  );
};
