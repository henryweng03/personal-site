import React from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className="h-auto flex flex-col items-center sm:grid grid-cols-2">
      <div className="py-2 sm:py-6 sm:ml-6">
        <p className = "font-sfmono text-xs lg:text-sm text-white">© 2021 HENRY WENG</p>
      </div>
      <div className = "flex justify-end items-center space-x-4">
        <a className="sm:py-6" href="mailto:hweng@stanford.edu">
          <p className = "footer-link font-bold">
            Email
          </p>
        </a>
        <a className="sm:py-6" href="https://www.linkedin.com/in/henry-weng/">
          <p className = "footer-link font-bold">
            LinkedIn
          </p>
        </a>
        <a className="sm:py-6" href="https://github.com/henryweng03">
          <p className = "footer-link font-bold sm:mr-6">
            GitHub
          </p>
        </a>
      </div>
      <div className = "pb-6 sm:pb-0"/>
    </div>
  )
}

export default Footer
