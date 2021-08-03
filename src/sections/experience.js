import React from 'react';
import Typewriter from 'typewriter-effect';
import "../index.css"
import './hero-background.css'

const Experience = () => {
  return (
    <div className="h-auto bg-blue-dark">
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <div className="h-6"></div>
          <div className="flex justify-center text-center sm:text-left sm:body-grid">
              
          </div>
          <div className="justify-center body-grid">
              <h2 className = "text-center sm:text-left section-header">
                {'>'}{' '}me.getExperience()
              </h2>
              <div className="col-start-2 mt-6 px-8 sm:mt-0 col-end-2 sm:px-16">
                <h3>Undergraduate Reseracher @ <a href="https://www.scs.stanford.edu/" className="link" target="_blank" rel="noreferrer">Stanford University</a></h3>
                <p className="date">June 2021 - Present</p>
                <ul className="list-disc pl-10 pt-3">
                  <li>Advised by Gina Yuan in the Secure Computer Systems group;
                     working on Karl, a home cloud platform enhancing the security
                     IoT devices</li>
                  <li>Revamped node rendering on the Karl UI web application</li>
                  <li>Building and deploying Karl website on stanford.edu domain</li>
                </ul>
                <h3 className="pt-6">Research Assistant @ <a href="https://bepp.wharton.upenn.edu/profile/smetters/" className="link" target="_blank" rel="noreferrer">The Wharton School</a></h3>
                <p className="date">June 2020 - Sept 2020</p>
                <ul className="list-disc pl-10 pt-3">
                  <li>Worked under Boettner Chair Professor Kent Smetters; 
                    scraped and cleaned gigabytes of M&amp;A and insiders data from the 
                    SEC using BeautifulSoup, Selenium, NumPy, and pandas Python libraries</li>
                  <li>Constructed multiple regression model optimizing taxation on 
                    entrepreneurs using the statsmodels Python library</li>
                  <li>Wrote documentation and helped onboard incoming research assistant</li>
                </ul>
                <h3 className="pt-6">Student Leader Intern @ <a href= "https://about.bankofamerica.com/en/making-an-impact/student-leaders" className="link" target="_blank" rel="noreferrer">Bank of America</a></h3>
                <p className="date">June 2020 - Sept 2020</p>
                <ul className="list-disc pl-10 pt-3">
                  <li>Launched aggregated database used by 200+ users to manage 
                    LifeMoves’s 13 homeless shelter branches</li>
                  <li>Collaborated with Bank of Am erica Market President to allocate 
                    $400,000 in Neighborhood Builders grants</li>
                  <li>Work featured <a href="https://www.mercurynews.com/2020/07/26/saratoga-teen-is-silicon-valley-bank-of-america-student-leader/" className="link" target="_blank" rel="noreferrer">here</a> in the San Jose Mercury News</li>
                </ul>
              </div>
          </div>
        </div>
        <div className="pb-24"></div>
    </div>
  )
}

export default Experience
