import React from 'react';
import Typewriter from 'typewriter-effect';
import './hero-background.css'

const Hero = () => {
  return (
  <div className="relative h-screen hero-background">
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
    </ul>
    <div className="text-center sm:text-left px-7 absolute top-1/2 md:left-3/10 transform -translate-y-1/2 md:-translate-x-3/10">
      <h1 className="hero-header">Hey, my name is <b>Henry Weng.</b></h1>
      <div className="justify-center sm:justify-start flex hero-header">
        <h1 className="hero-header">
          I like&nbsp;
        </h1>
        <b className="my-0 sm:my-1 lg:my-2">
          <Typewriter
              options={{
                strings: [
                  'making cool things.',
                  'solving problems.', 
                  'learning.', 
                  'building apps.', 
                  'leading people.',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
                pauseFor: 1750
              }}
            >
            </Typewriter>
        </b>
      </div><br />
      <div className="flex">
       <p className="sm:w-2/3 sm:max-w-4xl">
         I'm a freshman at Stanford University pursuing
         a degree in computer science and economics. I'm also the co-founder 
         of the <a className="link" href="theyei.org">
           Youth Economics Initiative
           </a>,
         a network of economics clubs in 60+ schools serving over 2,500 students.
       </p>
      </div>
      <button className="outline-button mt-8 sm:mt-14">
        Get in touch →
      </button>
    </div>
  </div>
  )
}

export default Hero
