import React from "react";
import Typewriter from "typewriter-effect";
import "./hero-background.css";

const Hero = () => {
  return (
    <div>
      <div className="h-screen flex items-center">
        <div className="relative mx-auto max-w-6xl sm:pl-16 z-0">
          <img
            src="../images/henryOutline.png"
            alt="Line drawing of Henry Weng"
            className="absolute -right-3 xl:-right-6 -top-36 md:-top-24 w-1/2 opacity-20 scale-150 sm:scale-95 z-0"
          />
          <div className="flex justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
            <div className="sm:col-span-10 md:col-span-9 z-10">
              <h1 className="mx-6 sm:mx-0 hero-header">Hey! I'm Henry.</h1>

              {/*this div creates flex tag, which is needed to put typewriter & text on same line*/}
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
              <a href="mailto: hweng@stanford.edu">
                <button className="button mt-6 sm:mt-14">Say hello! →</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
