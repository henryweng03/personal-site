import React from 'react';
import "../index.css"
import './hero-background.css'


const Education = () => {
  return (
    <div className="h-auto bg-blue-dark">
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <div className="h-12"></div>
        <h2 className = "text-center sm:text-left section-header">
          {'>'}{' '}getEducation()
        </h2>
        <div className="px-8 sm:pr-16 sm:pl-0 mt-12">
          <div className="education-grid">
            <div className = "flex justify-center md:block">
              <img className="rounded-lg w-2/3 md:w-auto" src="../images/stanford-green.jpg" alt="Stanford Background" />
            </div>
            <div className="mt-6 md:mt-0 md:pl-10">
              <div className = "flex justify-center md:block">
                <h3>
                  <a href="https://www.stanford.edu/" className="link" target="_blank" rel="noreferrer">Stanford University</a>
                </h3>
              </div>
              <div className = "flex justify-center md:block">
                <p className="date">Sept 2021 - June 2025</p>
              </div>
              <div className = "flex justify-center md:block">
                <p className="date">B.S. Computer Science + Economics</p>
              </div>
              <div className="h-4"></div>
              <div className = "flex justify-center md:block">
               <p className>Relevant Coursework</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">CS 106B: Programming Abstractions</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">ECON 50: Economic Analysis I</p>
                </div>
              </div>
           </div>
          </div>
          <div className="h-16"></div>

          <div className="education-grid">
            <div className = "flex justify-center md:block">
              <img className="rounded-lg w-2/3 md:w-auto" src="../images/saratoga-green.jpg" alt="Stanford Background" />
            </div>
            <div className="mt-6 md:mt-0 md:pl-10 md:pr-16">
              <div className = "flex justify-center md:block">
                <h3>
                  <a href="https://www.saratogahigh.org/" className="link" target="_blank" rel="noreferrer">Saratoga High School</a>
                </h3>
              </div>
              <div className = "flex justify-center md:block">
                <p className="date">Aug 2017 - June 2021</p>
              </div>
              <div className = "flex justify-center md:block">
                <p className="date">GPA: 4.0, SAT: 1600</p>
              </div>
                <div className="h-4"></div>
              <div className = "flex justify-center md:block">
                <p className>Relevant Coursework</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">Data Structures</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">Discrete Mathematics</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">Multivariable Calculus</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">Linear Algebra</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">Differential Equations</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">AP Computer Science</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">AP Physics C: Mechanics</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">AP Physics C: E&amp;M</p>
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
