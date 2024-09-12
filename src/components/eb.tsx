"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var gap-3">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Ibrahim Chikani
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          President (2024-25)
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
        <Image 
            src="/ibrahim.png"
            alt="Executive Body"
            width={10}
            height={10}
            priority
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.linkedin.com/in/ibrahimchikani"
            target="__blank"
            className="px-4 py-2 rounded-xl text-s font-normal dark:text-blue-500"
          >
            Know more →
          </CardItem>
        </div>
      </CardBody>
      
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Rithika Bollapragada
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Secretary (2024-25)
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image 
              src="/rithika.png"
              alt="Executive Body"
              width={10}
              height={10}
              priority
            />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.linkedin.com/in/rithika-bollapragada-1419b325b"
            target="__blank"
            className="px-4 py-2 rounded-xl text-s font-normal dark:text-blue-500"
          >
            Know more →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    
  );
}
