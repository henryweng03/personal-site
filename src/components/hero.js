import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
  <div className="relative h-screen bg-blue-dark">
    <div className="text-center sm:text-left absolute top-1/2 px-8 transform -translate-y-1/2">
      <h1 className="hero-header">Hi, my name is <b>Henry Weng.</b></h1>
      <div className="justify-center sm:justify-start flex hero-header">
        <h1 className="hero-header">
          I'm&nbsp;
        </h1>
        <b className="my-0 sm:my-1 lg:my-2">
          <Typewriter
              options={{
                strings: [
                  'a developer.', 
                  'a student.', 
                  'an engineer.', 
                  'an entrepreneur.'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
                pauseFor: 1750
              }}
            />
        </b>
      </div><br />
      <div className="flex">
       <p className="sm:w-2/3 sm:max-w-4xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur officiis soluta pariatur enim, at laboriosam id dolores animi sit a hic cumque numquam accusamus officia corrupti est, totam praesentium. Labore.</p>
      </div>
      <button className="outline-button mt-8 sm:mt-14">
        Get in touch
      </button>
    </div>
  </div>
  )
}

export default Hero
