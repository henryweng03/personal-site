import React from "react";
import Typewriter from "typewriter-effect";
import "./hero-background.css";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="h-screen flex items-center">
        <div className="relative mx-auto max-w-6xl sm:pl-16 z-0">
          <img
            src="../images/henryOutline.png"
            alt="Line drawing of Henry Weng"
            className="hidden lg:block absolute -right-3 xl:-right-6 -top-[4.5rem] w-1/2 opacity-20 scale-95 z-0"
          />
          <div className="flex flex-col justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
            {/* Header & subheader */}
            <div className="sm:col-span-11 lg:col-span-7 z-10">
              <h1 className="mx-6 sm:mx-0 hero-header">Hey! I'm Henry.</h1>
            </div>

            <div className="col-span-11 z-10">
              <div className="justify-center sm:justify-start flex hero-header">
                <h2 className="hidden sm:block hero-header">I enjoy&nbsp;</h2>
                <h1 className="hidden sm:block hero-header">
                  <Typewriter
                    options={{
                      strings: [
                        "solving problems.",
                        "making things people love.",
                        "learning for its own sake.",
                        "meeting people.",
                        "exploring.",
                        "pondering life.",
                        "adventure.",
                        "eating good food.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      deleteSpeed: 18,
                      pauseFor: 1700,
                      cursor: "|",
                    }}
                  />
                </h1>
              </div>
            </div>

            {/* Pargraph */}
            <div className="col-span-11 lg:col-span-7 z-10">
              <div className="flex mt-6 mx-6 sm:mx-0">
                <p>
                  I study computer science, economics, and statistics at
                  Stanford.
                </p>
              </div>
              <div className="flex mt-3 mx-6 sm:mx-0">
                <p>
                  {" "}
                  I recently took a year off school to build{" "}
                  <a
                    className="link"
                    href="https://meethazel.ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hazel
                  </a>{" "}
                  <a
                    className="link"
                    href="https://pear.vc/pearx/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (PearX W23)
                  </a>
                  , an AI relationship manager for realtors. I'm also the
                  founder and advisor for the{" "}
                  <a
                    className="link"
                    href="https://theyei.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Youth Economics Initiative
                  </a>
                  , a global network of economics clubs in over 90 high schools.
                  I'm currently building an AI journal for human flourishing.
                </p>
              </div>
              <div className="mt-6 sm:mt-14 space-x-4 flex justify-center sm:justify-start">
                <a className="button" href="mailto: hweng@stanford.edu">
                  Say hello! →
                </a>
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
    </div>
  );
};

export default Hero;
