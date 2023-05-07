import React, { useState, useEffect } from "react";
import "../index.css";

const pfp = require("../assets/pfp.jpg");
const linkedin = require("../assets/linkedin.png");
const github = require("../assets/github.png");
const resume = require("../assets/resume.png");
const resumePdf = require("../assets/AllanTan_Resume.pdf")

function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-90 text-white pt-20">
      <div className="items-center justify-center flex-col px-20">
        <div className="flex justify-between">
          <h1 className="block text-4xl font-bold mb-4text-green-200">
            Hi, I'm Allan! 👋
          </h1>
          {/* <button onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
        </div>
        <div className="flex pt-5">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={pfp} alt="pfp" />
          </div>
          <div className="ml-4 max-w-2xl pl-5">
            <h1 className="font-bold text-xl pb-5">
              I aspire to solve complex problems, challenge myself with new
              initiatives, and pursue a career in software engineering.
            </h1>
            <p className="text-gray-500">
              I am currently a sophomore at the University of British Columbia
              studying Computer Science. I am passionate about learning new
              technologies and building projects that solve real-world problems.
              I have experience in full-stack development and have interests in
              machine learning and artificial intelligence. I'm currently
              working as a software engineer intern at CoPilot AI!
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-1 bg-slate-100  mt-20 mb-20"></div>
      <div className="flex items-center justify-center px-20 gap-32 bg-slate-50 shadow-cyan-500/50 rounded-md">
        <div className="w-24 h-24">
          <a
            href="https://www.linkedin.com/in/allan-tan03/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full h-full object-cover "
              src={linkedin}
              alt="pfp"
            />
          </a>
        </div>
        <div className="w-16 h-16">
          <a 
            href="https://github.com/AllanT102" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-full h-full object-cover" src={github} alt="pfp" />
          </a>
        </div>
        <div className="w-16 h-16">
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-full h-full object-cover" src={resume} alt="pfp" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
