// AboutMe.js
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Richard-Sawh-Resume.pdf";
import React from 'react';

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [downloading, setDownloading] = useState(false);

  useEffect(() => setDownloading(false), [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Richard-Sawh-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloading(false);
  };

  return (
    <div className="aboutContainer container">
      <div className="row center-content">
        <motion.div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Greetings</h4>
            <h5>Full Stack Developer</h5>
            <p className="contentDescription">{brand}</p>
            <div className="infoContainer">
              <div className="info"><span>Name:</span> <p>{name}</p></div>
              <div className="info"><span>Email:</span> <p><a href={`mailto:${email}`}>{email}</a></p></div>
              <div className="info"><span>Location:</span> <p>{location}</p></div>
              <div className="info"><span>Availability:</span> <p>{availability}</p></div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download Resume"}
              </button>
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;