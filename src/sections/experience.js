import React from 'react';
import Typewriter from 'typewriter-effect';
import "../index.css"
import './hero-background.css'

const Experience = () => {
  return (
    <div className="h-auto bg-blue-dark">
      <div className="mx-auto max-w-6xl md:pl-16 z-0">
        <div className="h-12" />
        <div className="experience-grid">
          <h2 className = "text-center md:text-left section-header">
            {'>'}{' '}getExperience()
          </h2>
          <div className="col-start-2 mt-12 px-8 md:mt-0 col-end-2 md:pl-6 md:pr-16">
            <h3>Undergraduate Researcher @ <a href="https://www.scs.stanford.edu/" className="link" target="_blank" rel="noreferrer">Stanford University</a></h3>
            <p className="date">Jun 2021 - Dec 2021</p>
            <ul className="list-square pl-8 pt-3">
              <li>Contributed to the development of Karl, an open-source framework that allows users to control and measure their privacy on IoT devices</li>
              <li>Implemented a node-ranking algorithm with TypeScript to revamp the tree rendering in the Karl UI web application</li>
              <li>Developed a RAPPOR-based differential privacy module using Rust for private user data aggregation</li>
              <li>Built and deployed <a href="http://karl.scs.stanford.edu/" className="link" target="_blank" rel="noreferrer">Karl website</a> on official stanford.edu domain</li>
              <li>Advised by Professor David Mazières and Gina Yuan in the Secure Computer Systems group</li>
            </ul>
            <div id="yei" className="h-8"></div>
            <h3>Co-founder &amp; Chairman @ <a href="https://theyei.org/" className="link" target="_blank" rel="noreferrer">Youth Economics Initiative</a></h3>
            <p className="date">Mar 2019 - Present</p>
            <ul className="list-square pl-8 pt-3">
              <li>Co-founded the largest coalition of economics clubs in the world (70+ clubs, 3,000+ members, 45+ staff)</li>
              <li>Manage organization some of the largest international <a href="https://theyei.org/events" className="link" target="_blank" rel="noreferrer">economics competitions and events</a> with 1200+ attendees total</li>
              <li>Partnered with Bank of America to develop the <a href="https://theyei.org/programs/flip/" className="link" target="_blank" rel="noreferrer">FLIP program</a>, which provides free financial literacy education to underserved youth</li>
              <li>Assembled and work with an advisory board consisting of the Dean Emeritus of Columbia Business School, nonprofit directors, and economics professors</li>
            </ul>
            <div className="h-8"></div>
            <h3>Research Assistant @ <a href="https://bepp.wharton.upenn.edu/profile/smetters/" className="link" target="_blank" rel="noreferrer">The Wharton School</a></h3>
            <p className="date">Jun 2020 - Sep 2020</p>
            <ul className="list-square pl-8 pt-3">
              <li>Worked under Boettner Chair Professor Kent Smetters; 
                scraped and cleaned gigabytes of M&amp;A and insiders data from the 
                SEC using BeautifulSoup, Selenium, NumPy, and pandas Python libraries</li>
              <li>Constructed multiple regression model optimizing taxation on 
                entrepreneurs using the statsmodels Python library</li>
              <li>Wrote documentation and helped onboard incoming research assistant</li>
            </ul>
            <div className="h-8"></div>
            <h3>Student Leader Intern @ <a href= "https://about.bankofamerica.com/en/making-an-impact/student-leaders" className="link" target="_blank" rel="noreferrer">Bank of America</a></h3>
            <p className="date">Jun 2020 - Sep 2020</p>
            <ul className="list-square pl-8 pt-3">
              <li>Launched aggregated database used by 200+ users to manage 
                LifeMoves’s 13 homeless shelter branches</li>
              <li>Collaborated with Bank of America Market President to allocate 
                $400,000 in Neighborhood Builders grants</li>
              <li>Work featured in the <a href="https://www.mercurynews.com/2020/07/26/saratoga-teen-is-silicon-valley-bank-of-america-student-leader/" className="link" target="_blank" rel="noreferrer">San Jose Mercury News</a></li>
            </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience
