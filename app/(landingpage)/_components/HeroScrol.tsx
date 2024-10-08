"use client";
import React from "react";

import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { useMediaQuery } from "usehooks-ts";

export function HeroScrollDemo() {

    const isMobile = useMediaQuery("(max-width : 768px)");

  return (
    <div className=" flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl hidden md:block font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Seamless Writing
              </span>
            </h1>
          </>
        }
      >
        <Image
        
          src={isMobile ? '/bannermobiledark.png' : "/bannernight.png"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
