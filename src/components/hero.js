import React from 'react';
import Typewriter from 'typewriter-effect';
import './hero-background.css'

const Hero = () => {
  return (
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
    </ul>
    <div className="mx-auto max-w-7xl sm:pl-16 z-0">
      <div className="flex justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
        <div className="sm:col-span-11 md:col-span-9">
          <h1 className="hero-header">Hey, my name is <b>Henry Weng.</b></h1>
          
          {/*this div creates flex tag, which is needed to put typewriter & text on same line*/}
          <div className="justify-center sm:justify-start flex hero-header">
            <h2 className="hero-header">
              I like&nbsp;
            </h2>
            <b className="hero-header">
              <Typewriter
                  options={{
                    strings: [
                      'making cool stuff.',
                      'solving problems.', 
                      'learning new things.', 
                      'meeting people.',
                      'developing apps.', 
                      'eating good food.',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 20,
                    pauseFor: 1500
                  }}
                >
                </Typewriter>
            </b>
          </div>
          <div className="flex mt-6 mx-6 sm:mx-0">
            <p>
              I'm a first-year at Stanford University pursuing
              a degree in computer science and economics. I'm currently
              working as an undergraduate researcher in the Stanford Secure
              Computer Systems group. I'm also the co-founder 
              of the <a className="link" href="theyei.org">
                Youth Economics Initiative
                </a>,
              a network of economics clubs in 60+ schools serving over 2,500 students.
            </p>
          </div>
          <a href="mailto: hweng@stanford.edu">
            <button className="outline-button mt-6 sm:mt-14">
              Get in touch →
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  /*<div className="relative h-screen hero-background">
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
    <div className="text-center sm:text-left px-6 absolute top-1/2 md:left-3/10 transform -translate-y-1/2 md:-translate-x-3/10">
      <h1 className="hero-header">Hey, my name is <b>Henry Weng.</b></h1>
      <div className="justify-center sm:justify-start flex hero-header">
        <h2 className="hero-header">
          I like&nbsp;
        </h2>
        <b className="hero-header">
          <Typewriter
              options={{
                strings: [
                  'making cool stuff.',
                  'solving problems.', 
                  'learning new things.', 
                  'meeting people.',
                  'developing apps.', 
                  'eating good food.',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
                pauseFor: 1500
              }}
            >
            </Typewriter>
        </b>
      </div>
      <div className="flex mt-6">
       <p className="sm:w-3/4 sm:max-w-6xl">
         I'm a first-year at Stanford University pursuing
         a degree in computer science and economics. I'm also the co-founder 
         of the <a className="link" href="theyei.org">
           Youth Economics Initiative
           </a>,
         a network of economics clubs in 60+ schools serving over 2,500 students.
       </p>
      </div>
      <a href="mailto: hweng@stanford.edu">
        <button className="outline-button mt-6 sm:mt-14">
          Get in touch →
        </button>
      </a>
    </div>
  </div>*/
  )
}

export default Hero
