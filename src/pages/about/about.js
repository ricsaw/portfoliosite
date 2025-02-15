import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";
import React from 'react';

// About component

const About = ({ name, location, brand, email, availability }) => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="Introduction" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
    </section>
  );
};

export default About;