import React from "react";

const Header = () => {
  return (
    <div>
      <div className="absolute z-10 h-8 w-8 sm:h-10 sm:w-10 mt-5 ml-5">
        <div>
          <a href="/">
            <img src="../images/personal-logo.png" alt="logo" />
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 z-10 mt-5 mr-5">
        <div className="flex items-center">
          <a href="#experience">
            <p className="nav-link mr-4">getExperience()</p>
          </a>
          <a href="#projects">
            <p className="nav-link mr-4">getProjects()</p>
          </a>
          <a href="#education">
            <p className="nav-link mr-4">getEducation()</p>
          </a>
          <a href="#skills">
            <p className="nav-link mr-4">getSkills()</p>
          </a>
          <a href="/downloads/henry_weng_resume.pdf" target="_blank">
            <button className="button-sm">getResume()</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
