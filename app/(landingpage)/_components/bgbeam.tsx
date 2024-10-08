import React from "react";
import {Poppins } from 'next/font/google'
import { BackgroundBeamsWithCollision } from "./ui/backbeamcollision";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    weight: "400",
    subsets : ['latin']
  });


export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className={cn("text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight mt-auto" , poppins)}>
      क्या सोच रहे हो ?{" "} <br/>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">स्मरण करो</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">स्मरण करो </span>
          </div>
        </div>
      </h2>
      <div className="flex  items-center w-full p-6 z-50 mt-auto">
      <Logo/>
      <div className="md:ml-auto w-full justify-end md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">Privacy Policy</Button>
        <Button variant="ghost" size="sm">Terms and Conditions</Button>
      </div>
    </div>
    </BackgroundBeamsWithCollision>
  );
}
