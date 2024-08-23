"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

interface HeroProps {
  isOpen: () => void;
}

const Hero = ({ isOpen }: HeroProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  const texts = [
    {
      title: "Organisation",
      description:
        "Create, Issue, View, and Verify Certificates on the Blockchain",
    },

    {
      title: "Learners",
      description:
        "Store, Organize, and Match Credentials with potential employers",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowText(true);
      }, 500); // The duration of the slide out animation
    }, 3000); // The interval between text changes

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className=" relative mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-[20px] py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row lg:h-[700px]">
      <div className="relative z-20 flex-1 flex-col xl:w-1/2  justify-center flex">
        <h1 className="text-[42px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[100%] lg:text-left">
          {" "}
          CredentialsDAO <br />
          <span className=" py-[px] text-[#fff] rounded-lg px-[10px] bg-gradient-to-r from-cyan-500 to-blue-500 text-[60px]">
            {" "}
            on EDUCHAIN
          </span>
        </h1>

        <h1
          className={`text-[29px] lg:text-[40px] font-semibold transition-all duration-500 text-[#e84848] ${
            showText ? "slide-in" : "slide-out"
          }`}
        >
          {texts[textIndex].title}
        </h1>
        <p
          className={`text-[16px] lg:text-[20px] mt-1 text-[#4a4a4a] xl:max-w-[720px] lg:text-left font-normal transition-all duration-500 ${
            showText ? "slide-in" : "slide-out"
          }`}
        >
          {texts[textIndex].description}
        </p>

        <div className="flex  w-full gap-3 mt-[20px]  ">
          <Button
            type="button"
            title="Get Started"
            variant="bg-gradient-to-r from-cyan-500 to-blue-500 px-[40px] py-[15px] "
            onClick={isOpen}
          />
        </div>
      </div>

      <Image
        src="/illustration/key.svg"
        className=" absolute bottom-0 opacity-75 right-[-100px] top-[100px]"
        alt="star"
        width={804}
        height={804}
      />
    </section>
  );
};

export default Hero;
