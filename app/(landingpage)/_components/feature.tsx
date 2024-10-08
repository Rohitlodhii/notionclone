"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";


export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 md:px-0  ">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-neutral-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Smaran Ai to generate content
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            generate articles , notes , role plays or any other content with the help
            of smaran ai.
          </p>
        </div>
        <Image
          src="/bannerlight.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-slate-700">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Create and share.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Share your work to your Audience , get Feedbacks !
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Create Notes with the best Text editor in the Market!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Smaran uses notion styled text editor allows to text formating, media insertion and drag and drop functions.
          </p>
        </div>
        <Image
          src="/bannernight.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>


      
    </div>
  );
}
