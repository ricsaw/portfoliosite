import resume from "../pages/about/Richard-Sawh-Resume.pdf";
import React from 'react';

const Resume = () => {
    return (
        <section className="resume">
            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
        </section>
    );
    }

export default Resume;
