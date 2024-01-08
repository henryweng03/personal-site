import React from "react";
import "../index.css";
import "./hero-background.css";
import Badge from "../components/Badge";

const collegeCourses = [
  "Artificial Intelligence",
  "Machine Learning",
  "Reinforcement Learning",
  "Operating Systems",
  "Entrepreneurial Marketing",
  "Data Structures & Algorithms",
  "Computer Systems",
  "Market Design",
  "Auction Theory",
  "Discrete Math",
  "Applied Matrix Theory",
];

const highSchoolCourses = [
  "Discrete Math",
  "Multiavariable Calculus",
  "Linear Algebra",
  "Differential Equations",
  "AP Computer Science",
  "AP Statistics",
];

const highSchoolAwards = [
  "USA Computing Olympiad Gold",
  "USA Physics Olympiad Semifinalist",
  "Three-time Hackathon Winner",
  "National Merit Scholar",
  "Eagle Scout",
];

const Education = () => {
  return (
    <div className="h-auto">
      <div className="mx-auto max-w-6xl sm:pl-16 z-0">
        <h2 className="text-center sm:text-left section-header">
          {">"} getEducation()
        </h2>
        <div className="px-8 sm:pr-16 sm:pl-0 mt-12">
          <div className="education-grid">
            <div className="flex justify-center md:block">
              <img
                className="rounded-lg h-2/3 w-2/3 md:w-auto md:h-auto"
                src="../images/stanford.jpg"
                alt="Stanford Background"
              />
            </div>
            <div className="mt-6 md:mt-0 md:pl-10">
              <div className="flex justify-center md:block">
                <h3>
                  <a
                    href="https://www.stanford.edu/"
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stanford University
                  </a>
                </h3>
              </div>
              <div className="flex justify-center text-center sm:text-left md:block">
                <p className="date">B.S. Computer Science + Econ</p>
              </div>
              <div className="h-4"></div>
              <div className="flex justify-center md:block">
                <p>Relevant Coursework</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {collegeCourses.map((course) => (
                  <Badge text={course} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-16"></div>

          <div className="education-grid">
            <div className="flex justify-center md:block">
              <img
                className="rounded-lg h-2/3 w-2/3 md:w-auto md:h-auto"
                src="../images/saratoga.jpg"
                alt="Saratoga High"
              />
            </div>
            <div className="mt-6 md:mt-0 md:pl-10">
              <div className="flex justify-center md:block ">
                <h3>
                  <a
                    href="https://www.saratogahigh.org/"
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saratoga High School
                  </a>
                </h3>
              </div>
              <div className="flex justify-center md:block">
                <p className="date">GPA: 4.0, SAT: 1600</p>
              </div>
              <div className="h-4" />
              <div className="flex justify-center md:block">
                <p>Relevant Coursework</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {highSchoolCourses.map((course) => (
                  <Badge text={course} />
                ))}
              </div>
              <div className="h-4" />
              <div className="flex justify-center md:block">
                <p>Awards &amp; Distinctions</p>
              </div>
              <div className="h-2"></div>
              <div className="flex justify-center md:justify-start flex-wrap">
                {highSchoolAwards.map((award) => (
                  <Badge text={award} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
