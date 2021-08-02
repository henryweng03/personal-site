import React from 'react';
import Typewriter from 'typewriter-effect';
import './hero-background.css'

const Hero = () => {
  return (
  <div>
    <div className = "absolute z-10 h-10 w-10 mt-5 ml-5">
      <a href="/">
       <img src="https://s6.gifyu.com/images/personal-logo.png" alt="asds" />
      </a>
    </div>
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
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <div className="flex justify-center text-center sm:text-left sm:grid sm:grid-cols-12">
          <div className="sm:col-span-10 md:col-span-9">
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
                I'm a first-year student at Stanford University pursuing
                a degree in computer science and economics. I'm currently
                working as an undergraduate researcher in the Stanford Secure
                Computer Systems group. I'm also the co-founder 
                of the <a className="link" target="_blank" href="https://theyei.org" rel="noreferrer">
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
  </div>
  
  )
}

export default Hero
