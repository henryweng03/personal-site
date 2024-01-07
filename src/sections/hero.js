import React from "react";
import Typewriter from "typewriter-effect";
import "./hero-background.css";

const Hero = () => {
  return (
    <div>
      <div className="relative h-screen hero-background flex items-center">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="mx-auto max-w-6xl sm:pl-16 z-0">
          <div className="flex justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
            <div className="sm:col-span-10 md:col-span-9">
              <h1 className="mx-6 sm:mx-0 hero-header">
                Hey, my name is <b>Henry Weng.</b>
              </h1>

              {/*this div creates flex tag, which is needed to put typewriter & text on same line*/}
              <div className="justify-center sm:justify-start flex hero-header">
                <h2 className="hidden sm:block hero-header">I like&nbsp;</h2>
                <h1 className="hidden sm:block hero-header">
                  <Typewriter
                    options={{
                      strings: [
                        "<b>solving problems.</b>",
                        "<b>meeting people.</b>",
                        "<b>exploring.</b>",
                        "<b>thinking.</b>",
                        "<b>building cool stuff.</b>",
                        "<b>learning.</b>",
                        "<b>eating good food.</b>",
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
                  economics, and statistics. Last year, I took a time off school
                  to build{" "}
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
