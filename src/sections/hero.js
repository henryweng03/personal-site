import React from "react";
import "./hero-background.css";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HoverWrapper from "../components/HoverWrapper";
import HoverLink from "../components/HoverLink";
import HoverTagWrapper from "../components/HoverTagWrapper";

const Hero = () => {
  return (
    <div className="h-screen flex items-center bg-gradient-to-b from-[#17172a] to-primary-dark ">
      <div className="relative mx-auto max-w-6xl sm:pl-16 z-0">
        <img
          src="../images/henryOutline.png"
          alt="Line drawing of Henry Weng"
          className="hidden lg:block absolute -right-3 xl:-right-6 -top-[4.5rem] w-1/2 opacity-20 scale-95 z-0"
        />
        <div className="flex flex-col justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
          {/* Header & subheader */}
          <div className="sm:col-span-11 lg:col-span-7 z-10">
            <h1 className="mx-6 sm:mx-0 hero-header">Hi, I'm Henry!</h1>
            <div className="mt-2">
              <h1 className="mx-6 sm:mx-0 hero-header">
                I build delightful, useful things.
              </h1>
            </div>
            <div className="flex mt-6 mx-6 sm:mx-0">
              <p>
                I study computer science, economics, and statistics at Stanford.
              </p>
            </div>
            <div className="flex mt-3 mx-6 sm:mx-0">
              <p>
                {" "}
                I recently took a gap year from school to build{" "}
                <HoverLink
                  linkText={"Hazel"}
                  linkAddress={
                    "https://youtu.be/xYcmxqW_N6I?si=VLuv71ySgCbkVESv"
                  }
                  linkHoverText={"Watch demo day video"}
                />{" "}
                <HoverLink
                  linkText={"(PearX W23)"}
                  linkAddress={"https://www.pear.vc/pearx/"}
                />
                , an AI workflow for realtors. I'm also the founder and advisor
                for the{" "}
                <HoverLink
                  linkText={"Youth Economics Initiative"}
                  linkAddress={"https://www.theyei.org"}
                />
                , an accelerator that's helped 90+ students found economics
                clubs.
              </p>
            </div>
            <div className="flex mt-3 mx-6 sm:mx-0">
              <p>
                These days, I'm working on an AI-enabled journal for human
                flourishing.
              </p>
            </div>
            <div className="mt-6 sm:mt-12 space-x-4 flex justify-center sm:justify-start">
              <HoverTagWrapper hoverText={"hweng [at] stanford [dot] edu"}>
                <a className="button" href="mailto: hweng@stanford.edu">
                  Say hello! →
                </a>
              </HoverTagWrapper>
            </div>
            <div className="mt-4 sm:mt-6 space-x-4 flex justify-center sm:justify-start">
              <a
                href="https://linkedin.com/in/henry-weng"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={28}
                  className="hidden sm:block text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
                />
                <FaLinkedin
                  size={24}
                  className="block sm:hidden text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
                />
              </a>
              <a
                href="https://github.com/henryweng03"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub
                  size={28}
                  className="hidden sm:block text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
                />
                <FaGithub
                  size={24}
                  className="block sm:hidden text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
                />
              </a>
              <a href="mailto: hweng@stanford.edu">
                <FiMail
                  size={28}
                  className="hidden sm:block text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
                />
                <FiMail
                  size={24}
                  className="block sm:hidden text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
