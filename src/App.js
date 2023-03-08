import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import React from 'react';


function App() {
  const personalDetails = {
    name: "Richard Sawh",
    location: "Englewood, NJ",
    tagline: "I'm a Software Developer",
    email: "ras7019@g.rit.edu",
    availability: "Open for work",
    brand:
      "I have a diverse range of technical skills and a broad knowledge of programming languages, including Python, Java, C++, C#, Solidity, R, Javascript, HTML, CSS, React, and Angular. I am also experienced in using databases such as MySQL and PostgreSQL, as well as API services like RESTFUL, Paypal, Google Cloud Asset, Google Maps API/SDK, and Yahoo Finance. Moreover, I have expertise in operating systems, including Windows, Linux/Unix (Ubuntu, Debian, PopOS), and Android. I enjoy working with a variety of tools and platforms and take pride in my ability to adapt to new technologies quickly. With my diverse skill set, I am confident in my ability to tackle a wide range of technical challenges and contribute meaningfully to any team or project. I am excited about the ever-evolving technology landscape and always looking for opportunities to learn and expand my knowledge.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;