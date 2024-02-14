import React from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-auto flex flex-col items-center sm:grid grid-cols-2 sm:mx-6 mb-6 sm:mb-0">
      <div className="py-2 sm:py-6">
        <p className="font-sfmono text-xs lg:text-sm text-white">
          © 2024 HENRY WENG
        </p>
      </div>
      <div className="mt-2 sm:mt-0 flex justify-end items-center space-x-4">
        <a
          href="https://linkedin.com/in/henry-weng"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            size={28}
            className="hidden sm:block text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
          />
          <FaLinkedin
            size={24}
            className="block sm:hidden text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
          />
        </a>
        <a
          href="https://github.com/henryweng03"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            size={28}
            className="hidden sm:block text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
          />
          <FaGithub
            size={24}
            className="block sm:hidden text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
          />
        </a>
        <a href="mailto: hweng@stanford.edu">
          <FiMail
            size={28}
            className="hidden sm:block text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
          />
          <FiMail
            size={24}
            className="block sm:hidden text-secondary-light hover:text-white duration-150 opacity-40 hover:opacity-80"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
