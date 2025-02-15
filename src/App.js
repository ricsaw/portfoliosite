import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import React from 'react';


function App() {
  const personalDetails = {
    name: "Richard Sawh",
    location: "Englewood, NJ/NYC Metro Area",
    tagline: "I'm a Software Developer",
    email: "richardsawh@ymail.com",
    availability: "Open for work",
    brand:
      "I have a diverse range of technical skills and broad experience across multiple programming languages, including Python, Java, C++, Solidity, Dart, Go, JavaScript, HTML, CSS, React, and Angular. I am well-versed in databases such as MySQL, PostgreSQL, and NoSQL, and have worked extensively with API services, including RESTful APIs, PayPal API, Google Cloud Asset API, Google Maps API/SDK, and Yahoo Finance API. Additionally, I have experience working with various tools and platforms, including AWS, Firebase, Apache Tomcat, Arduino, Postman, Trello, Jira, and Git. My expertise spans across multiple operating systems, including Windows, Linux/Unix (Ubuntu, Debian, PopOS), and Android. I take pride in my adaptability and ability to quickly learn and integrate new technologies. Whether developing software solutions, optimizing databases, or leveraging cloud-based services, I am confident in my ability to tackle complex technical challenges. Passionate about the ever-evolving technology landscape, I am always looking for opportunities to expand my knowledge and contribute to innovative projects.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;