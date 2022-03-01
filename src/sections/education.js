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
              <img className="rounded-lg h-2/3 w-2/3 md:w-auto md:h-auto" src="../images/stanford.jpg" alt="Stanford Background" />
            </div>
            <div className="mt-6 md:mt-0 md:pl-10">
              <div className = "flex justify-center md:block">
                <h3>
                  <a href="https://www.stanford.edu/" className="link" target="_blank" rel="noreferrer">Stanford University</a>
                </h3>
              </div>
              <div className = "flex justify-center md:block">
                <p className="date">Exp. Graduation: Jun 2024</p>
              </div>
              <div className = "flex justify-center md:block">
                <p className="date">B.S. Computer Science + Economics, GPA: 4.11</p>
              </div>
              <div className="h-4"></div>
              <div className = "flex justify-center md:block">
               <p>Relevant Coursework</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">CS106B Programming Abstractions</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">CS103 Mathematical Foundations of Computing</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">CS109 Probability for Computer Science</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">ECON136 Market Design</p>
                </div>
              </div>
           </div>
          </div>
          <div className="h-16"></div>

          <div className="education-grid">
            <div className = "flex justify-center md:block">
              <img className="rounded-lg h-2/3 w-2/3 md:w-auto md:h-auto" src="../images/saratoga.jpg" alt="Saratoga High" />
            </div>
            <div className="mt-6 md:mt-0 md:pl-10 ">
              <div className = "flex justify-center md:block">
                <h3>
                  <a href="https://www.saratogahigh.org/" className="link" target="_blank" rel="noreferrer">Saratoga High School</a>
                </h3>
              </div>
              <div className = "flex justify-center md:block">
                <p className="date">GPA: 4.0, SAT: 1600</p>
              </div>
              <div className="h-4"/>
              <div className = "flex justify-center md:block">
                <p>Relevant Coursework</p>
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
                  <p className="text-xs sm:text-sm font-sfmono">AP Statistics</p>
                </div>
              </div>
              <div className="h-4"/>
              <div className = "flex justify-center md:block">
                <p>Awards &amp; Distinctions</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">USA Computing Olympiad Gold</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">FBLA Nationals Winner in Economics</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">3x Hackathon Winner</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">USA Physics Olympiad Semifinalist</p>
                </div>
                <div className="tag-outline-wrapper">
                  <p className="text-xs sm:text-sm font-sfmono">Eagle Scout</p>
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
