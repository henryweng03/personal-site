import React from "react";
import Typewriter from "typewriter-effect";
import "./hero-background.css";

const Hero = () => {
  return (
    <div>
      <div className="relative h-screen bg-primary-dark flex items-center">
        <div className="mx-auto max-w-6xl sm:pl-16 z-0">
          <div className="flex justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
            <div className="sm:col-span-10 md:col-span-9">
              <h1 className="mx-6 sm:mx-0 hero-header">I'm Henry.</h1>

              {/*this div creates flex tag, which is needed to put typewriter & text on same line*/}
              <div className="justify-center sm:justify-start flex hero-header">
                <h2 className="hidden sm:block hero-header">I enjoy&nbsp;</h2>
                <h1 className="hidden sm:block hero-header">
                  <Typewriter
                    options={{
                      strings: [
                        "solving problems.",
                        "meeting people.",
                        "exploring.",
                        "building useful things.",
                        "learning for its own sake.",
                        "eating good food.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 20,
                      pauseFor: 1500,
                      cursor: "|",
                    }}
                  ></Typewriter>
                </h1>
              </div>
              <div className="flex mt-6 mx-6 sm:mx-0">
                <p>
                  I'm a student at Stanford studying computer science,
                  economics, and statistics.
                </p>
              </div>
              <div className="flex mt-3 mx-6 sm:mx-0">
                <p>
                  {" "}
                  I recently took a year off school to build{" "}
                  <a className="link" href="https://meethazel.ai/">
                    Hazel
                  </a>{" "}
                  <a className="link" href="https://pear.vc/pearx/">
                    (PearX W23)
                  </a>
                  , an AI relationship manager for realtors. I'm also the
                  founder and advisor for the{" "}
                  <a className="link" href="#yei">
                    Youth Economics Initiative
                  </a>
                  , a global network of economics clubs in over 90 high schools.
                </p>
              </div>
              <a href="mailto: hweng@stanford.edu">
                <button className="outline-button mt-6 sm:mt-14">
                  Say hi →
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
